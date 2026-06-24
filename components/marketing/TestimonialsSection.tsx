import { MarketingCard } from "@/components/common/MarketingCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { testimonials } from "@/data/marketing";

export function TestimonialsSection() {
  return (
    <section className="section-band">
      <div className="container-grid">
        <SectionHeader
          eyebrow="Client notes"
          title="Calm delivery is the part clients remember"
          description="The voice stays warm and direct, with proof that SmartShala can communicate as well as it can build."
        />
        <div className="-mx-5 flex snap-x gap-5 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
          {testimonials.map((testimonial) => (
            <MarketingCard key={testimonial.name} className="min-w-[82vw] snap-center md:min-w-0">
              <p className="text-base leading-7 text-primary">“{testimonial.quote}”</p>
              <div className="mt-6 border-t border-dashed border-border pt-5">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="mt-1 text-sm text-secondary">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </MarketingCard>
          ))}
        </div>
      </div>
    </section>
  );
}
