import ExcelJS from "exceljs";
import type { Expense, ImportResult, Job, JobStatus, Payment, ProductType, Workflow } from "../types";
import { defaultSettings, newWorkflow, safeNumber } from "./calculations";

const statusValues: JobStatus[] = [
  "Booked",
  "Open",
  "Deposit",
  "Paid",
  "In Progress",
  "Postponed",
  "Closed",
  "Canceled",
];

const productFallback: ProductType = "Services";

const headerAliases = new Map([
  ["ordernumber", "orderNumber"],
  ["order", "orderNumber"],
  ["orderid", "orderNumber"],
  ["paymentamount", "paymentAmount"],
  ["paymentdate", "paymentDate"],
  ["paymenttype", "paymentType"],
  ["taxamount", "tax"],
  ["taxpercentage", "taxRate"],
  ["taxableamount", "taxable"],
  ["subtotal", "bookingTotal"],
  ["ordertotal", "grandTotal"],
  ["firstname", "first"],
  ["lastname", "last"],
  ["paid2", "paidWorkflow"],
  ["paidoff", "paidPercent"],
  ["paid", "paidAmount"],
  ["photohrs", "photoHours"],
  ["videohrs", "videoHours"],
  ["grandtotal", "grandTotal"],
  ["bookingtotal", "bookingTotal"],
  ["taxable", "taxable"],
  ["totaltax", "totalTax"],
  ["cc", "ccFee"],
  ["fees", "processing"],
  ["processing", "processing"],
  ["miles", "miles"],
  ["mileage", "mileage"],
  ["viddel", "videoDelivered"],
  ["videodel", "videoDelivered"],
  ["photodel", "photoDelivered"],
]);

function normalizeHeader(value: unknown) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[#%]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

function normalizedStatus(value: unknown): JobStatus {
  const text = String(value ?? "").trim();
  return statusValues.includes(text as JobStatus) ? (text as JobStatus) : "Booked";
}

function normalizedDate(value: unknown, year: string) {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }
  if (typeof value === "number") {
    const epoch = Date.UTC(1899, 11, 30);
    const date = new Date(epoch + value * 24 * 60 * 60 * 1000);
    if (!Number.isNaN(date.getTime())) return date.toISOString().slice(0, 10);
  }
  const text = String(value ?? "").trim();
  const date = text ? new Date(text) : null;
  if (date && !Number.isNaN(date.getTime())) return date.toISOString().slice(0, 10);
  return `${year}-01-01`;
}

function normalizedOptionalDate(value: unknown) {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }
  if (typeof value === "number") {
    const epoch = Date.UTC(1899, 11, 30);
    const date = new Date(epoch + value * 24 * 60 * 60 * 1000);
    if (!Number.isNaN(date.getTime())) return date.toISOString().slice(0, 10);
  }
  const text = String(value ?? "").trim();
  if (!text || text === "0000-00-00") return undefined;
  const slashDate = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(text);
  if (slashDate) {
    const [, month, day, year] = slashDate;
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }
  const dashDate = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(text);
  if (dashDate) {
    const [, year, month, day] = dashDate;
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }
  const date = new Date(text);
  if (!Number.isNaN(date.getTime())) return date.toISOString().slice(0, 10);
  return undefined;
}

function normalizedRate(value: unknown, fallback: number) {
  const amount = safeNumber(value, fallback);
  if (amount > 1) return amount / 100;
  return amount;
}

function normalizePaymentMethod(value: unknown) {
  const text = String(value ?? "").trim();
  const normalized = text.toLowerCase();
  if (!normalized || normalized === "offline") return "Other";
  if (normalized === "card" || normalized === "cc") return "Credit Card";
  if (normalized === "paypal") return "PayPal";
  if (normalized === "ach") return "ACH";
  if (normalized === "venmo") return "Venmo";
  if (normalized === "zelle") return "Zelle";
  if (normalized === "cash") return "Cash";
  if (normalized === "check") return "Check";
  return text;
}

function parseCsv(text: string) {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    const next = text[index + 1];
    if (character === '"') {
      if (quoted && next === '"') {
        cell += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
      continue;
    }
    if (character === "," && !quoted) {
      row.push(cell);
      cell = "";
      continue;
    }
    if ((character === "\n" || character === "\r") && !quoted) {
      if (character === "\r" && next === "\n") index += 1;
      row.push(cell);
      if (row.some((value) => value.trim())) rows.push(row);
      row = [];
      cell = "";
      continue;
    }
    cell += character;
  }

  row.push(cell);
  if (row.some((value) => value.trim())) rows.push(row);
  return rows;
}

function paymentId(orderNumber: string, payment: Payment) {
  return [
    "csv-payment",
    orderNumber || "no-order",
    payment.date,
    payment.method.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    payment.amount.toFixed(2),
  ].join("-");
}

function expenseId(orderNumber: string, expense: Pick<Expense, "date" | "amount" | "category">) {
  return [
    "csv-expense",
    orderNumber || "no-order",
    expense.date,
    expense.category.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    expense.amount.toFixed(2),
  ].join("-");
}

function truthyCell(value: unknown) {
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value > 0;
  return ["true", "yes", "x", "done", "1"].includes(String(value ?? "").trim().toLowerCase());
}

function get(row: unknown[], headerMap: Map<string, number>, aliases: string[]) {
  for (const alias of aliases) {
    const normalized = normalizeHeader(alias);
    const mapped = headerAliases.get(normalized) ?? normalized;
    const index = headerMap.get(mapped) ?? headerMap.get(normalized);
    if (index !== undefined) return row[index];
  }
  return undefined;
}

function buildHeaderMap(headers: unknown[]) {
  const map = new Map<string, number>();
  headers.forEach((header, index) => {
    const normalized = normalizeHeader(header);
    if (!normalized) return;
    map.set(headerAliases.get(normalized) ?? normalized, index);
    map.set(normalized, index);
  });
  return map;
}

function readCellValue(cell: ExcelJS.Cell) {
  const value = cell.value;
  if (!value || value instanceof Date || typeof value !== "object") return value;
  if ("result" in value) return value.result;
  if ("text" in value) return value.text;
  if ("richText" in value && Array.isArray(value.richText)) {
    return value.richText.map((part) => part.text).join("");
  }
  if ("hyperlink" in value && "text" in value) return value.text;
  return "";
}

function readWorksheetRows(worksheet: ExcelJS.Worksheet) {
  const rows: unknown[][] = [];
  const maxColumns = Math.max(worksheet.columnCount, 35);
  worksheet.eachRow({ includeEmpty: false }, (row) => {
    const values: unknown[] = [];
    for (let column = 1; column <= maxColumns; column += 1) {
      values.push(readCellValue(row.getCell(column)));
    }
    rows.push(values);
  });
  return rows;
}

function rowHasJob(row: unknown[], headerMap: Map<string, number>) {
  const status = String(get(row, headerMap, ["Status"]) ?? "")
    .trim()
    .toLowerCase();
  if (status === "total" || status === "average") return false;
  return Boolean(
    get(row, headerMap, ["Order #"]) ||
      get(row, headerMap, ["First"]) ||
      get(row, headerMap, ["Last"]) ||
      get(row, headerMap, ["Products"]),
  );
}

function mapWorkflow(row: unknown[], headerMap: Map<string, number>): Workflow {
  return {
    ...newWorkflow(false),
    contract: truthyCell(get(row, headerMap, ["Contract"])),
    deposit: truthyCell(get(row, headerMap, ["Deposit"])),
    questionnaire: truthyCell(get(row, headerMap, ["Questionnaire"])),
    itinerary: truthyCell(get(row, headerMap, ["Itinerary"])),
    paid: truthyCell(get(row, headerMap, ["Paid2"])),
    shoot: truthyCell(get(row, headerMap, ["Shoot"])),
    teaser: truthyCell(get(row, headerMap, ["Teaser"])),
    photoDelivered: truthyCell(get(row, headerMap, ["Photo Del"])),
    videoDelivered: truthyCell(get(row, headerMap, ["Vid Del", "Video Del"])),
  };
}

async function importOrderCsv(file: File): Promise<ImportResult> {
  const rows = parseCsv(await file.text());
  if (!rows.length) return { jobs: [], expenses: [], skippedRows: 0, sheets: [file.name] };

  const headerMap = buildHeaderMap(rows[0]);
  const jobs: Job[] = [];
  const expenses: Expense[] = [];
  const paymentMethods = new Set<string>();
  let skippedRows = 0;

  rows.slice(1).forEach((row, index) => {
    const orderNumber = String(get(row, headerMap, ["Order ID", "Order #"]) ?? "").trim();
    const first = String(get(row, headerMap, ["First Name", "First"]) ?? "").trim();
    const last = String(get(row, headerMap, ["Last Name", "Last"]) ?? "").trim();
    if (!orderNumber && !first && !last) {
      skippedRows += 1;
      return;
    }

    const orderDate = normalizedOptionalDate(get(row, headerMap, ["Date"])) ?? normalizedDate(undefined, "2026");
    const createdAt = normalizedOptionalDate(
      get(row, headerMap, [
        "Submitted Date",
        "Date Submitted",
        "Submitted At",
        "Submitted",
        "Created Date",
        "Created At",
        "Created",
        "Order Created",
        "Booking Date",
      ]),
    );
    const paymentDate = normalizedOptionalDate(get(row, headerMap, ["PaymentDate", "Payment Date"]));
    const paymentAmount = safeNumber(get(row, headerMap, ["Payment Amount"]));
    const paymentMethod = normalizePaymentMethod(get(row, headerMap, ["Payment Type"]));
    const payment: Payment | undefined =
      paymentAmount > 0 && paymentDate
        ? {
            id: paymentId(orderNumber, {
              id: "",
              date: paymentDate,
              method: paymentMethod,
              reference: `Order #${orderNumber}`,
              amount: paymentAmount,
            }),
            date: paymentDate,
            method: paymentMethod,
            reference: `Order #${orderNumber}`,
            amount: paymentAmount,
          }
        : undefined;
    if (payment) paymentMethods.add(payment.method);

    const bookingTotal = safeNumber(get(row, headerMap, ["Sub Total", "Booking Total"]));
    const taxable = safeNumber(get(row, headerMap, ["Taxable Amount", "Taxable"]), bookingTotal);
    const tax = safeNumber(get(row, headerMap, ["Tax Amount", "Tax"]));
    const fees = safeNumber(get(row, headerMap, ["Fees"]));
    const discount = safeNumber(get(row, headerMap, ["Discount"]));
    const grandTotal = safeNumber(get(row, headerMap, ["Order Total", "Grand Total"]), taxable + tax);
    const expenseAmount = safeNumber(get(row, headerMap, ["Expenses"]));
    const jobId = `csv-order-${orderNumber || index}`;

    jobs.push({
      id: jobId,
      source: "imported",
      status: normalizedStatus(get(row, headerMap, ["Order Status", "Status"])),
      date: orderDate,
      ...(createdAt ? { createdAt } : {}),
      orderNumber,
      clientFirst: first,
      clientLast: last,
      clientEmail: String(get(row, headerMap, ["Email"]) ?? "").trim(),
      clientPhone: String(get(row, headerMap, ["Phone"]) ?? "").trim(),
      product: productFallback,
      photoRate: 0,
      photoHours: 0,
      videoRate: 0,
      videoHours: 0,
      extras: 0,
      discount,
      taxRate: normalizedRate(get(row, headerMap, ["Tax Percentage", "Tax %"]), defaultSettings.taxRate),
      ccRate: defaultSettings.ccRate,
      miles: 0,
      mileageRate: defaultSettings.mileageRate,
      processing: fees,
      hire: 0,
      paidAmount: 0,
      payments: payment ? [payment] : [],
      workflow: {
        ...newWorkflow(false),
        paid: paymentAmount > 0 && grandTotal > 0 ? paymentAmount >= grandTotal : false,
      },
      overrides: {
        bookingTotal,
        taxable,
        tax,
        grandTotal,
        balance: Math.max(0, grandTotal - paymentAmount),
      },
    });

    if (expenseAmount > 0) {
      const expenseDate = paymentDate ?? orderDate;
      expenses.push({
        id: expenseId(orderNumber, { date: expenseDate, amount: expenseAmount, category: "Processing" }),
        date: expenseDate,
        description: `${first} ${last}`.trim() || `Order #${orderNumber}`,
        amount: expenseAmount,
        category: "Processing",
        reference: `Order #${orderNumber}`,
        jobId,
      });
    }
  });

  return {
    jobs,
    expenses,
    expenseCategories: expenses.length ? ["Processing"] : [],
    paymentMethods: Array.from(paymentMethods),
    skippedRows,
    sheets: [file.name],
  };
}

export async function importWorkbook(file: File): Promise<ImportResult> {
  if (file.name.toLowerCase().endsWith(".csv") || file.type === "text/csv") {
    return importOrderCsv(file);
  }

  const buffer = await file.arrayBuffer();
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(buffer);
  const jobs: Job[] = [];
  let skippedRows = 0;
  const importedSheets: string[] = [];

  workbook.worksheets.filter((sheet) => /^\d{4}$/.test(sheet.name)).forEach((sheet) => {
    const sheetName = sheet.name;
    const rows = readWorksheetRows(sheet);
    const headerIndex = rows.findIndex((row) => {
      const headers = row.map(normalizeHeader);
      return headers.includes("status") && headers.includes("date") && headers.some((h) => h.includes("product"));
    });
    if (headerIndex < 0) return;

    importedSheets.push(sheetName);
    const headerMap = buildHeaderMap(rows[headerIndex]);
    rows.slice(headerIndex + 1).forEach((row, index) => {
      if (!rowHasJob(row, headerMap)) {
        skippedRows += 1;
        return;
      }

      const product = String(get(row, headerMap, ["Products"]) || productFallback).trim();
      const taxRate = Number(sheetName) === 2025 ? 0.0575 : defaultSettings.taxRate;
      const bookingTotal = safeNumber(get(row, headerMap, ["Booking Total"]));
      const discount = safeNumber(get(row, headerMap, ["Discounts"]));
      const taxable = safeNumber(get(row, headerMap, ["Taxable"]), Math.max(0, bookingTotal - discount));
      const tax = safeNumber(get(row, headerMap, ["Tax"]), taxable * taxRate);
      const ccFee = safeNumber(get(row, headerMap, ["CC"]));
      const grandTotal = safeNumber(get(row, headerMap, ["Grand Total"]), taxable + tax + ccFee);
      const mileage = safeNumber(get(row, headerMap, ["Mileage"]));
      const paidAmount = safeNumber(get(row, headerMap, ["Paid"]));
      const balance = safeNumber(get(row, headerMap, ["Balance"]), Math.max(0, grandTotal - paidAmount));

      jobs.push({
        id: `xlsm-${sheetName}-${index}-${String(get(row, headerMap, ["Order #"]) || index)}`,
        source: "imported",
        status: normalizedStatus(get(row, headerMap, ["Status"])),
        date: normalizedDate(get(row, headerMap, ["Date"]), sheetName),
        orderNumber: String(get(row, headerMap, ["Order #"]) || ""),
        clientFirst: String(get(row, headerMap, ["First"]) || "").trim(),
        clientLast: String(get(row, headerMap, ["Last"]) || "").trim(),
        product,
        photoRate: safeNumber(get(row, headerMap, ["PhotoRate"])),
        photoHours: safeNumber(get(row, headerMap, ["Photo Hrs"])),
        videoRate: safeNumber(get(row, headerMap, ["VideoRate"])),
        videoHours: safeNumber(get(row, headerMap, ["Video Hrs"])),
        extras: safeNumber(get(row, headerMap, ["Extras"])),
        discount,
        taxRate,
        ccRate: defaultSettings.ccRate,
        miles: safeNumber(get(row, headerMap, ["Miles"])),
        mileageRate: defaultSettings.mileageRate,
        processing: safeNumber(get(row, headerMap, ["Processing", "Fees"])),
        hire: safeNumber(get(row, headerMap, ["Hire"])),
        paidAmount,
        workflow: mapWorkflow(row, headerMap),
        overrides: {
          bookingTotal,
          taxable,
          tax,
          ccFee,
          grandTotal,
          mileage,
          balance,
        },
      });
    });
  });

  return { jobs, skippedRows, sheets: importedSheets };
}
