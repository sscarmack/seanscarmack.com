import type { AdditionalService, BookingNamingSettings, ChecklistItem, Expense, Job, JobMath, Payment, Settings, TaxRow, WorkflowKey } from "../types";

export const defaultAdminStatusColors: NonNullable<Settings["adminStatusColors"]> = {
  Booked: {
    backgroundColor: "#d9ead3",
    textColor: "#0f3b17",
    borderColor: "#b6d7a8",
  },
  Open: {
    backgroundColor: "#92d050",
    textColor: "#0f3b17",
    borderColor: "#6aa84f",
  },
  Deposit: {
    backgroundColor: "#00b0f0",
    textColor: "#ffffff",
    borderColor: "#008dc4",
  },
  Paid: {
    backgroundColor: "#00843d",
    textColor: "#ffffff",
    borderColor: "#006b31",
  },
  "In Progress": {
    backgroundColor: "#4472c4",
    textColor: "#ffffff",
    borderColor: "#2f5597",
  },
  Postponed: {
    backgroundColor: "#a6a6a6",
    textColor: "#ffffff",
    borderColor: "#808080",
  },
  Closed: {
    backgroundColor: "#ed7d31",
    textColor: "#111827",
    borderColor: "#c65911",
  },
  Archived: {
    backgroundColor: "#ed7d31",
    textColor: "#111827",
    borderColor: "#c65911",
  },
  Canceled: {
    backgroundColor: "#ff0000",
    textColor: "#ffffff",
    borderColor: "#c00000",
  },
};

export const defaultBookingNaming: BookingNamingSettings = {
  pattern: "B-{{seq}}",
  nextNumber: 1001,
  padding: 4,
};

export const defaultSettings: Settings = {
  taxRate: 0.06,
  incomeTaxRate: 0,
  discountTaxTiming: "before-tax",
  salesTaxExpenseTiming: "before-expenses",
  salesUseTaxPeriod: "monthly",
  incomeTaxExpenseTiming: "after-expenses",
  ccRate: 0.04,
  mileageRate: 1.5,
  depositRate: 0.2,
  paymentOptions: [],
  paymentGateway: {
    paypalEnabled: false,
    paypalMode: "sandbox",
    paypalClientId: "",
    paypalClientSecret: "",
    paypalSandboxClientId: "",
    paypalSandboxClientSecret: "",
    paypalLiveClientId: "",
    paypalLiveClientSecret: "",
    stripeEnabled: false,
    stripeSecretKey: "",
    inPersonCashEnabled: false,
  },
  email: {
    provider: "smtp",
    smtpHost: "",
    smtpPort: 587,
    smtpSecure: false,
    smtpUser: "",
    smtpPassword: "",
    microsoftTenantId: "",
    microsoftClientId: "",
    microsoftClientSecret: "",
    microsoftSenderMailbox: "",
    fromEmail: "",
    fromName: "",
    replyToEmail: "",
    defaultInvoiceSubject: "Invoice from {{businessName}}",
    defaultContractSubject: "Contract from {{businessName}}",
    defaultPaymentSubject: "Payment information from {{businessName}}",
    headerHtml: "",
    footerHtml: "",
  },
  emailRules: [
    {
      id: "email-rule-account-created",
      name: "Account Created",
      active: true,
      saved: true,
      templateId: "email-new-account",
      trigger: "account-created",
      offsetAmount: 0,
      offsetUnit: "days",
      timeOfDay: "09:00",
      serviceScope: "all",
      serviceNames: [],
      balanceOnly: false,
      minimumBalance: 0,
      sendOnce: true,
      repeatUntilComplete: false,
      incompleteTask: "contract-unsigned",
      reminderEveryAmount: 3,
      reminderEveryUnit: "days",
      maxReminders: 0,
    },
    {
      id: "email-rule-booking-confirmation",
      name: "Booking Confirmation",
      active: true,
      saved: true,
      templateId: "email-booking-confirmation",
      trigger: "booking-submitted",
      offsetAmount: 0,
      offsetUnit: "days",
      timeOfDay: "09:00",
      serviceScope: "all",
      serviceNames: [],
      balanceOnly: false,
      minimumBalance: 0,
      sendOnce: true,
      repeatUntilComplete: false,
      incompleteTask: "contract-unsigned",
      reminderEveryAmount: 3,
      reminderEveryUnit: "days",
      maxReminders: 0,
    },
    {
      id: "email-rule-payment-confirmation",
      name: "Payment Confirmation",
      active: true,
      saved: true,
      templateId: "email-scheduled-payment-paid",
      trigger: "payment-received",
      offsetAmount: 0,
      offsetUnit: "days",
      timeOfDay: "09:00",
      serviceScope: "all",
      serviceNames: [],
      balanceOnly: false,
      minimumBalance: 0,
      sendOnce: false,
      repeatUntilComplete: false,
      incompleteTask: "balance-due",
      reminderEveryAmount: 3,
      reminderEveryUnit: "days",
      maxReminders: 0,
    },
  ],
  serviceColors: {},
  serviceThumbnails: {},
  serviceThumbnailCrops: {},
  serviceGroupThumbnails: {},
  serviceGroupThumbnailCrops: {},
  serviceGroups: [],
  serviceBooking: {},
  serviceStatsTimeframe: "this-year",
  coupons: [],
  calendarDefaults: {
    blockedWeekdays: [],
    autoBlockHolidays: false,
    holidayBookingMode: "allow",
    holidaySurchargeType: "flat",
    holidaySurchargeAmount: 0,
    lunchBreakEnabled: false,
    lunchStartTime: "12:00",
    lunchEndTime: "13:00",
    bufferMinutes: 0,
    availableDays: [3, 4, 5, 6],
    availabilityWindows: {
      3: { startTime: "16:00", endTime: "18:30", blockMinutes: 30 },
      4: { startTime: "16:00", endTime: "18:30", blockMinutes: 30 },
      5: { startTime: "16:00", endTime: "18:30", blockMinutes: 30 },
      6: { startTime: "09:30", endTime: "18:30", blockMinutes: 30 },
    },
  },
  applyWebsiteThemeToAdmin: true,
  adminMenuBackgroundColor: "",
  adminMenuTextColor: "",
  adminMenuActiveBackgroundColor: "",
  adminMenuActiveTextColor: "",
  adminContentBackgroundColor: "",
  adminPanelBackgroundColor: "",
  adminTextColor: "",
  adminMutedTextColor: "",
  adminBorderColor: "",
  adminLeftMenuBackgroundColor: "",
  adminLeftMenuTextColor: "",
  adminLeftMenuActiveBackgroundColor: "",
  adminLeftMenuActiveTextColor: "",
  adminRowOddColor: "",
  adminRowEvenColor: "",
  adminHomeTileBackgroundColor: "",
  adminHomeTileTextColor: "",
  adminHomeTileMutedTextColor: "",
  adminHomeTileBorderColor: "",
  adminStatusBadgeBackgroundColor: "",
  adminStatusBadgeTextColor: "",
  adminStatusBadgeBorderColor: "",
  adminStatusColors: defaultAdminStatusColors,
  adminAmountPillBackgroundColor: "",
  adminAmountPillTextColor: "",
  adminAmountPillBorderColor: "",
  alerts: {
    newBookings: {
      enabled: true,
      pastDays: 7,
    },
    contracts: {
      enabled: true,
      dueMode: "past-due",
      days: 1,
    },
    invoices: {
      enabled: true,
      pastDueDays: 1,
    },
    teamAssignments: {
      enabled: true,
      upcomingDays: 30,
    },
    upcomingJobs: {
      enabled: false,
      upcomingDays: 7,
    },
    balanceDue: {
      enabled: false,
      pastDueDays: 14,
      minimumAmount: 25,
    },
    deposits: {
      enabled: false,
      upcomingDays: 14,
    },
    checklist: {
      enabled: false,
      upcomingDays: 7,
    },
    missingContactInfo: {
      enabled: false,
      upcomingDays: 30,
    },
    missingEmail: {
      enabled: false,
      upcomingDays: 30,
    },
    missingPhone: {
      enabled: false,
      upcomingDays: 30,
    },
    missingOrderNumber: {
      enabled: false,
      pastDays: 30,
    },
    missingMileage: {
      enabled: false,
      upcomingDays: 30,
    },
    missingBookingTime: {
      enabled: false,
      upcomingDays: 30,
    },
    missingBookingLocation: {
      enabled: false,
      upcomingDays: 30,
    },
    zeroTotal: {
      enabled: false,
      upcomingDays: 60,
    },
    noPayments: {
      enabled: false,
      pastDays: 14,
      minimumAmount: 25,
    },
    paymentBeforeEvent: {
      enabled: false,
      upcomingDays: 14,
      minimumAmount: 25,
    },
    unsignedContracts: {
      enabled: false,
      pastDays: 7,
    },
    questionnaireDue: {
      enabled: false,
      upcomingDays: 14,
    },
    itineraryDue: {
      enabled: false,
      upcomingDays: 7,
    },
    shootIncomplete: {
      enabled: false,
      pastDays: 3,
    },
    deliveryOpen: {
      enabled: false,
      pastDays: 30,
    },
    uncategorizedExpenses: {
      enabled: false,
      pastDays: 30,
    },
    unlinkedExpenses: {
      enabled: false,
      pastDays: 30,
    },
    hiddenAlertIds: [
      "upcomingJobs",
      "missingContactInfo",
      "missingEmail",
      "missingPhone",
      "missingOrderNumber",
      "missingMileage",
      "missingBookingTime",
      "missingBookingLocation",
      "zeroTotal",
      "noPayments",
      "paymentBeforeEvent",
      "unsignedContracts",
      "questionnaireDue",
      "itineraryDue",
      "shootIncomplete",
      "deliveryOpen",
      "uncategorizedExpenses",
      "unlinkedExpenses",
    ],
    snoozedAlertIds: {},
  },
  bookingNaming: defaultBookingNaming,
};

export const workflowLabels: Record<WorkflowKey, string> = {
  contract: "Contract",
  deposit: "Deposit",
  questionnaire: "Questionnaire",
  itinerary: "Itinerary",
  paid: "Paid",
  shoot: "Shoot",
  teaser: "Teaser",
  photoDelivered: "Photo",
  videoDelivered: "Video",
};

export const defaultChecklistItems: ChecklistItem[] = [
  {
    id: "contract",
    label: "Contract",
    services: ["Wedding Photo + Video", "Wedding Photo", "Wedding Video"],
    dueRule: { offsetDays: 30, direction: "after", basis: "booking", alertDays: 7 },
  },
  {
    id: "deposit",
    label: "Deposit",
    services: ["Wedding Photo + Video", "Wedding Photo", "Wedding Video"],
    dueRule: { offsetDays: 0, direction: "after", basis: "booking", alertDays: 7 },
  },
  {
    id: "questionnaire",
    label: "Questionnaire",
    services: ["Wedding Photo + Video", "Wedding Photo", "Wedding Video"],
    dueRule: { offsetDays: 14, direction: "before", alertDays: 7 },
  },
  {
    id: "itinerary",
    label: "Itinerary",
    services: ["Wedding Photo + Video", "Wedding Photo", "Wedding Video"],
    dueRule: { offsetDays: 7, direction: "before", alertDays: 7 },
  },
  {
    id: "paid",
    label: "Paid",
    services: [
      "Wedding Photo + Video",
      "Wedding Photo",
      "Wedding Video",
      "Engagement",
      "PhotoBooth",
      "Services",
      "Real Estate",
      "Senior Photos",
      "Family Portrait",
      "Gear",
    ],
    dueRule: { offsetDays: 0, direction: "after", alertDays: 0 },
  },
  {
    id: "shoot",
    label: "Shoot",
    services: [
      "Wedding Photo + Video",
      "Wedding Photo",
      "Wedding Video",
      "Engagement",
      "PhotoBooth",
      "Services",
      "Real Estate",
      "Senior Photos",
      "Family Portrait",
      "Gear",
    ],
    dueRule: { offsetDays: 0, direction: "after", alertDays: 0 },
  },
  {
    id: "teaser",
    label: "Teaser",
    services: [
      "Wedding Photo + Video",
      "Wedding Photo",
      "Wedding Video",
      "Engagement",
      "PhotoBooth",
      "Services",
      "Real Estate",
      "Senior Photos",
      "Family Portrait",
      "Gear",
    ],
    dueRule: { offsetDays: 2, direction: "after", alertDays: 0 },
  },
  {
    id: "photoDelivered",
    label: "Photo",
    services: ["Wedding Photo + Video", "Wedding Photo", "Engagement", "Senior Photos", "Family Portrait", "Real Estate"],
    dueRule: { offsetDays: 42, direction: "after", alertDays: 0 },
  },
  {
    id: "videoDelivered",
    label: "Video",
    services: ["Wedding Photo + Video", "Wedding Video"],
    dueRule: { offsetDays: 42, direction: "after", alertDays: 0 },
  },
];

const moneyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const moneyPreciseFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function currency(value: number, precise = false) {
  return (precise ? moneyPreciseFormat : moneyFormat).format(Number.isFinite(value) ? value : 0);
}

export function percent(value: number) {
  return `${Math.round((Number.isFinite(value) ? value : 0) * 100)}%`;
}

export function safeNumber(value: unknown, fallback = 0) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const parsed = Number(value.replace(/[$,%\s,]/g, ""));
    if (Number.isFinite(parsed)) return parsed;
  }
  return fallback;
}

export function normalizeBookingNaming(settings?: Partial<BookingNamingSettings>): BookingNamingSettings {
  const nextNumber = Math.max(1, Math.floor(safeNumber(settings?.nextNumber, defaultBookingNaming.nextNumber)));
  const padding = Math.min(12, Math.max(1, Math.floor(safeNumber(settings?.padding, defaultBookingNaming.padding))));
  const pattern = settings && "pattern" in settings ? String(settings.pattern ?? "").trim() : defaultBookingNaming.pattern;
  return { pattern, nextNumber, padding };
}

export function bookingNumberSequence(orderNumber: string) {
  const match = String(orderNumber || "").match(/(\d+)(?!.*\d)/);
  return match ? safeNumber(match[1]) : 0;
}

export function formatBookingName(settings: BookingNamingSettings | undefined, job: Pick<Job, "date" | "product">, sequence?: number) {
  const naming = normalizeBookingNaming(settings);
  const date = job.date ? new Date(`${job.date}T00:00:00`) : new Date();
  const year = Number.isFinite(date.getTime()) ? String(date.getFullYear()) : new Date().getFullYear().toString();
  const month = Number.isFinite(date.getTime()) ? String(date.getMonth() + 1).padStart(2, "0") : String(new Date().getMonth() + 1).padStart(2, "0");
  const day = Number.isFinite(date.getTime()) ? String(date.getDate()).padStart(2, "0") : String(new Date().getDate()).padStart(2, "0");
  const seq = String(sequence ?? naming.nextNumber).padStart(naming.padding, "0");
  const service = String(job.product || "Booking")
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .toUpperCase();

  return naming.pattern
    .replace(/\{\{seq\}\}/gi, seq)
    .replace(/\{\{year\}\}/gi, year)
    .replace(/\{\{month\}\}/gi, month)
    .replace(/\{\{day\}\}/gi, day)
    .replace(/\{\{service\}\}/gi, service)
    .trim();
}

export function additionalServiceAmount(service: AdditionalService) {
  const selectedVariant = service.selectedVariantId
    ? service.variants?.find((variant) => variant.id === service.selectedVariantId)
    : undefined;
  return safeNumber(selectedVariant?.amount ?? service.amount);
}

export function calculateJob(job: Job, settings = defaultSettings): JobMath {
  const taxRate = Number.isFinite(job.taxRate) ? job.taxRate : settings.taxRate;
  const ccRate = Number.isFinite(job.ccRate) ? job.ccRate : settings.ccRate;
  const mileageRate = Number.isFinite(job.mileageRate) ? job.mileageRate : settings.mileageRate;
  const discountTaxTiming = settings.discountTaxTiming ?? defaultSettings.discountTaxTiming;
  const additionalServicesTotal = (job.additionalServices ?? []).reduce(
    (sum, service) => sum + additionalServiceAmount(service),
    0,
  );
  const bookingTotal =
    job.overrides?.bookingTotal ??
    job.photoRate * job.photoHours + job.videoRate * job.videoHours + job.extras + additionalServicesTotal;
  const mileage = job.overrides?.mileage ?? job.miles * mileageRate;
  const teamPay = (job.teamAssignments ?? []).reduce(
    (sum, assignment) => sum + (assignment.payType === "hourly" ? assignment.hours * assignment.rate : assignment.rate),
    0,
  );
  const labor = Math.max(job.hire, teamPay);
  const expenses = job.processing + labor + mileage;
  const discountedTotal =
    discountTaxTiming === "before-tax" ? Math.max(0, bookingTotal - job.discount) : Math.max(0, bookingTotal);
  const taxable = job.overrides?.taxable ?? discountedTotal;
  const tax = job.overrides?.tax ?? taxable * taxRate;
  const ccFee = job.overrides?.ccFee ?? discountedTotal * ccRate;
  const afterTaxDiscount = discountTaxTiming === "after-tax" ? job.discount : 0;
  const grandTotal = job.overrides?.grandTotal ?? Math.max(0, discountedTotal + tax + ccFee - afterTaxDiscount);
  const paid =
    job.paidAmount +
    (job.payments ?? [])
      .filter((payment) => payment.status !== "scheduled")
      .reduce((sum, payment) => sum + payment.amount, 0);
  const balance = Math.max(0, job.overrides?.balance ?? grandTotal - paid);
  const paidPercent = grandTotal > 0 ? Math.min(1, paid / grandTotal) : 0;
  const deposit = grandTotal * settings.depositRate;
  const projectedNet = grandTotal - expenses - tax;
  const collectedNet = paid - expenses - tax;
  const workflowValues = Object.values(job.workflow);
  const workflowProgress =
    job.overrides?.progress ??
    (workflowValues.length ? workflowValues.filter(Boolean).length / workflowValues.length : 0);

  return {
    bookingTotal,
    taxable,
    tax,
    ccFee,
    totalTax: tax + ccFee,
    grandTotal,
    deposit,
    paid,
    balance,
    paidPercent,
    mileage,
    labor,
    expenses,
    projectedNet,
    collectedNet,
    workflowProgress,
  };
}

function storedDateKey(value: string | undefined) {
  const candidate = String(value || "").slice(0, 10);
  return /^\d{4}-\d{2}-\d{2}$/.test(candidate) ? candidate : "";
}

function collectedPaymentEntries(job: Job): Array<Pick<Payment, "id" | "date" | "method" | "amount"> & { id: string }> {
  const paymentEntries = (job.payments ?? [])
    .filter((payment) => payment.status !== "scheduled")
    .map((payment) => ({
      id: payment.id,
      date: storedDateKey(payment.date) || job.date,
      method: payment.method?.trim() || "Unspecified",
      amount: safeNumber(payment.amount),
    }))
    .filter((payment) => payment.amount > 0);

  if (job.paidAmount <= 0) return paymentEntries;

  return [
    ...paymentEntries,
    {
      id: "recorded-paid-total",
      date: job.date,
      method: "Recorded payment",
      amount: safeNumber(job.paidAmount),
    },
  ];
}

function numericOrderKey(value: string) {
  const text = String(value || "").trim();
  return text.replace(/\D/g, "") || text.toLowerCase();
}

function extractExpenseOrderNumbers(text: string) {
  const normalized = ` ${String(text || "").replace(/[â€“â€”]/g, "-")} `;
  const orderNumbers = new Set<string>();
  [
    /\border\s*#?\s*(\d{2,6})(?=\D|$)/gi,
    /#\s*(\d{2,6})(?=\D|$)/g,
    /(?:^|\s)-\s*(\d{3,6})(?=\s|$|[),.;:])/g,
  ].forEach((pattern) => {
    for (const match of normalized.matchAll(pattern)) {
      if (match[1]) orderNumbers.add(match[1]);
    }
  });
  return [...orderNumbers];
}

function teamAssignmentPay(assignment: { payType: "flat" | "hourly"; hours: number; rate: number }) {
  return assignment.payType === "hourly" ? assignment.hours * assignment.rate : assignment.rate;
}

function calculatedExpenseValue(job: Job, key: string, fallback: number) {
  const value = job.calculatedExpenseOverrides?.[key];
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function formatMilesLabel(miles: number) {
  if (!Number.isFinite(miles) || miles <= 0) return "";
  const rounded = Math.round(miles * 100) / 100;
  return `${rounded.toLocaleString("en-US", { maximumFractionDigits: 2 })} ${rounded === 1 ? "mile" : "miles"} total`;
}

function formatMileageExpenseDetail(expense: Expense, amount: number, settings: Settings) {
  const source = expense.description || expense.reference || "";
  const match = source.match(/^\s*Miles\s*-\s*([0-9]+(?:\.[0-9]+)?)\s+(.+)$/i);
  const rate = settings.mileageRate > 0 ? settings.mileageRate : defaultSettings.mileageRate;
  const miles = match ? safeNumber(match[1]) : rate > 0 ? amount / rate : 0;
  const address = match?.[2]?.trim();
  const milesLabel = formatMilesLabel(miles);
  if (address && milesLabel) return `${address} (${milesLabel})`;
  if (address) return address;
  if (milesLabel) return `${source || "Mileage"} (${milesLabel})`;
  return source;
}

function formatCalculatedMileageDetail(amount: number, settings: Settings) {
  const rate = settings.mileageRate > 0 ? settings.mileageRate : defaultSettings.mileageRate;
  const milesLabel = formatMilesLabel(rate > 0 ? amount / rate : 0);
  return milesLabel ? `Mileage (${milesLabel})` : "Mileage";
}

function isMileageExpense(expense: Expense) {
  return expense.category.trim().toLowerCase() === "mileage";
}

export function buildTaxRows(jobs: Job[], expensesOrSettings: Expense[] | Settings = [], maybeSettings = defaultSettings): TaxRow[] {
  const expenses = Array.isArray(expensesOrSettings) ? expensesOrSettings : [];
  const settings = Array.isArray(expensesOrSettings) ? maybeSettings : expensesOrSettings;
  const jobById = new Map(jobs.map((job) => [job.id, job]));
  const jobByOrder = new Map(jobs.map((job) => [numericOrderKey(job.orderNumber), job]));
  const teamAssignmentSourceById = new Map<string, { job: Job; assignment: NonNullable<Job["teamAssignments"]>[number] }>();
  jobs.forEach((job) => {
    (job.teamAssignments ?? []).forEach((assignment) => {
      teamAssignmentSourceById.set(assignment.id, { job, assignment });
    });
  });
  const jobPaymentDates = new Map<string, Set<string>>();
  jobs.forEach((job) => {
    const dates = new Set(collectedPaymentEntries(job).map((payment) => payment.date));
    if (dates.size) jobPaymentDates.set(job.id, dates);
  });
  const sameDayExpensesByJobDate = expenses.reduce((map, expense) => {
    if (!expense.jobId) return map;
    if (isMileageExpense(expense)) return map;
    const expenseDate = storedDateKey(expense.date);
    if (!expenseDate || !jobPaymentDates.get(expense.jobId)?.has(expenseDate)) return map;
    const key = `${expense.jobId}|${expenseDate}`;
    map.set(key, [...(map.get(key) ?? []), expense]);
    return map;
  }, new Map<string, Expense[]>());
  const paidTeamExpenseByAssignment = expenses.reduce((map, expense) => {
    if (expense.teamAssignmentPayments) {
      Object.entries(expense.teamAssignmentPayments).forEach(([assignmentId, amount]) => {
        map.set(assignmentId, (map.get(assignmentId) ?? 0) + safeNumber(amount));
      });
      return map;
    }
    if (!expense.teamAssignmentId) return map;
    map.set(expense.teamAssignmentId, (map.get(expense.teamAssignmentId) ?? 0) + safeNumber(expense.amount));
    return map;
  }, new Map<string, number>());
  const jobRows: TaxRow[] = jobs
    .flatMap((job) => {
      const math = calculateJob(job, settings);
      const fees = job.processing;
      const discount = Math.max(0, job.discount || 0);
      const outAmount = 0;
      const teamPay = (job.teamAssignments ?? []).reduce((sum, assignment) => sum + teamAssignmentPay(assignment), 0);
      const paidTeamPay = (job.teamAssignments ?? []).reduce(
        (sum, assignment) => sum + Math.min(teamAssignmentPay(assignment), paidTeamExpenseByAssignment.get(assignment.id) ?? 0),
        0,
      );
      const unpaidTeamLabor = Math.max(0, teamPay - paidTeamPay);
      const rowLabor = Math.max(job.hire, unpaidTeamLabor);
      const mileage = calculatedExpenseValue(job, "mileage", math.mileage);
      const payments = collectedPaymentEntries(job);
      const baseExpense = outAmount + fees + rowLabor;
      const totalExpense = baseExpense + discount;
      const collectedTotal = payments.reduce((sum, payment) => sum + payment.amount, 0);
      const mileageRow: TaxRow[] = mileage > 0
        ? [
            {
              id: `${job.id}-calculated-mileage`,
              jobId: job.id,
              kind: "job" as const,
              orderNumber: job.orderNumber,
              date: job.date,
              client: `${job.clientFirst} ${job.clientLast}`.trim() || `Order ${job.orderNumber}`,
              product: job.product,
              inAmount: 0,
              outAmount: mileage,
              fees: 0,
              hire: 0,
              mileage,
              totalExpense: mileage,
              subtotal: 0,
              taxAmount: 0,
              netTotal: -mileage,
              breakdownLines: [
                {
                  id: `calculated-mileage-${job.id}`,
                  type: "calculated" as const,
                  label: "Mileage",
                  date: job.date,
                  amount: mileage,
                  detail: formatCalculatedMileageDetail(mileage, settings),
                },
                {
                  id: `profit-mileage-${job.id}`,
                  type: "profit" as const,
                  label: "Profit",
                  date: job.date,
                  amount: -mileage,
                },
              ],
            },
          ]
        : [];
      if (collectedTotal <= 0) return mileageRow;

      return [
        ...payments.map((payment, paymentIndex) => {
          const share = payment.amount / collectedTotal;
          const inAmount = payment.amount;
          const paymentDateKey = `${job.id}|${payment.date}`;
          const sameDayExpenseCandidates = sameDayExpensesByJobDate.get(paymentDateKey) ?? [];
          const paymentReference = String(job.payments?.find((entry) => entry.id === payment.id)?.reference || "").trim().toLowerCase();
          const matchesPayment = (expense: Expense) => {
            const expenseReference = String(expense.reference || "").trim().toLowerCase();
            return Boolean(paymentReference && expenseReference && expenseReference.includes(paymentReference));
          };
          const sameDayExpenses = sameDayExpenseCandidates.filter(matchesPayment);
          const matchedToAnyPayment = sameDayExpenseCandidates.filter((expense) =>
            payments.some((candidate) => {
              const reference = String(job.payments?.find((entry) => entry.id === candidate.id)?.reference || "").trim().toLowerCase();
              const expenseReference = String(expense.reference || "").trim().toLowerCase();
              return Boolean(reference && expenseReference && expenseReference.includes(reference));
            }),
          );
          const unmatchedExpenses = sameDayExpenseCandidates.filter((expense) => !matchedToAnyPayment.includes(expense));
          const assignedExpenses = paymentIndex === 0 ? [...sameDayExpenses, ...unmatchedExpenses] : sameDayExpenses;
          const sameDayExpenseAmount = assignedExpenses.reduce((sum, expense) => sum + safeNumber(expense.amount), 0);
          const sameDayExpense = sameDayExpenseAmount;
          const rowBaseExpense = baseExpense * share;
          const rowDiscount = discount * share;
          const rowTotalExpense = totalExpense * share + sameDayExpense;
          const rowTaxExpense = rowBaseExpense + sameDayExpense;
          const subtotal = settings.salesTaxExpenseTiming === "after-expenses" ? inAmount - rowTaxExpense : inAmount;
          const taxAmount = Math.max(0, subtotal * (Number.isFinite(job.taxRate) ? job.taxRate : settings.taxRate));
          const netTotal = subtotal - taxAmount - rowDiscount;

          return {
            id: `${job.id}-${payment.id}`,
            jobId: job.id,
            kind: "job" as const,
            orderNumber: job.orderNumber,
            date: payment.date,
            client: `${job.clientFirst} ${job.clientLast}`.trim() || `Order ${job.orderNumber}`,
            product: job.product,
            inAmount,
            outAmount: sameDayExpense,
            fees: fees * share,
            hire: rowLabor * share,
            mileage: 0,
            totalExpense: rowTotalExpense,
            subtotal,
            taxAmount,
            netTotal,
            breakdownLines: [
              {
                id: `payment-${payment.id}`,
                type: "payment" as const,
                label: "Payment",
                date: payment.date,
                amount: inAmount,
                detail: payment.method,
              },
              ...assignedExpenses.map((expense) => ({
                id: `expense-${expense.id}`,
                type: "expense" as const,
                label: expense.category || "Expense",
                date: storedDateKey(expense.date) || payment.date,
                amount: safeNumber(expense.amount),
                reference: expense.reference,
                detail: isMileageExpense(expense)
                  ? formatMileageExpenseDetail(expense, safeNumber(expense.amount), settings)
                  : expense.description,
              })),
              ...(fees * share ? [{
                id: `calculated-fees-${job.id}-${payment.id}`,
                type: "calculated" as const,
                label: "Processing fees",
                date: payment.date,
                amount: fees * share,
              }] : []),
              ...(rowLabor * share ? [{
                id: `calculated-labor-${job.id}-${payment.id}`,
                type: "calculated" as const,
                label: "Team pay / hire",
                date: payment.date,
                amount: rowLabor * share,
              }] : []),
              ...(rowDiscount ? [{
                id: `calculated-discount-${job.id}-${payment.id}`,
                type: "calculated" as const,
                label: "Discount",
                date: payment.date,
                amount: rowDiscount,
              }] : []),
              ...(taxAmount ? [{
                id: `tax-${job.id}-${payment.id}`,
                type: "tax" as const,
                label: "Sales tax",
                date: payment.date,
                amount: taxAmount,
              }] : []),
              {
                id: `profit-${job.id}-${payment.id}`,
                type: "profit" as const,
                label: "Profit",
                date: payment.date,
                amount: netTotal,
              },
            ],
          };
        }),
        ...mileageRow,
      ];
    });

  const expenseRows: TaxRow[] = expenses.flatMap((expense) => {
    const job = expense.jobId ? jobById.get(expense.jobId) : undefined;
    const expenseDate = storedDateKey(expense.date);
    if (job && !isMileageExpense(expense) && expenseDate && jobPaymentDates.get(job.id)?.has(expenseDate)) return [];
    const orderMatches = extractExpenseOrderNumbers(`${expense.description || ""} ${expense.reference || ""}`);
    if (!job && !expense.teamAssignmentPayments && orderMatches.some((orderNumber) => jobByOrder.has(numericOrderKey(orderNumber)))) return [];
    const rowDate = job && isMileageExpense(expense) ? job.date : storedDateKey(expense.date) || job?.date || "0000-01-01";
    const amount = safeNumber(expense.amount);
    const teamPaymentEntries = expense.teamAssignmentPayments
      ? Object.entries(expense.teamAssignmentPayments)
          .map(([assignmentId, paidAmount]) => {
            const source = teamAssignmentSourceById.get(assignmentId);
            if (!source) return null;
            const assignmentRole = source.assignment.role?.trim() || "Assigned";
            const client = `${source.job.clientFirst} ${source.job.clientLast}`.trim() || `Order ${source.job.orderNumber}`;
            return {
              id: assignmentId,
              job: source.job,
              assignmentRole,
              client,
              amount: safeNumber(paidAmount),
            };
          })
          .filter(Boolean) as Array<{ id: string; job: Job; assignmentRole: string; client: string; amount: number }>
      : [];
    const singleTeamPaymentSource = !teamPaymentEntries.length && expense.teamAssignmentId
      ? teamAssignmentSourceById.get(expense.teamAssignmentId)
      : undefined;
    const teamPaymentTotal = Math.round(teamPaymentEntries.reduce((sum, entry) => sum + entry.amount, 0) * 100) / 100;
    const teamPaymentRemainder = expense.teamAssignmentPayments
      ? Math.round(Math.max(0, safeNumber(expense.teamAssignmentRemainder) || amount - teamPaymentTotal) * 100) / 100
      : 0;
    const breakdownLines = teamPaymentEntries.length
      ? [
          ...teamPaymentEntries.map((entry) => ({
            id: `expense-${expense.id}-${entry.id}`,
            type: "expense" as const,
            sourceExpenseId: expense.id,
            sourceTeamAssignmentId: entry.id,
            label: entry.job.orderNumber ? `Order ${entry.job.orderNumber}` : "Team payout",
            date: entry.job.date || rowDate,
            amount: entry.amount,
            reference: expense.reference,
            detail: `${entry.client} - ${entry.assignmentRole}`,
          })),
          ...(teamPaymentRemainder > 0.005
            ? [{
                id: `expense-${expense.id}-remainder`,
                type: "expense" as const,
                sourceExpenseId: expense.id,
                sourceTeamAssignmentId: "__remainder__",
                label: "Additional expense",
                date: rowDate,
                amount: teamPaymentRemainder,
                reference: expense.reference,
                detail: expense.description || "Unallocated team payout amount",
              }]
            : []),
        ]
      : [
          {
            id: `expense-${expense.id}`,
            type: "expense" as const,
            sourceExpenseId: expense.id,
            label: expense.category || "Expense",
            date: singleTeamPaymentSource?.job.date || rowDate,
            amount,
            reference: expense.reference,
            detail: singleTeamPaymentSource
              ? `${`${singleTeamPaymentSource.job.clientFirst} ${singleTeamPaymentSource.job.clientLast}`.trim() || `Order ${singleTeamPaymentSource.job.orderNumber}`} - ${singleTeamPaymentSource.assignment.role?.trim() || "Assigned"}`
              : isMileageExpense(expense)
                ? formatMileageExpenseDetail(expense, amount, settings)
                : expense.description,
          },
        ];

    return [
      {
        id: `expense-${expense.id}`,
        jobId: job?.id,
        kind: "expense",
        orderNumber: job?.orderNumber || "-",
        date: rowDate,
        client: job ? `${job.clientFirst} ${job.clientLast}`.trim() || `Order ${job.orderNumber}` : expense.description || "Business Expense",
        product: job?.product || "General",
        inAmount: 0,
        outAmount: amount,
        fees: 0,
        hire: 0,
        mileage: job && isMileageExpense(expense) ? amount : 0,
        totalExpense: amount,
        subtotal: 0,
        taxAmount: 0,
        netTotal: -amount,
        breakdownLines,
      },
    ];
  });

  return [...jobRows, ...expenseRows].reduce<TaxRow[]>((combinedRows, row) => {
    if (!row.jobId) {
      combinedRows.push(row);
      return combinedRows;
    }

    const existing = combinedRows.find((candidate) => candidate.jobId === row.jobId && candidate.date === row.date);
    if (!existing) {
      combinedRows.push(row);
      return combinedRows;
    }

    existing.inAmount += row.inAmount;
    existing.outAmount += row.outAmount;
    existing.fees += row.fees;
    existing.hire += row.hire;
    existing.mileage += row.mileage;
    existing.totalExpense += row.totalExpense;
    existing.subtotal += row.subtotal;
    existing.taxAmount += row.taxAmount;
    existing.netTotal += row.netTotal;
    existing.breakdownLines = [...(existing.breakdownLines ?? []), ...(row.breakdownLines ?? [])];
    return combinedRows;
  }, []);
}

export function summarizeJobs(jobs: Job[], settings = defaultSettings) {
  const active = jobs.filter((job) => job.status !== "Canceled");
  const today = new Date().toISOString().slice(0, 10);
  const currentMonth = today.slice(0, 7);
  const monthKeyForCollected = (date: string) => {
    if (!date) return currentMonth;
    return date > today ? currentMonth : date.slice(0, 7);
  };
  const totals = active.reduce(
    (acc, job) => {
      const math = calculateJob(job, settings);
      acc.booking += math.bookingTotal;
      acc.grand += math.grandTotal;
      acc.paid += math.paid;
      acc.balance += math.balance;
      acc.tax += math.tax;
      acc.expenses += math.expenses;
      acc.net += math.collectedNet;
      acc.projectedNet += math.projectedNet;
      acc.progress += math.workflowProgress;
      return acc;
    },
    {
      booking: 0,
      grand: 0,
      paid: 0,
      balance: 0,
      tax: 0,
      expenses: 0,
      net: 0,
      projectedNet: 0,
      progress: 0,
    },
  );

  const byProduct = new Map<string, number>();
  const byMonth = new Map<string, { paid: number; balance: number }>();
  const byYear = new Map<string, number>();
  const addCollectedByYear = (date: string, amount: number) => {
    if (amount <= 0) return;
    const year = date?.slice(0, 4);
    if (!year) return;
    byYear.set(year, (byYear.get(year) || 0) + amount);
  };

  active.forEach((job) => {
    const math = calculateJob(job, settings);
    const month = job.date.slice(0, 7) || "Unscheduled";
    byProduct.set(job.product, (byProduct.get(job.product) || 0) + 1);
    const monthValue = byMonth.get(month) || { paid: 0, balance: 0 };
    monthValue.balance += math.balance;
    byMonth.set(month, monthValue);

    if (job.payments?.length) {
      job.payments.forEach((payment) => {
        addCollectedByYear(payment.date || job.date, payment.amount);
        const paymentMonth = monthKeyForCollected(payment.date);
        const paymentMonthValue = byMonth.get(paymentMonth) || { paid: 0, balance: 0 };
        paymentMonthValue.paid += payment.amount;
        byMonth.set(paymentMonth, paymentMonthValue);
      });
    }

    if (job.paidAmount > 0) {
      addCollectedByYear(job.date, job.paidAmount);
      const paidMonth = monthKeyForCollected(job.date);
      const paidMonthValue = byMonth.get(paidMonth) || { paid: 0, balance: 0 };
      paidMonthValue.paid += job.paidAmount;
      byMonth.set(paidMonth, paidMonthValue);
    }
  });

  return {
    activeJobs: active.length,
    canceledJobs: jobs.length - active.length,
    averageProgress: active.length ? totals.progress / active.length : 0,
    totals,
    byProduct: [...byProduct.entries()].sort((a, b) => b[1] - a[1]),
    byMonth: [...byMonth.entries()].sort((a, b) => a[0].localeCompare(b[0])),
    byYear: [...byYear.entries()].sort((a, b) => b[0].localeCompare(a[0])),
  };
}

export function newWorkflow(value = false) {
  return {
    contract: value,
    deposit: value,
    questionnaire: value,
    itinerary: value,
    paid: value,
    shoot: value,
    teaser: value,
    photoDelivered: value,
    videoDelivered: value,
  };
}
