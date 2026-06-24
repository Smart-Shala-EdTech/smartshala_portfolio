import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const styles = {
  primary:
    "bg-brand-primary text-surface hover:bg-brand-primary-hover border border-brand-primary",
  secondary:
    "border border-brand-primary bg-transparent text-brand-primary hover:bg-brand-primary/10",
  ghost:
    "border border-transparent bg-transparent text-brand-primary hover:bg-brand-primary/5 hover:underline",
};

type ButtonVariant = keyof typeof styles;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-6 py-3 text-[15px] font-semibold transition duration-150 ease-out active:scale-[0.98]",
        styles[variant],
        className,
      )}
      {...props}
    />
  );
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
};

export function ButtonLink({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-6 py-3 text-[15px] font-semibold transition duration-150 ease-out active:scale-[0.98]",
        styles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
