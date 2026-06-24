import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/common/Button";
import { trustBadges } from "@/data/marketing";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[url('/images/hero-circuit-cloud.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-bg/72" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-bg" aria-hidden="true" />
      <div className="container-grid relative flex min-h-[calc(100vh-76px)] items-center py-24">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold text-brand-secondary">
            Software, AI, mobile, and cloud under one thoughtful roof
          </p>
          <h1 className="max-w-4xl font-display text-[length:var(--text-display)] font-bold leading-[1.08]">
            Build Intelligent Software That Grows Your Business
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-secondary">
            SmartShala helps startups and SMBs turn complex operations into calm, scalable products with custom software, practical AI, and dependable delivery.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/?type=consultation#contact">
              Book Free Consultation
              <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#services" variant="secondary">
              Explore Services
            </ButtonLink>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {trustBadges.map((badge) => (
              <span key={badge} className="inline-flex items-center gap-2 text-sm font-medium text-secondary">
                <CheckCircle2 size={20} className="text-success" aria-hidden="true" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
