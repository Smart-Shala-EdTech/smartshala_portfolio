import {
  ChevronDown,
  ChevronRight,
  ClipboardCheck,
  Code2,
  FileText,
  Headphones,
  Layout,
  MessagesSquare,
  Rocket,
  TestTube2,
} from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";

const averageAgencySteps = [
  { title: "Discovery Call", icon: MessagesSquare },
  { title: "Requirement Analysis", icon: ClipboardCheck },
  { title: "Proposal", icon: FileText },
  { title: "UI/UX Design", icon: Layout },
  { title: "Development", icon: Code2 },
  { title: "Testing", icon: TestTube2 },
  { title: "Deployment", icon: Rocket },
  { title: "Maintenance & Support", icon: Headphones },
];

function DiscoverScopeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Calendar backplate in slate */}
      <rect x="5" y="6" width="18" height="22" rx="3" className="stroke-slate-600" />
      <line x1="5" y1="12" x2="23" y2="12" className="stroke-slate-600" />
      <line x1="10" y1="3" x2="10" y2="7" className="stroke-slate-600" />
      <line x1="18" y1="3" x2="18" y2="7" className="stroke-slate-600" />
      <circle cx="10" cy="17" r="0.9" fill="currentColor" className="text-slate-600 stroke-none" />
      <circle cx="15" cy="17" r="0.9" fill="currentColor" className="text-slate-600 stroke-none" />
      <circle cx="10" cy="22" r="0.9" fill="currentColor" className="text-slate-600 stroke-none" />
      {/* Magnifying glass in forest green */}
      <circle
        cx="23"
        cy="21"
        r="6.5"
        className="stroke-brand-primary"
        fill="var(--color-surface, #FDFAF4)"
        strokeWidth="2"
      />
      <line x1="28" y1="26" x2="33" y2="31" className="stroke-brand-primary" strokeWidth="2.5" />
    </svg>
  );
}

function DesignBuildIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Wireframe browser window in slate */}
      <rect
        x="4"
        y="5"
        width="22"
        height="18"
        rx="2.5"
        className="stroke-slate-600"
        fill="var(--color-surface, #FDFAF4)"
      />
      <line x1="4" y1="10" x2="26" y2="10" className="stroke-slate-600" />
      <circle cx="7.5" cy="7.5" r="0.75" fill="currentColor" className="text-slate-400 stroke-none" />
      <circle cx="10.5" cy="7.5" r="0.75" fill="currentColor" className="text-slate-400 stroke-none" />
      {/* Code symbol </> inside window in forest green */}
      <path d="M9 15L7 16.5L9 18" className="stroke-brand-primary" strokeWidth="1.75" />
      <path d="M14 15L16 16.5L14 18" className="stroke-brand-primary" strokeWidth="1.75" />
      {/* Pencil drafting in forest green */}
      <path
        d="M31 16.5L22.5 25L19 25.5L19.5 22L28 13.5L31 16.5Z"
        className="stroke-brand-primary"
        fill="var(--color-surface, #FDFAF4)"
        strokeWidth="1.75"
      />
      <line x1="26.5" y1="15" x2="29.5" y2="18" className="stroke-brand-primary" strokeWidth="1.5" />
    </svg>
  );
}

function DeploySupportIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Support Cog / Gear in slate */}
      <circle cx="9" cy="11" r="3" className="stroke-slate-600" />
      <path
        d="M9 6V7.5M9 14.5V16M4 11H5.5M12.5 11H14M5.5 7.5L6.6 8.6M11.4 13.4L12.5 14.5M5.5 14.5L6.6 13.4M11.4 8.6L12.5 7.5"
        className="stroke-slate-600"
        strokeWidth="1.5"
      />
      {/* Rocket lifting off in forest green */}
      <path
        d="M20 4C20 4 28 6.5 28 15C28 19 25.5 22 23.5 23.5L14 14C15.5 12 18.5 9.5 22.5 9.5C22.5 9.5 20 4 20 4Z"
        className="stroke-brand-primary"
        fill="var(--color-surface, #FDFAF4)"
        strokeWidth="2"
      />
      <circle cx="21.5" cy="14.5" r="1.75" className="stroke-brand-primary" strokeWidth="1.5" />
      <path d="M14 14L10 15L9 19L13 19.5" className="stroke-brand-primary" strokeWidth="1.5" />
      <path d="M23.5 23.5L22.5 27.5L18.5 28.5L18 24.5" className="stroke-brand-primary" strokeWidth="1.5" />
      {/* Rocket flame in terracotta */}
      <path
        d="M15.5 23.5L11 28C12.5 25.5 13 24.5 13.5 23.5"
        className="stroke-brand-secondary"
        strokeWidth="2"
      />
    </svg>
  );
}

function ScissorsRibbonIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Red Ribbon strip with snip cut */}
      <path
        d="M3 14C7 12 10 16 13 14"
        className="stroke-danger"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M17 14C20 12 23 16 26 14"
        className="stroke-danger"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Scissors blades */}
      <circle cx="8" cy="7" r="2.25" className="stroke-primary" strokeWidth="1.5" />
      <circle cx="8" cy="21" r="2.25" className="stroke-primary" strokeWidth="1.5" />
      <line x1="9.8" y1="8.8" x2="17" y2="15" className="stroke-primary" strokeWidth="1.75" />
      <line x1="9.8" y1="19.2" x2="17" y2="13" className="stroke-primary" strokeWidth="1.75" />
    </svg>
  );
}

export function ProcessSection() {
  return (
    <section id="process" className="section-band surface scroll-mt-24">
      <div className="container-grid">
        {/* 1. Section Header */}
        <SectionHeader
          eyebrow="Why SmartShala"
          title="How We Move Faster"
          description="Why wait for 8 steps when you only need 3?"
        />

        <div className="mx-auto max-w-6xl">
          {/* 2. Top Track: The Average Agency (8 Slow Steps) */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
            <div className="shrink-0 lg:w-48 xl:w-56">
              <h3 className="text-base font-bold text-primary">The Average Agency</h3>
              <p className="mt-0.5 text-xs text-secondary/70">(8 Slow Steps)</p>
            </div>

            <div className="flex-1 overflow-x-auto pb-3 pt-1 no-scrollbar">
              <div className="relative min-w-[720px] lg:min-w-0 grid grid-cols-8 gap-2">
                {/* Horizontal wavy/dashed gray connector line */}
                <svg
                  className="absolute left-6 right-6 top-6 h-3 w-[calc(100%-48px)] text-stone-300 z-0 pointer-events-none"
                  preserveAspectRatio="none"
                  viewBox="0 0 700 12"
                  aria-hidden="true"
                >
                  <path
                    d="M 0 6 C 50 2, 75 10, 100 6 C 125 2, 150 10, 175 6 C 200 2, 225 10, 250 6 C 275 2, 300 10, 325 6 C 350 2, 375 10, 400 6 C 425 2, 450 10, 475 6 C 500 2, 525 10, 550 6 C 575 2, 600 10, 625 6 C 650 2, 675 10, 700 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeDasharray="4 4"
                  />
                </svg>

                {averageAgencySteps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.title}
                      className="relative z-10 flex flex-col items-center text-center opacity-65 transition hover:opacity-100"
                    >
                      <div className="grid size-12 place-items-center rounded-full border border-stone-300/80 bg-stone-100/90 text-stone-400 shadow-none">
                        <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                      </div>
                      <span className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-stone-400">
                        0{idx + 1}
                      </span>
                      <p className="mt-0.5 text-xs font-medium leading-tight text-stone-500">
                        {step.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 3. Center Divider & Callout Badge */}
          <div className="relative my-8 md:my-10 flex items-center justify-center">
            <div className="w-full border-t border-dashed border-border" aria-hidden="true" />
            <div className="absolute z-10 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-5 py-2 text-xs md:text-sm font-medium shadow-card">
              <ScissorsRibbonIcon className="size-5 shrink-0" />
              <span>
                Cut the <span className="font-semibold text-danger">Red Tape</span>.{" "}
                <span className="font-bold text-primary">Launch 3x Faster.</span>
              </span>
            </div>
          </div>

          {/* 4. Bottom Track: Our Swift Process (3 Rapid Steps) */}
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-8">
            <div className="shrink-0 lg:w-48 xl:w-56 lg:pt-3">
              <h3 className="font-display text-lg md:text-xl font-bold text-brand-primary">
                Our Swift Process
              </h3>
              <p className="mt-0.5 text-xs text-secondary">(3 Rapid Steps)</p>
            </div>

            <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3 lg:gap-4">
              {/* Card 1: Discover & Scope */}
              <div className="rounded-2xl border border-border bg-surface p-6 md:p-7 shadow-card transition duration-200 hover:border-brand-soft hover:shadow-card-hover flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="grid size-14 place-items-center rounded-xl border border-brand-primary/20 bg-brand-primary/10 text-brand-primary">
                      <DiscoverScopeIcon className="size-8" />
                    </div>
                    <span className="rounded-full bg-brand-primary/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-primary">
                      Step 01
                    </span>
                  </div>
                  <h4 className="mt-5 font-display text-xl font-bold text-primary">
                    Discover &amp; Scope
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-secondary">
                    One fast call to align on goals and map the path.
                  </p>
                </div>
              </div>

              {/* Chevron Separator 1 */}
              <div className="flex justify-center items-center py-1 lg:py-0" aria-hidden="true">
                <ChevronRight className="hidden lg:block size-5 text-brand-primary/40 shrink-0" />
                <ChevronDown className="lg:hidden size-5 text-brand-primary/40" />
              </div>

              {/* Card 2: Design & Build */}
              <div className="rounded-2xl border border-border bg-surface p-6 md:p-7 shadow-card transition duration-200 hover:border-brand-soft hover:shadow-card-hover flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="grid size-14 place-items-center rounded-xl border border-brand-primary/20 bg-brand-primary/10 text-brand-primary">
                      <DesignBuildIcon className="size-8" />
                    </div>
                    <span className="rounded-full bg-brand-primary/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-primary">
                      Step 02
                    </span>
                  </div>
                  <h4 className="mt-5 font-display text-xl font-bold text-primary">
                    Design &amp; Build
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-secondary">
                    We prototype and develop rapidly in continuous sprints.
                  </p>
                </div>
              </div>

              {/* Chevron Separator 2 */}
              <div className="flex justify-center items-center py-1 lg:py-0" aria-hidden="true">
                <ChevronRight className="hidden lg:block size-5 text-brand-primary/40 shrink-0" />
                <ChevronDown className="lg:hidden size-5 text-brand-primary/40" />
              </div>

              {/* Card 3: Deploy & Support */}
              <div className="rounded-2xl border border-border bg-surface p-6 md:p-7 shadow-card transition duration-200 hover:border-brand-soft hover:shadow-card-hover flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="grid size-14 place-items-center rounded-xl border border-brand-primary/20 bg-brand-primary/10 text-brand-primary">
                      <DeploySupportIcon className="size-8" />
                    </div>
                    <span className="rounded-full bg-brand-primary/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-primary">
                      Step 03
                    </span>
                  </div>
                  <h4 className="mt-5 font-display text-xl font-bold text-primary">
                    Deploy &amp; Support
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-secondary">
                    Fast launch with instant, ongoing optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
