import { SectionHeader } from "@/components/common/SectionHeader";
import { processSteps } from "@/data/marketing";

export function ProcessSection() {
  return (
    <section id="process" className="section-band surface scroll-mt-24">
      <div className="container-grid">
        <SectionHeader
          eyebrow="How work moves"
          title="A clear path from first call to supported launch"
          description="The process is intentionally visible, because great client work needs fewer surprises and better checkpoints."
        />
        <div className="hidden overflow-x-auto pb-3 md:block">
          <div className="relative grid min-w-[980px] grid-cols-8 gap-4">
            <div className="absolute left-12 right-12 top-8 border-t border-dashed border-border" />
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative">
                  <div className="grid size-16 place-items-center rounded-full bg-brand-primary text-surface shadow-card">
                    <Icon size={28} aria-hidden="true" />
                  </div>
                  <p className="mt-4 font-display text-sm font-semibold text-secondary">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-1 text-[15px] font-semibold">{step.title}</h3>
                  <p className="mt-2 text-[13px] leading-5 text-secondary">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative grid gap-8 border-l-2 border-border md:hidden">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative pl-8">
                <div className="absolute -left-[21px] top-0 grid size-10 place-items-center rounded-full bg-brand-primary text-surface">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <p className="font-display text-sm font-semibold text-secondary">Step {index + 1}</p>
                <h3 className="mt-1 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-secondary">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
