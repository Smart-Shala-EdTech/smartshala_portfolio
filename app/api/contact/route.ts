import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const { name, email, phone, company, projectType, budget, message } = parsed.data;

  // Simulate contact form submission without nodemailer
  console.log("Contact form submission received:", {
    name, email, phone, company, projectType, budget, message
  });

  return NextResponse.json({
    ok: true,
    message: "Thanks. We typically reply within 24 hours.",
  });
}
