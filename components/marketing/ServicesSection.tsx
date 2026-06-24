import { MarketingCard } from "@/components/common/MarketingCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { services } from "@/data/marketing";

export function ServicesSection() {
  return (
    <section id="services" className="section-band surface scroll-mt-24">
      <div className="container-grid">
        <SectionHeader
          eyebrow="What we build"
          title="Product teams for the moments when off-the-shelf stops fitting"
          description="Every service card is built to be scannable: what we make, how it helps, and the business outcome it should create."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <MarketingCard key={service.title} className="min-h-[280px]">
                <Icon
                  size={32}
                  className={index === 3 ? "text-brand-secondary" : "text-brand-primary"}
                  aria-hidden="true"
                />
                <h3 className="mt-5 font-display text-[length:var(--text-h3)] font-semibold">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-secondary">{service.description}</p>
                <ul className="mt-5 grid gap-2 text-sm text-secondary">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-2">
                      <span className="mt-2 size-1.5 rounded-full bg-brand-secondary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </MarketingCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
