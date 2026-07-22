export type JobStatus = string;

export type ProductType =
  | "Wedding Photo + Video"
  | "Wedding Photo"
  | "Wedding Video"
  | "Engagement"
  | "PhotoBooth"
  | "Services"
  | "Real Estate"
  | "Senior Photos"
  | "Family Portrait"
  | "Gear";

export type WorkflowKey = string;

export type Workflow = Record<string, boolean>;

export type ChecklistItem = {
  id: string;
  label: string;
  services: string[];
  dueRule?: {
    offsetDays: number;
    direction: "before" | "after";
    basis?: "booking" | "event";
    alertDays: number;
  };
};

export type AdditionalService = {
  id: string;
  name: string;
  amount: number;
  products: string[];
  variants?: AdditionalServiceVariant[];
  selectedVariantId?: string;
};

export type AdditionalServiceVariant = {
  id: string;
  name: string;
  amount: number;
};

export type ServiceGroup = {
  id: string;
  name: string;
  description?: string;
  services: string[];
};

export type ServiceBookingSettings = {
  price: number;
  pricingMode: "flat" | "hourly" | "variable-hourly";
  hourlyRate: number;
  minimumHours: number;
  maximumHours: number;
  hourlyTiers: ServiceHourlyTier[];
  depositType: "none" | "percentage" | "flat";
  depositAmount: number;
  requireDepositWhenBooking?: boolean;
  autoConfirmWithDeposit?: boolean;
  autoConfirmWithoutDeposit?: boolean;
  disableBookingNoticeEmails?: boolean;
  preventSamePersonMultipleBookings?: boolean;
  overrideBookedTimesFromOtherServices?: boolean;
  taxable: boolean;
  allowDiscounts: boolean;
  calculateTravelCost?: boolean;
  bookingType: "full-day" | "time-based";
  oncePerDay: boolean;
  dateRangeEnabled?: boolean;
  startDate?: string;
  endDate?: string;
  specialEvent?: boolean;
  leadTimeDays: number;
  maxAdvanceDays: number;
  appointmentsPerTime: number;
  customAvailability?: boolean;
  availableDays: number[];
  availabilityMode?: "all" | "weekday-weekend" | "custom";
  availabilityWindows?: Record<string, { startTime: string; endTime: string; blockMinutes: number }>;
  startTime: string;
  endTime: string;
  blockMinutes: number;
  bufferMinutes?: number;
  options: ServiceBookingOption[];
  requiredTeamRoles?: string[];
};

export type ServiceHourlyTier = {
  id: string;
  hour: number;
  rate: number;
};

export type ServiceBookingOption = {
  id: string;
  name: string;
  type: "text" | "textarea" | "checkbox" | "select" | "number" | "date";
  required: boolean;
  description: string;
  additionalPrice: number;
  textSize: number;
  displayOrder: number;
  criteria: {
    appliesTo: "always" | "photo-only" | "video-only" | "photo-and-video";
  };
  choices: string[];
};

export type CalendarDefaultSettings = {
  blockedWeekdays: number[];
  autoBlockHolidays: boolean;
  holidayBookingMode?: "block" | "allow";
  holidaySurchargeType?: "flat" | "percent";
  holidaySurchargeAmount?: number;
  lunchBreakEnabled: boolean;
  lunchStartTime: string;
  lunchEndTime: string;
  bufferMinutes: number;
  availableDays?: number[];
  availabilityWindows?: Record<string, { startTime: string; endTime: string; blockMinutes: number }>;
};

export type PaymentOption = {
  id: string;
  method: string;
  label: string;
  enabled: boolean;
  payUrl?: string;
  handle?: string;
  instructions?: string;
};

export type PaymentGatewaySettings = {
  paypalEnabled?: boolean;
  paypalMode?: "sandbox" | "live";
  paypalClientId?: string;
  paypalClientSecret?: string;
  paypalSandboxClientId?: string;
  paypalSandboxClientSecret?: string;
  paypalLiveClientId?: string;
  paypalLiveClientSecret?: string;
  stripeEnabled?: boolean;
  stripeSecretKey?: string;
  inPersonCashEnabled?: boolean;
};

export type Payment = {
  id: string;
  date: string;
  method: string;
  reference?: string;
  amount: number;
  status?: "paid" | "scheduled";
  scheduleId?: string;
};

export type TeamMember = {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  baseAddress?: string;
  baseStreet?: string;
  baseCity?: string;
  baseState?: string;
  baseZip?: string;
  role?: string;
  roleRates?: TeamRoleRate[];
  defaultRate?: number;
  defaultPayType?: "flat" | "hourly";
  status?: "active" | "one-time" | "inactive";
  active?: boolean;
};

export type TeamRoleRate = {
  role: string;
  payType: "flat" | "hourly";
  rate: number;
};

export type TeamAssignment = {
  id: string;
  memberId: string;
  role: string;
  coverage: "Full Job" | "Partial";
  hours: number;
  payType: "flat" | "hourly";
  rate: number;
  notes?: string;
  mileage?: number;
  mileageCalculatedAt?: string;
  mileageRouteKey?: string;
  paidAt?: string;
  paidExpenseId?: string;
};

export type JobServiceSchedule = {
  id: string;
  service: string;
  assignmentIds?: string[];
  date?: string;
  startTime?: string;
  endTime?: string;
  locationName?: string;
  location?: string;
  locationCity?: string;
  locationState?: string;
  locationZip?: string;
};

export type JobNote = {
  id: string;
  text: string;
  createdAt: string;
  updatedAt?: string;
};

export type JobDocument = {
  id: string;
  name: string;
  type: string;
  size: number;
  dataUrl: string;
  storageKey?: string;
  uploadedAt: string;
  uploadedBy: "admin" | "customer";
};

export type JobActivityLogEntry = {
  id: string;
  at: string;
  category: string;
  title: string;
  details?: string;
};

export type Job = {
  id: string;
  source?: "sample" | "imported" | "manual";
  status: JobStatus;
  date: string;
  orderNumber: string;
  clientFirst: string;
  clientLast: string;
  clientEmail?: string;
  clientPhone?: string;
  location?: string;
  startTime?: string;
  endTime?: string;
  serviceSchedule?: JobServiceSchedule[];
  product: ProductType | string;
  photoRate: number;
  photoHours: number;
  videoRate: number;
  videoHours: number;
  extras: number;
  discount: number;
  discountAppliedDate?: string;
  discountReference?: string;
  discountCouponId?: string;
  discountCouponCode?: string;
  discountCouponName?: string;
  taxRate: number;
  ccRate: number;
  miles: number;
  mileageRate: number;
  processing: number;
  hire: number;
  paidAmount: number;
  additionalServices?: AdditionalService[];
  requiredTeamRoles?: string[];
  payments?: Payment[];
  teamAssignments?: TeamAssignment[];
  notes?: string;
  notesLog?: JobNote[];
  documents?: JobDocument[];
  activityLog?: JobActivityLogEntry[];
  createdAt?: string;
  deletedAt?: string;
  bookingConfirmed?: boolean;
  bookingConfirmationRequired?: boolean;
  workflow: Workflow;
  checklistDueDates?: Record<string, string>;
  calculatedExpenseOverrides?: Record<string, number>;
  overrides?: Partial<{
    bookingTotal: number;
    taxable: number;
    tax: number;
    ccFee: number;
    grandTotal: number;
    mileage: number;
    balance: number;
    progress: number;
  }>;
};

export type Expense = {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: string;
  reference?: string;
  jobId?: string;
  teamAssignmentId?: string;
  teamAssignmentPayments?: Record<string, number>;
  teamAssignmentRemainder?: number;
};

export type Settings = {
  taxRate: number;
  incomeTaxRate: number;
  discountTaxTiming?: "before-tax" | "after-tax";
  salesTaxExpenseTiming?: "before-expenses" | "after-expenses";
  salesUseTaxPeriod?: "monthly" | "quarterly" | "yearly";
  incomeTaxExpenseTiming?: "before-expenses" | "after-expenses";
  ccRate: number;
  mileageRate: number;
  depositRate: number;
  paymentOptions?: PaymentOption[];
  paymentGateway?: PaymentGatewaySettings;
  email?: EmailSettings;
  emailRules?: EmailRule[];
  alerts?: AlertSettings;
  bookingNaming?: BookingNamingSettings;
  venues?: VenueLocation[];
  googleMapsApiKey?: string;
  contractServices?: string[];
  serviceColors?: Record<string, string>;
  serviceDescriptions?: Record<string, string>;
  serviceThumbnails?: Record<string, string>;
  serviceThumbnailCrops?: Record<string, { x: number; y: number; zoom: number }>;
  serviceGroupThumbnails?: Record<string, string>;
  serviceGroupThumbnailCrops?: Record<string, { x: number; y: number; zoom: number }>;
  serviceGroups?: ServiceGroup[];
  serviceBooking?: Record<string, ServiceBookingSettings>;
  serviceStatsTimeframe?: "all-time" | "this-year" | "this-month" | "last-90-days" | "last-30-days" | "last-7-days";
  coupons?: Coupon[];
  bookableServices?: string[];
  calendarDefaults?: CalendarDefaultSettings;
  applyWebsiteThemeToAdmin?: boolean;
  adminMenuBackgroundColor?: string;
  adminMenuTextColor?: string;
  adminMenuActiveBackgroundColor?: string;
  adminMenuActiveTextColor?: string;
  adminContentBackgroundColor?: string;
  adminPanelBackgroundColor?: string;
  adminTextColor?: string;
  adminMutedTextColor?: string;
  adminBorderColor?: string;
  adminLeftMenuBackgroundColor?: string;
  adminLeftMenuTextColor?: string;
  adminLeftMenuActiveBackgroundColor?: string;
  adminLeftMenuActiveTextColor?: string;
  adminRowOddColor?: string;
  adminRowEvenColor?: string;
  adminRowHoverColor?: string;
  adminHomeTileBackgroundColor?: string;
  adminHomeTileTextColor?: string;
  adminHomeTileMutedTextColor?: string;
  adminHomeTileBorderColor?: string;
  adminStatusBadgeBackgroundColor?: string;
  adminStatusBadgeTextColor?: string;
  adminStatusBadgeBorderColor?: string;
  adminStatusColors?: Record<string, { backgroundColor?: string; textColor?: string; borderColor?: string }>;
  adminAmountPillBackgroundColor?: string;
  adminAmountPillTextColor?: string;
  adminAmountPillBorderColor?: string;
};

export type Coupon = {
  id: string;
  code: string;
  name: string;
  active: boolean;
  autoApply?: boolean;
  discountType: "percentage" | "fixed";
  amount: number;
  appliesTo: "booking" | "service";
  applyToTravel?: boolean;
  serviceNames?: string[];
  startsAt?: string;
  expiresAt?: string;
  maxRedemptions?: number;
  maxRedemptionsPerPerson?: number;
  minimumSubtotal?: number;
  requiresPriorPurchase?: boolean;
  requiredPurchaseServices?: string[];
  requiredPurchaseMinimumHours?: number;
  requiredPurchaseMinimumSubtotal?: number;
  transferable?: boolean;
  combinable?: boolean;
  notes?: string;
  redemptions?: CouponRedemption[];
};

export type CouponRedemption = {
  id: string;
  redeemedAt: string;
  jobId?: string;
  clientName: string;
  clientEmail?: string;
  amount: number;
};

export type EmailSettings = {
  provider?: "smtp" | "microsoft";
  smtpHost: string;
  smtpPort: number;
  smtpSecure: boolean;
  smtpUser: string;
  smtpPassword: string;
  microsoftTenantId?: string;
  microsoftClientId?: string;
  microsoftClientSecret?: string;
  microsoftSenderMailbox?: string;
  fromEmail: string;
  fromName: string;
  replyToEmail?: string;
  defaultInvoiceSubject: string;
  defaultContractSubject: string;
  defaultPaymentSubject: string;
  headerHtml?: string;
  footerHtml?: string;
};

export type EmailRule = {
  id: string;
  name: string;
  active: boolean;
  saved?: boolean;
  templateId: string;
  trigger:
    | "immediate"
    | "account-created"
    | "booking-submitted"
    | "payment-received"
    | "before-event"
    | "after-event"
    | "after-booking"
    | "monthly-payment-due"
    | "alert-center-recap"
    | "payment-overdue";
  offsetAmount: number;
  offsetUnit: "days" | "weeks" | "months";
  monthlyDay?: number;
  timeOfDay: string;
  serviceScope: "all" | "selected";
  serviceNames?: string[];
  balanceOnly?: boolean;
  minimumBalance?: number;
  sendOnce?: boolean;
  repeatUntilComplete?: boolean;
  incompleteTask?: "contract-unsigned" | "questionnaire-incomplete" | "balance-due";
  reminderEveryAmount?: number;
  reminderEveryUnit?: "days" | "weeks" | "months";
  maxReminders?: number;
  notes?: string;
};

export type AlertSettings = {
  hiddenAlertIds?: string[];
  snoozedAlertIds?: Record<string, string>;
  newBookings: {
    enabled: boolean;
    pastDays: number;
  };
  contracts: {
    enabled: boolean;
    dueMode: "past-due" | "due-soon";
    days: number;
  };
  invoices: {
    enabled: boolean;
    pastDueDays: number;
  };
  teamAssignments: {
    enabled: boolean;
    upcomingDays: number;
  };
  upcomingJobs?: {
    enabled: boolean;
    upcomingDays: number;
  };
  balanceDue?: {
    enabled: boolean;
    pastDueDays: number;
    minimumAmount: number;
  };
  deposits?: {
    enabled: boolean;
    upcomingDays: number;
  };
  checklist?: {
    enabled: boolean;
    upcomingDays: number;
  };
  missingContactInfo?: {
    enabled: boolean;
    upcomingDays: number;
  };
  missingEmail?: {
    enabled: boolean;
    upcomingDays: number;
  };
  missingPhone?: {
    enabled: boolean;
    upcomingDays: number;
  };
  missingOrderNumber?: {
    enabled: boolean;
    pastDays: number;
  };
  missingMileage?: {
    enabled: boolean;
    upcomingDays: number;
  };
  missingBookingTime?: {
    enabled: boolean;
    upcomingDays: number;
  };
  missingBookingLocation?: {
    enabled: boolean;
    upcomingDays: number;
  };
  zeroTotal?: {
    enabled: boolean;
    upcomingDays: number;
  };
  noPayments?: {
    enabled: boolean;
    pastDays: number;
    minimumAmount: number;
  };
  paymentBeforeEvent?: {
    enabled: boolean;
    upcomingDays: number;
    minimumAmount: number;
  };
  unsignedContracts?: {
    enabled: boolean;
    pastDays: number;
  };
  questionnaireDue?: {
    enabled: boolean;
    upcomingDays: number;
  };
  itineraryDue?: {
    enabled: boolean;
    upcomingDays: number;
  };
  shootIncomplete?: {
    enabled: boolean;
    pastDays: number;
  };
  deliveryOpen?: {
    enabled: boolean;
    pastDays: number;
  };
  uncategorizedExpenses?: {
    enabled: boolean;
    pastDays: number;
  };
  unlinkedExpenses?: {
    enabled: boolean;
    pastDays: number;
  };
};

export type BookingNamingSettings = {
  pattern: string;
  nextNumber: number;
  padding: number;
};

export type VenueLocation = {
  id: string;
  name: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  miles?: number;
};

export type JobMath = {
  bookingTotal: number;
  taxable: number;
  tax: number;
  ccFee: number;
  totalTax: number;
  grandTotal: number;
  deposit: number;
  paid: number;
  balance: number;
  paidPercent: number;
  mileage: number;
  labor: number;
  expenses: number;
  projectedNet: number;
  collectedNet: number;
  workflowProgress: number;
};

export type TaxRow = {
  id: string;
  jobId?: string;
  kind?: "job" | "discount" | "expense";
  orderNumber: string;
  date: string;
  client: string;
  product: string;
  inAmount: number;
  outAmount: number;
  fees: number;
  hire: number;
  mileage: number;
  totalExpense: number;
  subtotal: number;
  taxAmount: number;
  netTotal: number;
  breakdownLines?: TaxRowBreakdownLine[];
};

export type TaxRowBreakdownLine = {
  id: string;
  type: "payment" | "expense" | "calculated" | "tax" | "profit";
  sourceExpenseId?: string;
  sourceTeamAssignmentId?: string;
  label: string;
  date?: string;
  amount: number;
  reference?: string;
  detail?: string;
};

export type QuoteLine = {
  id: string;
  service: string;
  rate: number;
  quantity: number;
};

export type ImportResult = {
  jobs: Job[];
  expenses?: Expense[];
  expenseCategories?: string[];
  paymentMethods?: string[];
  skippedRows: number;
  sheets: string[];
};
