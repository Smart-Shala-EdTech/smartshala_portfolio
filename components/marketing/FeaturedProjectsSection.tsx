"use client";

import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Factory,
  FileText,
  Gauge,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { MarketingCard } from "@/components/common/MarketingCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { featuredProject } from "@/data/marketing";

function DetailBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h3 className="font-display text-2xl font-semibold">{title}</h3>
      <div className="mt-3 text-sm leading-6 text-secondary">{children}</div>
    </section>
  );
}

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
        <SectionHeader
          eyebrow="Featured work"
          title="Featured Projects"
          description="Real-world solutions built for businesses, organizations, and growing enterprises."
        />
        <div className="mx-auto max-w-6xl reveal-up">
          <MarketingCard className="group overflow-hidden p-0">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[360px] overflow-hidden border-b border-dashed border-border bg-surface p-6 text-primary lg:border-b-0 lg:border-r">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(168,197,160,0.34),transparent_30%),linear-gradient(135deg,rgba(45,122,79,0.14),rgba(224,123,57,0.08))]" />
                <div className="absolute right-6 top-6 size-28 rounded-full border border-dashed border-brand-soft/70" />
                <div className="relative flex h-full flex-col justify-between">
                  <Badge color="culture" className="w-fit bg-surface/95">
                    {featuredProject.category}
                  </Badge>
                  <div>
                    <p className="text-sm font-semibold text-brand-primary">Dealer operations, digitized</p>
                    <h3 className="mt-3 max-w-sm font-display text-4xl font-bold leading-tight md:text-5xl">
                      {featuredProject.name}
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-border bg-surface/90 p-3 shadow-card">
                      <p className="text-xs font-semibold text-secondary">Client</p>
                      <p className="mt-1 text-sm font-semibold">{featuredProject.client}</p>
                    </div>
                    <div className="rounded-lg border border-border bg-surface/90 p-3 shadow-card">
                      <p className="text-xs font-semibold text-secondary">Industry</p>
                      <p className="mt-1 text-sm font-semibold">{featuredProject.industry}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8 lg:p-10">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-brand-primary/20 bg-brand-primary/10 px-3 py-1.5 text-xs font-semibold text-brand-primary">
                    Secure dealer access
                  </span>
                  <span className="rounded-full border border-brand-secondary/25 bg-brand-secondary/10 px-3 py-1.5 text-xs font-semibold text-brand-secondary">
                    Business record visibility
                  </span>
                </div>
                <p className="mt-6 text-base leading-7 text-secondary">{featuredProject.description}</p>
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
                        <p className="mt-3 text-sm font-semibold leading-5">{item.label}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-4">
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

      {open ? (
        <div
          className="fixed inset-0 z-[100] bg-primary/45 p-3 backdrop-blur-sm md:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-overview-title"
        >
          <div className="mx-auto flex h-full max-w-6xl items-center">
            <div className="max-h-[92vh] w-full overflow-y-auto rounded-xl border border-border bg-surface shadow-card-hover reveal-up">
              <div className="relative min-h-44 overflow-hidden border-b border-dashed border-border bg-surface">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(168,197,160,0.42),transparent_28%),linear-gradient(135deg,rgba(45,122,79,0.16),rgba(224,123,57,0.08))]" />
                <div className="absolute right-8 top-8 size-24 rounded-full border border-dashed border-brand-soft" />
                <div className="relative flex min-h-44 items-end p-5 md:p-8">
                  <div className="max-w-2xl text-primary">
                    <p className="text-sm font-semibold text-brand-primary">{featuredProject.category}</p>
                    <h2 id="project-overview-title" className="mt-2 font-display text-4xl font-semibold">
                      Project Overview
                    </h2>
                  </div>
                </div>
              </div>
              <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-dashed border-border bg-surface/95 px-5 py-4 backdrop-blur">
                <div>
                  <p className="text-sm font-semibold text-brand-secondary">{featuredProject.name}</p>
                  <p className="text-sm text-secondary">FMCG dealer management platform</p>
                </div>
                <button
                  type="button"
                  className="grid size-10 place-items-center rounded-lg border border-border text-brand-primary transition hover:bg-brand-primary/5"
                  aria-label="Close project details"
                  onClick={() => setOpen(false)}
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>
              <div className="grid gap-8 p-5 md:p-8">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-dashed border-border bg-bg p-5">
                    <Building2 size={24} className="text-brand-primary" aria-hidden="true" />
                    <p className="mt-4 text-sm font-semibold text-secondary">Client</p>
                    <p className="mt-1 text-xl font-semibold">{featuredProject.client}</p>
                  </div>
                  <div className="rounded-lg border border-dashed border-border bg-bg p-5">
                    <Factory size={24} className="text-brand-primary" aria-hidden="true" />
                    <p className="mt-4 text-sm font-semibold text-secondary">Industry</p>
                    <p className="mt-1 text-xl font-semibold">{featuredProject.industry}</p>
                  </div>
                </div>

                <DetailBlock title="Overview">
                  <p>{featuredProject.overview}</p>
                </DetailBlock>
                <DetailBlock title="Business Challenge">
                  <p>{featuredProject.challenge}</p>
                </DetailBlock>
                <DetailBlock title="Solution Delivered">
                  <p>{featuredProject.solution}</p>
                </DetailBlock>

                <section>
                  <h3 className="font-display text-2xl font-semibold">Key Features</h3>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {featuredProject.keyFeatures.map((feature) => {
                      const Icon = feature.icon;
                      return (
                        <div key={feature.label} className="rounded-lg border border-border bg-bg p-4">
                          <Icon size={22} className="text-brand-primary" aria-hidden="true" />
                          <p className="mt-3 text-sm font-semibold">{feature.label}</p>
                        </div>
                      );
                    })}
                  </div>
                </section>

                <section>
                  <h3 className="font-display text-2xl font-semibold">Impact</h3>
                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    {featuredProject.impact.map((item) => (
                      <div key={item} className="flex gap-3 rounded-lg border border-dashed border-border bg-bg p-4">
                        <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-success" aria-hidden="true" />
                        <p className="text-sm leading-6 text-secondary">{item}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="font-display text-2xl font-semibold">Services Provided</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {featuredProject.servicesProvided.map((service) => (
                      <span
                        key={service}
                        className="inline-flex items-center gap-1 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3 py-1.5 text-sm font-semibold text-brand-primary"
                      >
                        <ChevronRight size={15} aria-hidden="true" />
                        {service}
                      </span>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
