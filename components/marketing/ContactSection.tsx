import { Github, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/common/Button";
import { MarketingCard } from "@/components/common/MarketingCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ContactForm } from "@/components/forms/ContactForm";

const contactLinks = [
  { icon: Mail, label: "Email", value: "hello@smartshala.com", href: "mailto:hello@smartshala.com" },
  { icon: MessageCircle, label: "WhatsApp", value: "Start a chat", href: "https://wa.me/910000000000" },
  { icon: Linkedin, label: "LinkedIn", value: "SmartShala", href: "https://www.linkedin.com/company/smartshala" },
  { icon: Github, label: "GitHub", value: "smartshala", href: "https://github.com/smartshala" },
  { icon: MapPin, label: "Location", value: "India", href: "https://maps.google.com/?q=India" },
];

export function ContactSection() {
  return (
    <section id="contact" className="section-band scroll-mt-24">
      <div className="container-grid">
        <SectionHeader
          eyebrow="Start here"
          title="Let's Build Something Amazing Together"
          description="Share the shape of the product, workflow, or AI idea. We will respond with practical next steps within 24 hours."
        />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <MarketingCard>
            <ContactForm />
          </MarketingCard>
          <MarketingCard>
            <h3 className="font-display text-2xl font-semibold">Prefer a direct route?</h3>
            <p className="mt-3 text-sm leading-6 text-secondary">
              Use any channel below, or book a consultation when you already have a clear problem to discuss.
            </p>
            <div className="mt-6 grid gap-4">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 rounded-lg border border-dashed border-border p-3 transition hover:border-brand-soft hover:bg-brand-primary/5"
                  >
                    <span className="grid size-10 place-items-center rounded-lg bg-brand-primary/10 text-brand-primary">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold text-secondary">{item.label}</span>
                      <span className="block text-sm font-semibold">{item.value}</span>
                    </span>
                  </a>
                );
              })}
            </div>
            <div className="mt-6 rounded-lg border border-brand-soft bg-brand-primary/5 p-4 text-sm leading-6 text-secondary">
              We typically reply within 24 hours with useful questions, not a generic sales script.
            </div>
            <ButtonLink href="https://calendly.com/smartshala/consultation" variant="secondary" className="mt-5 w-full">
              Book Consultation
            </ButtonLink>
          </MarketingCard>
        </div>
      </div>
    </section>
  );
}
