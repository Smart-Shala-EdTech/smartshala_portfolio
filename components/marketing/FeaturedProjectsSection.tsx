"use client";

import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  Download,
  FileText,
  Gauge,
  History,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UsersRound,
  Workflow,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { MarketingCard } from "@/components/common/MarketingCard";
import { featuredProject } from "@/data/marketing";

const featureDescriptions: Record<string, string> = {
  "Secure Dealer Authentication":
    "Role-based OTP and password login ensuring only verified dealers view sensitive accounts.",
  "Tally Integration":
    "Automated ledger synchronization directly connecting accounting entries with dealer views.",
  "Voucher & Transaction History":
    "Comprehensive searchable logs of past orders, debits, credits, and outstanding amounts.",
  "Downloadable Receipts":
    "One-tap PDF invoice and receipt generation ready for printing or offline sharing.",
  "Centralized Dealer Dashboard":
    "High-level overview of account balances, current status, and latest company updates.",
  "Mobile-Friendly User Experience":
    "Responsive interface engineered for quick access on smartphones in shop and field environments.",
};

const featureIcons: Record<string, typeof ShieldCheck> = {
  "Secure Dealer Authentication": ShieldCheck,
  "Tally Integration": Workflow,
  "Voucher & Transaction History": History,
  "Downloadable Receipts": Download,
  "Centralized Dealer Dashboard": UsersRound,
  "Mobile-Friendly User Experience": Smartphone,
};

export function FeaturedProjectsSection() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <section id="featured-projects" className="section-band scroll-mt-24">
      <div className="container-grid">
        {/* Section Header with Pagination and Navigation */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold text-brand-secondary">Featured work</p>
            <h2 className="font-display text-[length:var(--text-h2)] font-semibold leading-tight">
              Featured Projects
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-secondary">
              Real-world solutions built for businesses, organizations, and growing enterprises.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-end">
            <span className="font-mono text-xs font-semibold tracking-wider text-secondary">
              01 / 03
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                className="grid size-9 place-items-center rounded-full border border-border bg-surface text-secondary/50 transition hover:border-brand-primary hover:text-brand-primary disabled:opacity-40"
                aria-label="Previous project"
                disabled
              >
                <ChevronLeft size={16} aria-hidden="true" />
              </button>
              <button
                type="button"
                className="grid size-9 place-items-center rounded-full border border-border bg-surface text-secondary transition hover:border-brand-primary hover:text-brand-primary"
                aria-label="Next project"
              >
                <ChevronRight size={16} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Project Card */}
        <div className="mx-auto max-w-6xl">
          <MarketingCard className="group overflow-hidden p-0">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              {/* Left Panel: Clean Sage-Green Gradient Area */}
              <div className="relative min-h-[380px] overflow-hidden border-b border-dashed border-border bg-surface p-6 text-primary lg:border-b-0 lg:border-r md:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(168,197,160,0.34),transparent_35%),linear-gradient(135deg,rgba(45,122,79,0.14),rgba(224,123,57,0.08))]" />

                <div className="relative flex h-full flex-col justify-between gap-8">
                  <div>
                    <Badge color="culture" className="w-fit bg-surface/95">
                      {featuredProject.category}
                    </Badge>
                    <p className="mt-6 text-sm font-semibold text-brand-primary">
                      Dealer operations, digitized
                    </p>
                    <h3 className="mt-2 max-w-sm font-display text-4xl font-bold leading-tight md:text-5xl">
                      {featuredProject.name}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-border bg-surface/90 p-3 shadow-card">
                      <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                        Client
                      </p>
                      <p className="mt-1 text-sm font-semibold text-primary">{featuredProject.client}</p>
                    </div>
                    <div className="rounded-lg border border-border bg-surface/90 p-3 shadow-card">
                      <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                        Industry
                      </p>
                      <p className="mt-1 text-sm font-semibold text-primary">{featuredProject.industry}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Panel: Content, Badges & Actions */}
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-brand-primary/20 bg-brand-primary/10 px-3 py-1.5 text-xs font-semibold text-brand-primary">
                      Secure dealer access
                    </span>
                    <span className="rounded-full border border-brand-secondary/25 bg-brand-secondary/10 px-3 py-1.5 text-xs font-semibold text-brand-secondary">
                      Business record visibility
                    </span>
                    <span className="rounded-full border border-border bg-bg px-3 py-1.5 text-xs font-semibold text-primary">
                      Tally ERP Integrated
                    </span>
                  </div>

                  <p className="mt-6 text-base leading-7 text-secondary">
                    {featuredProject.description}
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-3">
                    {[
                      { icon: Gauge, label: "Faster record access" },
                      { icon: FileText, label: "Receipt downloads" },
                      { icon: CircleDollarSign, label: "Clear transactions" },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className="rounded-lg border border-dashed border-border bg-bg p-4 transition duration-150 ease-out group-hover:-translate-y-0.5 group-hover:border-brand-soft"
                        >
                          <Icon size={22} className="text-brand-primary" aria-hidden="true" />
                          <p className="mt-3 text-sm font-semibold leading-5 text-primary">
                            {item.label}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4 pt-2">
                  <Button type="button" onClick={() => setOpen(true)}>
                    View Project
                    <ArrowRight size={18} aria-hidden="true" />
                  </Button>
                  <p className="text-sm text-secondary">
                    Built around faster access, less manual coordination, and dealer transparency.
                  </p>
                </div>
              </div>
            </div>
          </MarketingCard>
        </div>
      </div>

      {/* Upgraded Project Overview Modal */}
      {open ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/64 p-3 backdrop-blur-sm md:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-overview-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="relative flex max-h-[92dvh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl my-auto">
            {/* 1. Sticky Header */}
            <div className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-4 border-b border-dashed border-border bg-surface/95 px-6 py-4 backdrop-blur-md">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-secondary">
                  Dealer Management Platform
                </p>
                <h2
                  id="project-overview-title"
                  className="mt-0.5 font-display text-xl md:text-2xl font-bold text-primary"
                >
                  Project Overview — Vidisha Detergent
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-lg bg-brand-primary px-4 py-2.5 text-xs md:text-sm font-semibold text-surface transition hover:bg-brand-primary-hover shadow-sm"
                >
                  Start a Similar Project
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
                <button
                  type="button"
                  className="grid size-10 place-items-center rounded-lg border border-border text-secondary transition hover:border-brand-primary hover:text-brand-primary"
                  aria-label="Close project details"
                  onClick={() => setOpen(false)}
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-6 md:p-8 space-y-8 flex-1">
              {/* 2. 4-Column Metadata Strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 rounded-xl border border-border bg-bg/70 p-4 md:p-5 divide-y md:divide-y-0 md:divide-x divide-border">
                <div className="px-3 py-2 md:py-0 first:pl-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                    Client
                  </p>
                  <p className="mt-1 font-display text-base md:text-lg font-bold text-primary">
                    Vidisha Detergent
                  </p>
                </div>
                <div className="px-3 py-2 md:py-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                    Industry
                  </p>
                  <p className="mt-1 font-display text-base md:text-lg font-bold text-primary">
                    FMCG &amp; Distribution
                  </p>
                </div>
                <div className="px-3 py-2 md:py-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                    Integration
                  </p>
                  <p className="mt-1 font-display text-base md:text-lg font-bold text-primary">
                    Tally ERP
                  </p>
                </div>
                <div className="px-3 py-2 md:py-0 last:pr-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                    Delivery
                  </p>
                  <p className="mt-1 font-display text-base md:text-lg font-bold text-primary">
                    4 Weeks
                  </p>
                </div>
              </div>

              {/* 3. Side-by-Side Comparison: The Bottleneck vs. The SmartShala Solution */}
              <div>
                <h3 className="font-display text-lg font-semibold text-primary mb-4">
                  Problem &amp; Resolution
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Left Card: The Bottleneck */}
                  <div className="rounded-xl border border-brand-secondary/30 bg-[#FCF5EE] p-5 md:p-6">
                    <div className="flex items-center gap-2.5 text-brand-secondary mb-3">
                      <AlertTriangle size={20} aria-hidden="true" />
                      <h4 className="font-display text-lg font-bold">The Bottleneck</h4>
                    </div>
                    <ul className="space-y-2.5 text-sm leading-6 text-secondary">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-secondary font-bold">•</span>
                        <span>
                          <strong>Manual record-sharing delays:</strong> Factory accounts team spent hours daily generating and sending balance statements.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-secondary font-bold">•</span>
                        <span>
                          <strong>Zero self-service visibility:</strong> Dealers had no direct window into past orders, outstanding dues, or dispatch slips.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-secondary font-bold">•</span>
                        <span>
                          <strong>Friction &amp; paper reliance:</strong> High volume of phone calls, WhatsApp messages, and delayed physical receipts caused operational bottlenecks.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Right Card: The SmartShala Solution */}
                  <div className="rounded-xl border border-brand-primary/30 bg-[#F2F8F4] p-5 md:p-6">
                    <div className="flex items-center gap-2.5 text-brand-primary mb-3">
                      <Sparkles size={20} aria-hidden="true" />
                      <h4 className="font-display text-lg font-bold">The SmartShala Solution</h4>
                    </div>
                    <ul className="space-y-2.5 text-sm leading-6 text-secondary">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-primary font-bold">•</span>
                        <span>
                          <strong>24/7 self-serve dealer portal:</strong> Secure authentication allowing dealers to view real-time account status anywhere on mobile.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-primary font-bold">•</span>
                        <span>
                          <strong>Real-time Tally sync:</strong> Automated bidirectional data layer synchronizing ledgers and vouchers without duplicate entry.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-primary font-bold">•</span>
                        <span>
                          <strong>Instant receipt downloads:</strong> Fast generation of digital payment receipts, dispatch vouchers, and monthly statement PDFs.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 4. Impact & Results: 3 KPI Metric Cards */}
              <div>
                <h3 className="font-display text-lg font-semibold text-primary mb-4">
                  Impact &amp; Measured Results
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="rounded-xl border border-border bg-surface p-5 md:p-6 shadow-card text-center md:text-left">
                    <p className="font-display text-4xl md:text-5xl font-extrabold text-brand-primary">
                      0
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      Manual Calls Needed
                    </p>
                    <p className="mt-1 text-xs text-secondary leading-5">
                      Dealers check ledger records, vouchers, and statements independently.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-surface p-5 md:p-6 shadow-card text-center md:text-left">
                    <p className="font-display text-4xl md:text-5xl font-extrabold text-brand-secondary">
                      &lt; 5 Sec
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      Receipt Downloads
                    </p>
                    <p className="mt-1 text-xs text-secondary leading-5">
                      Instant generation of digital payment vouchers and dispatch slips.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-surface p-5 md:p-6 shadow-card text-center md:text-left">
                    <p className="font-display text-4xl md:text-5xl font-extrabold text-brand-primary">
                      100%
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      Real-Time Tally Sync
                    </p>
                    <p className="mt-1 text-xs text-secondary leading-5">
                      Automated reconciliation connecting back-office books with dealer screens.
                    </p>
                  </div>
                </div>
              </div>

              {/* 5. Key Features: 3x2 Grid with Subtitles */}
              <div>
                <h3 className="font-display text-lg font-semibold text-primary mb-4">
                  Key Features
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {featuredProject.keyFeatures.map((feature) => {
                    const Icon = featureIcons[feature.label] || feature.icon;
                    const subtitle = featureDescriptions[feature.label];
                    return (
                      <div
                        key={feature.label}
                        className="rounded-xl border border-border bg-bg/50 p-5 transition duration-150 hover:border-brand-soft hover:bg-surface"
                      >
                        <div className="grid size-11 place-items-center rounded-lg border border-brand-primary/20 bg-brand-primary/10 text-brand-primary mb-3">
                          <Icon size={22} aria-hidden="true" />
                        </div>
                        <h4 className="text-base font-semibold text-primary">
                          {feature.label}
                        </h4>
                        {subtitle ? (
                          <p className="mt-1.5 text-xs leading-5 text-secondary">
                            {subtitle}
                          </p>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 6. Services Provided */}
              <div>
                <h3 className="font-display text-lg font-semibold text-primary mb-3">
                  Services Provided
                </h3>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.servicesProvided.map((service) => (
                    <span
                      key={service}
                      className="inline-flex items-center gap-1.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3.5 py-1.5 text-xs font-semibold text-brand-primary"
                    >
                      <CheckCircle2 size={14} aria-hidden="true" />
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* 7. Full-Width Forest-Green Conversion Footer */}
              <div className="rounded-xl bg-brand-primary p-6 md:p-8 text-surface flex flex-col md:flex-row items-center justify-between gap-6 shadow-card">
                <div>
                  <h4 className="font-display text-xl md:text-2xl font-bold text-surface">
                    Need a custom portal or Tally integration like this?
                  </h4>
                  <p className="mt-1 text-sm text-surface/85">
                    Tell us about your dealer network or operations and get a practical roadmap.
                  </p>
                </div>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-surface px-6 py-3 text-sm font-bold text-brand-primary transition hover:bg-bg shadow-sm"
                >
                  Book a 15-Min Discovery Call
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
