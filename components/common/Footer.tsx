import { navLinks } from "@/data/marketing";

export function Footer() {
  return (
    <footer className="border-t border-dashed border-border bg-surface">
      <div className="container-grid grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <a href="#main" className="flex items-center gap-3 font-display text-2xl font-bold">
            <span className="grid size-10 place-items-center rounded-lg bg-brand-primary text-surface">
              S
            </span>
            SmartShala
          </a>
          <p className="mt-4 max-w-sm text-sm leading-6 text-secondary">
            Warm, practical software and AI delivery for teams that need useful products, not theater.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Explore</h3>
          <div className="mt-4 grid gap-3 text-sm text-secondary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-brand-primary">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Contact</h3>
          <div className="mt-4 grid gap-3 text-sm text-secondary">
            <a href="mailto:info@smartshala.net" className="hover:text-brand-primary">
              info@smartshala.net
            </a>
            <a href="https://www.linkedin.com/company/smartshala" className="hover:text-brand-primary">
              LinkedIn
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Based In</h3>
          <p className="mt-4 text-sm leading-6 text-secondary">
            India, working with startups and SMBs across time zones.
          </p>
        </div>
      </div>
      <div className="container-grid border-t border-dashed border-border py-5 text-sm text-secondary">
        © 2026 SmartShala. All rights reserved.
      </div>
    </footer>
  );
}
