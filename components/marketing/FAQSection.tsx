"use client";

import { Plus, X } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { faqs } from "@/data/marketing";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="section-band surface scroll-mt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container-grid">
        <SectionHeader
          eyebrow="Questions"
          title="The details people usually ask before a first call"
          description="Transparent answers help visitors decide whether the conversation is worth their time."
        />
        <div className="mx-auto max-w-3xl">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="border-t border-dashed border-border last:border-b">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg text-brand-primary">
                    {isOpen ? <X size={18} aria-hidden="true" /> : <Plus size={18} aria-hidden="true" />}
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-200 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm leading-6 text-secondary">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
