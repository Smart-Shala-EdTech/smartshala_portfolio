import { z } from "zod";

export const PROJECT_TYPES = [
  "Dealer / distributor app",
  "Order booking or sales app",
  "Tally or ERP integration",
  "Mobile App",
  "Web App",
  "AI or automation",
  "Other",
] as const;

export const BUDGET_RANGES = [
  "Under ₹1L",
  "₹1–3L",
  "₹3–5L",
  "₹5–15L",
  "₹15L+",
  "Not sure yet",
] as const;

export function normalizeIndianPhone(input: string): string {
  if (!input) return "";
  const cleaned = input.trim().replace(/[\s\-()]/g, "");
  const match = cleaned.match(/^(?:\+?91|0)?([6-9]\d{9})$/);
  if (match) {
    return `+91${match[1]}`;
  }
  return cleaned;
}

export function isValidIndianPhone(input: string): boolean {
  if (!input) return false;
  const cleaned = input.trim().replace(/[\s\-()]/g, "");
  return /^(?:\+?91|0)?[6-9]\d{9}$/.test(cleaned);
}

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name (at least 2 characters)."),
  phone: z
    .string()
    .trim()
    .refine((val) => isValidIndianPhone(val), {
      message: "Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).",
    }),
  projectType: z.enum(PROJECT_TYPES, {
    errorMap: () => ({ message: "Please select a project type." }),
  }),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address."),
  company: z
    .string()
    .trim()
    .min(2, "Please enter your company or dealership name."),
  budget: z
    .string()
    .trim()
    .optional()
    .refine(
      (val) => !val || (BUDGET_RANGES as readonly string[]).includes(val),
      {
        message: "Please select a valid budget range.",
      }
    ),
  message: z
    .string()
    .trim()
    .optional()
    .refine((val) => !val || val.length >= 10, {
      message: "Message must be at least 10 characters if provided.",
    }),
  website: z.string().optional(), // Honeypot field
  pageUrl: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
