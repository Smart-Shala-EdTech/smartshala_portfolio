import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.string().min(1, "Choose a project type."),
  budget: z.string().min(1, "Choose a budget range."),
  message: z.string().min(20, "Tell us a little more about the project."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
