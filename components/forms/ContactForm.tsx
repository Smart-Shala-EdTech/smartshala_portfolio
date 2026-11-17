"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/common/Button";
import { trackEvent } from "@/lib/analytics";
import {
  BUDGET_RANGES,
  contactSchema,
  normalizeIndianPhone,
  PROJECT_TYPES,
  type ContactFormValues,
} from "@/lib/contact-schema";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1 text-sm text-danger">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: undefined,
      budget: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitState("idle");
    setErrorMessage("");

    const payload = {
      ...values,
      phone: normalizeIndianPhone(values.phone),
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.ok) {
        setSubmitState("error");
        setErrorMessage(data?.error || "Submission failed");
        return;
      }

      setSubmitState("success");
      trackEvent("form_submit_success", {
        projectType: values.projectType,
        budget: values.budget,
      });
      reset();
    } catch {
      setSubmitState("error");
      setErrorMessage("Network error");
    }
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Honeypot field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium" htmlFor="name">
            Name <span className="text-danger">*</span>
          </label>
          <input
            id="name"
            className="field mt-2"
            autoComplete="name"
            placeholder="Your name"
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          <FieldError id="name-error" message={errors.name?.message} />
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="phone">
            Phone / WhatsApp <span className="text-danger">*</span>
          </label>
          <input
            id="phone"
            className="field mt-2"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="10-digit mobile (e.g. 9876543210)"
            aria-required="true"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          <FieldError id="phone-error" message={errors.phone?.message} />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium" htmlFor="email">
            Email <span className="text-danger">*</span>
          </label>
          <input
            id="email"
            className="field mt-2"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@company.com"
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          <FieldError id="email-error" message={errors.email?.message} />
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="company">
            Company Name <span className="text-danger">*</span>
          </label>
          <input
            id="company"
            className="field mt-2"
            autoComplete="organization"
            placeholder="Your firm or dealership"
            aria-required="true"
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "company-error" : undefined}
            {...register("company")}
          />
          <FieldError id="company-error" message={errors.company?.message} />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium" htmlFor="projectType">
            Project Type <span className="text-danger">*</span>
          </label>
          <select
            id="projectType"
            className="field mt-2"
            aria-required="true"
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={errors.projectType ? "project-type-error" : undefined}
            {...register("projectType")}
            defaultValue=""
          >
            <option value="" disabled>
              Select project type
            </option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <FieldError id="project-type-error" message={errors.projectType?.message} />
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="budget">
            Budget Range <span className="text-xs text-secondary">(optional)</span>
          </label>
          <select
            id="budget"
            className="field mt-2"
            aria-invalid={Boolean(errors.budget)}
            aria-describedby={errors.budget ? "budget-error" : undefined}
            {...register("budget")}
            defaultValue=""
          >
            <option value="">Select budget range (optional)</option>
            {BUDGET_RANGES.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
          <FieldError id="budget-error" message={errors.budget?.message} />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium" htmlFor="message">
          Message <span className="text-xs text-secondary">(optional, min 10 characters if provided)</span>
        </label>
        <textarea
          id="message"
          className="field mt-2 min-h-32 resize-y"
          placeholder="Tell us what you are looking to build or integrate..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        <FieldError id="message-error" message={errors.message?.message} />
      </div>

      <div className="grid gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <Button type="submit" disabled={isSubmitting}>
            <Send size={18} aria-hidden="true" />
            {isSubmitting ? "Sending..." : "Send Inquiry"}
          </Button>
        </div>

        {submitState === "success" && (
          <div className="rounded-lg border border-brand-soft bg-brand-primary/10 p-4 text-sm text-text-primary">
            <p className="font-semibold text-brand-primary">
              Thank you. We received your details and typically reply within 24 hours.
            </p>
            <p className="mt-2 text-secondary">
              Need a faster response? You can also message us directly:
            </p>
            <a
              href="https://wa.me/917408859799?text=Hi%20SmartShala%2C%20I%20just%20submitted%20an%20inquiry%20on%20your%20website"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "contact_form_success" })}
              className="mt-2 inline-flex items-center gap-2 font-medium text-brand-primary hover:underline"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Continue on WhatsApp &rarr;
            </a>
          </div>
        )}

        {submitState === "error" && (
          <div className="rounded-lg border border-danger/30 bg-danger/10 p-4 text-sm text-text-primary">
            <p className="font-semibold text-danger">
              Unable to submit your inquiry right now.
            </p>
            <p className="mt-1 text-secondary">
              Please message us directly on{" "}
              <a
                href="https://wa.me/917408859799?text=Hi%20SmartShala%2C%20I%20want%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { location: "contact_form_error" })}
                className="font-semibold text-brand-primary underline"
              >
                WhatsApp
              </a>{" "}
              or email{" "}
              <a
                href="mailto:info@smartshala.net"
                className="font-semibold text-brand-primary underline"
              >
                info@smartshala.net
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
