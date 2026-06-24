import { MarketingCard } from "@/components/common/MarketingCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { whyChoose } from "@/data/marketing";

export function WhyChooseSection() {
  return (
    <section className="section-band">
      <div className="container-grid">
        <SectionHeader
          eyebrow="Why SmartShala"
          title="Senior execution with the warmth of a close working team"
          description="The site should make trust visible early: clear process, robust engineering, useful AI, and support after launch."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item) => {
            const Icon = item.icon;
            return (
              <MarketingCard key={item.title} className="border-l-[3px] border-l-brand-primary">
                <Icon size={28} className="text-brand-primary" aria-hidden="true" />
                <h3 className="mt-5 font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-secondary">{item.description}</p>
              </MarketingCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
