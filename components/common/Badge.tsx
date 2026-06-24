import { cn } from "@/lib/utils";

const colorClasses = {
  tech: "border-tech/30 bg-tech/10 text-tech",
  culture: "border-culture/30 bg-culture/10 text-culture",
  sports: "border-sports/30 bg-sports/10 text-sports",
  workshop: "border-workshop/30 bg-workshop/10 text-workshop",
  gaming: "border-gaming/30 bg-gaming/10 text-gaming",
  brand: "border-brand-primary/30 bg-brand-primary/10 text-brand-primary",
};

export type BadgeColor = keyof typeof colorClasses;

export function Badge({
  children,
  color = "brand",
  className,
}: {
  children: React.ReactNode;
  color?: BadgeColor;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold leading-none",
        colorClasses[color],
        className,
      )}
    >
      {children}
    </span>
  );
}
