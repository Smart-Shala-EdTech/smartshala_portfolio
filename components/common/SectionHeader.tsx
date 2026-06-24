import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div data-reveal className={cn("mx-auto mb-12 max-w-2xl text-center", className)}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold text-brand-secondary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-[length:var(--text-h2)] font-semibold leading-tight">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-secondary">{description}</p>
    </div>
  );
}
