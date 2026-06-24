"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/common/Button";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";

const projectTypes = [
  "Mobile App",
  "Web App",
  "AI Solution",
  "Backend/API",
  "Cloud Setup",
  "Other",
];

const budgetRanges = [
  "Under ₹5L",
  "₹5L–15L",
  "₹15L–50L",
  "₹50L+",
  "Let's discuss",
];

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
      projectType: "",
      budget: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitState("idle");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      setSubmitState("error");
      return;
    }

    setSubmitState("success");
    reset();
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="field mt-2"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          <FieldError id="name-error" message={errors.name?.message} />
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="field mt-2"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          <FieldError id="email-error" message={errors.email?.message} />
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium" htmlFor="phone">
            Phone Number
          </label>
          <input id="phone" className="field mt-2" autoComplete="tel" {...register("phone")} />
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="company">
            Company Name
          </label>
          <input id="company" className="field mt-2" autoComplete="organization" {...register("company")} />
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium" htmlFor="projectType">
            Project Type
          </label>
          <select
            id="projectType"
            className="field mt-2"
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={errors.projectType ? "project-type-error" : undefined}
            {...register("projectType")}
          >
            <option value="">Choose one</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <FieldError id="project-type-error" message={errors.projectType?.message} />
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="budget">
            Budget Range
          </label>
          <select
            id="budget"
            className="field mt-2"
            aria-invalid={Boolean(errors.budget)}
            aria-describedby={errors.budget ? "budget-error" : undefined}
            {...register("budget")}
          >
            <option value="">Choose one</option>
            {budgetRanges.map((range) => (
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
          Message
        </label>
        <textarea
          id="message"
          className="field mt-2 min-h-36 resize-y"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        <FieldError id="message-error" message={errors.message?.message} />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={isSubmitting}>
          <Send size={18} aria-hidden="true" />
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </Button>
        {submitState === "success" ? (
          <p className="text-sm font-medium text-success">Thanks. We typically reply within 24 hours.</p>
        ) : null}
        {submitState === "error" ? (
          <p className="text-sm font-medium text-danger">Something went wrong. Please email hello@smartshala.com.</p>
        ) : null}
      </div>
    </form>
  );
}
