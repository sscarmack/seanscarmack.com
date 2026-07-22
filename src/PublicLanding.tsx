import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Camera,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  FileSpreadsheet,
  Images,
  ReceiptText,
  ShieldCheck,
  Users,
} from "lucide-react";
import "./publicLanding.css";

type FeatureKey = "dashboard" | "coverage" | "ledger" | "reports" | "invoices" | "gallery";

const features: Array<{
  key: FeatureKey;
  title: string;
  eyebrow: string;
  description: string;
  metric: string;
  metricLabel: string;
}> = [
  {
    key: "dashboard",
    title: "Run the dashboard",
    eyebrow: "Live operations",
    description: "See booked work, collected income, open balances, tax, expenses, and the next actions that keep the day moving.",
    metric: "$47.3k",
    metricLabel: "collected year to date",
  },
  {
    key: "coverage",
    title: "Cover the job",
    eyebrow: "Team coverage",
    description: "Keep roles, pay, time, location, and missing coverage visible before the work ever starts.",
    metric: "96%",
    metricLabel: "of assignments fully covered",
  },
  {
    key: "ledger",
    title: "Run the ledger",
    eyebrow: "General ledger",
    description: "Search every booking, payment, fee, tax, expense, balance, and profit line in one financial record.",
    metric: "$83.8k",
    metricLabel: "grand total across 59 bookings",
  },
  {
    key: "reports",
    title: "Read the reports",
    eyebrow: "Income + expense",
    description: "Move from daily operations to the bigger picture with live income, expected income, expenses, net, tax, and forecasting views.",
    metric: "$57.5k",
    metricLabel: "expected net for the year",
  },
  {
    key: "invoices",
    title: "Get paid faster",
    eyebrow: "Invoicing + payments",
    description: "Build a clear invoice, collect payments, apply discounts, and keep the paid amount and balance due visible in the same job record.",
    metric: "$2,040",
    metricLabel: "balance due in view",
  },
  {
    key: "gallery",
    title: "Deliver the work",
    eyebrow: "Client galleries",
    description: "Upload finished work, select the gallery preview, organize sub-galleries, and share a polished client experience without leaving your workspace.",
    metric: "1 click",
    metricLabel: "from gallery to shareable site",
  },
];

function ProductPreview({ feature }: { feature: (typeof features)[number] }) {
  if (feature.key === "dashboard") {
    return <div className="public-preview-window public-dashboard-preview">
      <header><span><Camera size={14} /> The Vendor Book</span><b><i /> Live workspace</b></header>
      <div className="public-preview-title"><div><small>Monday, June 23</small><strong>Your studio, in motion.</strong></div><em>Year to date</em></div>
      <div className="public-kpis">{[["Bookings", "$18.4k"], ["Collected", "$12.9k"], ["Open", "$5.6k"], ["Tax", "$1.1k"]].map(([label, value]) => <div key={label}><small>{label}</small><b>{value}</b></div>)}</div>
      <div className="public-dashboard-bottom"><section><div><b>Today&apos;s work</b><span>3 jobs</span></div>{[["10:00 AM", "Planning call", "Ready"], ["2:30 PM", "Client session", "Contract sent"], ["5:00 PM", "Gallery delivery", "Covered"]].map(([time, job, status]) => <p key={time}><small>{time}</small><b>{job}</b><em>{status}</em></p>)}</section><section className="public-money-card"><span>Money in view</span><strong>$12,860</strong><small>of $18,420 booked</small><i /><div><b>$5,560<small> open</small></b><b>$1,105<small> sales tax</small></b></div></section></div>
    </div>;
  }

  if (feature.key === "coverage") {
    return <div className="public-preview-window public-coverage-preview">
      <header><span><Camera size={14} /> The Vendor Book</span><b><i /> Live data</b></header>
      <div className="public-coverage-title"><div><small>Photo + video booking</small><strong>Team coverage</strong></div><em>Covered</em></div>
      <div className="public-coverage-progress"><span>4 of 4 roles covered</span><div><i /><i /><i /><i /></div></div>
      <div className="public-coverage-list">{[["Photography", "Primary role", "Covered"], ["Video editor", "Post-production assigned", "Covered"], ["Second shooter", "On-site role", "Covered"], ["Time + location", "Client confirmed", "Ready"]].map(([role, detail, status]) => <div key={role}><span><Users size={15} /><b>{role}</b></span><strong>{detail}</strong><em>{status}</em></div>)}</div>
    </div>;
  }

  if (feature.key === "ledger") {
    return <div className="public-preview-window public-ledger-preview">
      <header><span><ReceiptText size={14} /> Reports</span><b>2026</b></header>
      <div className="public-ledger-title"><div><small>Financial workspace</small><strong>General Ledger</strong></div><em>All bookings</em></div>
      <div className="public-ledger-kpis">{[["Bookings", "59"], ["Paid", "$51.3k"], ["Balance", "$32.7k"]].map(([label, value]) => <div key={label}><small>{label}</small><b>{value}</b></div>)}</div>
      <div className="public-ledger-table"><div className="public-ledger-head"><span>Status</span><span>Job</span><span>Total</span><span>Paid</span></div>{[["Deposit", "Job #1484", "$4,158", "$530"], ["Open", "Job #1413", "$1,650", "-"], ["Paid", "Job #1191", "$4,410", "$4,410"]].map(([status, job, total, paid]) => <div key={job}><em>{status}</em><b>{job}</b><strong>{total}</strong><span>{paid}</span></div>)}</div>
    </div>;
  }

  if (feature.key === "invoices") {
    return <div className="public-preview-window public-invoice-preview">
      <header><span><ReceiptText size={14} /> Invoice workspace</span><b><i /> Ready to send</b></header>
      <div className="public-invoice-title"><div><small>Booking #1493</small><strong>Wedding Photo + Video</strong></div><em>Invoice</em></div>
      <div className="public-invoice-line"><span>Photography</span><small>8 hrs x $300</small><b>$2,400</b></div>
      <div className="public-invoice-totals"><div><span>Booking total</span><b>$2,400</b></div><div><span>Paid</span><b>$600</b></div><div className="public-invoice-balance"><span>Balance due</span><b>$2,040</b></div></div>
      <footer><button type="button"><CreditCard size={14} /> Make payment</button><span><CheckCircle2 size={14} /> Invoice ready to email</span></footer>
    </div>;
  }

  if (feature.key === "gallery") {
    return <div className="public-preview-window public-gallery-preview">
      <header><span><Images size={14} /> Client gallery</span><b><i /> Live</b></header>
      <div className="public-gallery-title"><div><small>Client delivery</small><strong>Wedding gallery ready</strong></div><em>Preview selected</em></div>
      <div className="public-gallery-grid"><span /><span /><span /><span /><span /><span /></div>
      <div className="public-gallery-status"><div><Images size={15} /><span><b>42 photos</b><small>organized and shared</small></span></div><div><CheckCircle2 size={15} /><span><b>Client link active</b><small>ready to view</small></span></div></div>
    </div>;
  }

  return <div className="public-preview-window public-reports-preview">
    <header><span><FileSpreadsheet size={14} /> Income + Expense</span><b>Year to date</b></header>
    <div className="public-report-title"><div><small>2026 performance</small><strong>Reports that tell the story</strong></div><em>Live</em></div>
    <div className="public-report-kpis">{[["Collected", "$47,340"], ["Expected", "$78,009"], ["Net", "$57,457"]].map(([label, value]) => <div key={label}><small>{label}</small><b>{value}</b></div>)}</div>
    <div className="public-report-chart"><div><span><i /> Income</span><span><i /> Expected</span><span><i /> Expenses</span></div><section>{[37, 54, 47, 88, 83, 57, 72].map((height, index) => <p key={index}><i style={{ height: `${height}%` }} /><b style={{ height: `${Math.max(15, height - 21)}%` }} /></p>)}</section><footer><span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span><span>Dec</span></footer></div>
  </div>;
}

export default function PublicLanding() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const activeFeature = features[activeIndex];

  const featureIcons = {
    dashboard: BarChart3,
    coverage: Users,
    ledger: ReceiptText,
    reports: FileSpreadsheet,
    invoices: CreditCard,
    gallery: Images,
  };

  const featureSignals: Record<FeatureKey, string> = {
    dashboard: "3 jobs need attention today",
    coverage: "All key roles assigned",
    ledger: "$32,703.25 still open",
    reports: "Expected net is trending up",
    invoices: "Invoice ready to send",
    gallery: "Gallery preview is live",
  };

  const step = (direction: 1 | -1) => setActiveIndex((current) => (current + direction + features.length) % features.length);

  return <main className="public-landing">
    <div className="public-shell">
      <section className="public-hero" aria-labelledby="public-hero-title">
        <div className="public-brand"><span><Camera size={20} /></span><b>The Vendor Book</b><i /> <small>Built for booked-out service businesses</small></div>
        <h1 id="public-hero-title">Run every job from booked to paid.</h1>
        <p>One connected workspace for bookings, team coverage, invoices, payments, expenses, client galleries, and the website that brings in the next job.</p>
        <div className="public-hero-actions"><button type="button" onClick={() => setMode("signup")}>Start your free trial <ArrowRight size={18} /></button><span><CheckCircle2 size={16} /> 30 days free</span><span><CheckCircle2 size={16} /> No card required</span></div>
      </section>

      <aside className="public-access-card" aria-label="Demo access">
        <p><CheckCircle2 size={16} /> 30-day free trial. No card needed.</p>
        <div className="public-access-title"><span><Camera size={22} /></span><div><small>The Vendor Book</small><strong>{mode === "signin" ? "Welcome back" : "Start your trial"}</strong></div></div>
        <div className="public-access-tabs"><button type="button" className={mode === "signin" ? "active" : ""} onClick={() => setMode("signin")}>Sign In</button><button type="button" className={mode === "signup" ? "active" : ""} onClick={() => setMode("signup")}>Sign Up</button></div>
        <label>Email<input type="email" placeholder="you@yourbusiness.com" autoComplete="email" /></label>
        <label>Password<input type="password" placeholder={mode === "signin" ? "Enter your password" : "Create a password"} autoComplete={mode === "signin" ? "current-password" : "new-password"} /></label>
        <button type="button" className="public-access-submit">{mode === "signin" ? "Sign In To Dashboard" : "Create My Trial"}</button>
        <small className="public-demo-note"><ShieldCheck size={14} /> Public demo uses fictional sample data.</small>
      </aside>

      <section className="public-feature-stage" aria-labelledby="public-feature-heading">
        <header><div><small>One operating system. Six momentum makers.</small><h2 id="public-feature-heading">Make every handoff feel automatic.</h2></div><div className="public-carousel-controls"><button type="button" onClick={() => step(-1)} aria-label="Previous product feature"><ChevronLeft size={20} /></button><span>{String(activeIndex + 1).padStart(2, "0")} / {String(features.length).padStart(2, "0")}</span><button type="button" onClick={() => step(1)} aria-label="Next product feature"><ChevronRight size={20} /></button></div></header>
        <div className="public-feature-content">
          <nav aria-label="Product features">{features.map((feature, index) => { const Icon = featureIcons[feature.key]; return <button key={feature.key} type="button" className={index === activeIndex ? "active" : ""} onClick={() => setActiveIndex(index)}><span><Icon size={19} /></span><small>{String(index + 1).padStart(2, "0")}</small><b>{feature.title}</b><ChevronRight size={16} /></button>; })}</nav>
          <article><div className="public-feature-copy"><p><b>{String(activeIndex + 1).padStart(2, "0")}</b> {activeFeature.eyebrow}</p><h3>{activeFeature.title}</h3><span>{activeFeature.description}</span><em><CheckCircle2 size={16} /> {featureSignals[activeFeature.key]}</em><div><strong>{activeFeature.metric}</strong><small>{activeFeature.metricLabel}</small></div></div><ProductPreview feature={activeFeature} /></article>
        </div>
      </section>
    </div>
  </main>;
}
