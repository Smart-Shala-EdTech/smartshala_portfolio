import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import nodemailer from "nodemailer";

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

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Inquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone Number: ${phone || "N/A"}
Company Name: ${company || "N/A"}
Project Type: ${projectType || "N/A"}
Budget Range: ${budget || "N/A"}

Message:
${message}
      `,
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone || "N/A"}</p>
        <p><strong>Company Name:</strong> ${company || "N/A"}</p>
        <p><strong>Project Type:</strong> ${projectType || "N/A"}</p>
        <p><strong>Budget Range:</strong> ${budget || "N/A"}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      ok: true,
      message: "Thanks. We typically reply within 24 hours.",
    });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
