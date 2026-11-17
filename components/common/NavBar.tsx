"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/common/Button";
import { navLinks } from "@/data/marketing";
import { cn } from "@/lib/utils";

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition duration-200 ease-out backdrop-blur-md",
        scrolled
          ? "border-border bg-surface/90 shadow-card"
          : "border-surface/20 bg-primary/24",
      )}
    >
      <nav className="container-grid flex min-h-[76px] items-center justify-between gap-6">
        <a
          href="#main"
          className={cn(
            "flex items-center gap-3 font-display text-2xl font-bold transition",
            scrolled ? "text-primary" : "text-surface",
          )}
        >
          <span className="grid size-10 place-items-center rounded-lg bg-brand-primary text-surface">
            S
          </span>
          SmartShala
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-[15px] font-medium transition",
                scrolled
                  ? "text-primary/75 hover:text-brand-primary"
                  : "text-surface hover:text-surface",
              )}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <ButtonLink href="#contact">Book Free Consultation</ButtonLink>
        </div>
        <button
          type="button"
          className={cn(
            "grid size-11 place-items-center rounded-lg border transition md:hidden",
            scrolled
              ? "border-border bg-surface text-brand-primary"
              : "border-surface/30 bg-surface/10 text-surface",
          )}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-border bg-surface shadow-xl md:hidden">
          <div className="container-grid flex flex-col gap-3 py-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 font-medium text-primary hover:bg-brand-primary/5 hover:text-brand-primary"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <ButtonLink href="#contact" onClick={() => setOpen(false)}>
              Book Free Consultation
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
