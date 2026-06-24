import { cn } from "@/lib/utils";

export function MarketingCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      data-reveal
      className={cn(
        "rounded-xl border border-border bg-surface p-6 shadow-card transition duration-150 ease-out hover:-translate-y-0.5 hover:border-brand-soft hover:shadow-card-hover",
        className,
      )}
    >
      {children}
    </article>
  );
}
