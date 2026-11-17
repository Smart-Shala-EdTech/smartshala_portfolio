import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema, normalizeIndianPhone } from "@/lib/contact-schema";

// Simple in-memory per-IP rate limit: 5 requests per 10 minutes
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const ipRateLimits = new Map<string, RateLimitRecord>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = ipRateLimits.get(ip);

  if (record && now > record.resetAt) {
    ipRateLimits.delete(ip);
  }

  const current = ipRateLimits.get(ip);
  if (!current) {
    ipRateLimits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (current.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  current.count += 1;
  return false;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  // IP resolution for rate limiting
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded
    ? forwarded.split(",")[0].trim()
    : (request.headers.get("x-real-ip") ?? "127.0.0.1");

  if (checkRateLimit(ip)) {
    return NextResponse.json(
      {
        ok: false,
        error: "Too many requests. Please try again later or contact us on WhatsApp.",
      },
      { status: 429 }
    );
  }

  const payload = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { name, email, phone, company, projectType, budget, message, website, pageUrl } =
    parsed.data;

  // Silent 200 rejection if honeypot is filled
  if (website && website.trim().length > 0) {
    return NextResponse.json({
      ok: true,
      message: "Thanks. We typically reply within 24 hours.",
    });
  }

  const normalizedPhone = normalizeIndianPhone(phone);
  const timestamp = new Date().toISOString();
  const referrer = pageUrl || request.headers.get("referer") || "Not provided";

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO_EMAIL,
    CONTACT_FROM_EMAIL,
  } = process.env;

  // If env is missing: return HTTP 500 with { ok: false }
  if (
    !SMTP_HOST ||
    !SMTP_PORT ||
    !SMTP_USER ||
    !SMTP_PASS ||
    !CONTACT_TO_EMAIL ||
    !CONTACT_FROM_EMAIL
  ) {
    return NextResponse.json(
      {
        ok: false,
        error: "Contact service is currently unconfigured. Please contact via WhatsApp or email.",
      },
      { status: 500 }
    );
  }

  const port = parseInt(SMTP_PORT, 10);
  const secure = port === 465;

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const textBody = [
    `New Contact Form Submission - SmartShala`,
    `----------------------------------------`,
    `Name: ${name}`,
    `Phone / WhatsApp: ${normalizedPhone}`,
    `Email: ${email || "Not provided"}`,
    `Company: ${company || "Not provided"}`,
    `Project Type: ${projectType}`,
    `Budget: ${budget || "Not provided"}`,
    `Timestamp: ${timestamp}`,
    `Page URL: ${referrer}`,
    `----------------------------------------`,
    `Message:`,
    message || "No message provided",
  ].join("\n");

  const htmlBody = `
    <h2>New Contact Form Submission - SmartShala</h2>
    <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
      <tr><td><strong>Name:</strong></td><td>${escapeHtml(name)}</td></tr>
      <tr><td><strong>Phone / WhatsApp:</strong></td><td>${escapeHtml(normalizedPhone)}</td></tr>
      <tr><td><strong>Email:</strong></td><td>${escapeHtml(email || "Not provided")}</td></tr>
      <tr><td><strong>Company:</strong></td><td>${escapeHtml(company || "Not provided")}</td></tr>
      <tr><td><strong>Project Type:</strong></td><td>${escapeHtml(projectType)}</td></tr>
      <tr><td><strong>Budget:</strong></td><td>${escapeHtml(budget || "Not provided")}</td></tr>
      <tr><td><strong>Timestamp:</strong></td><td>${escapeHtml(timestamp)}</td></tr>
      <tr><td><strong>Page URL:</strong></td><td>${escapeHtml(referrer)}</td></tr>
    </table>
    <h3 style="margin-top:20px;">Message</h3>
    <p style="white-space:pre-wrap;font-family:sans-serif;">${escapeHtml(message || "No message provided")}</p>
  `;

  try {
    await transporter.sendMail({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      replyTo: email || undefined,
      subject: `[SmartShala Lead] ${name} - ${projectType}`,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({
      ok: true,
      message: "Thanks. We typically reply within 24 hours.",
    });
  } catch {
    // Note: Do NOT log personal data (name, phone, email, message) to console
    return NextResponse.json(
      {
        ok: false,
        error: "Failed to deliver message. Please reach out directly on WhatsApp or email.",
      },
      { status: 500 }
    );
  }
}
