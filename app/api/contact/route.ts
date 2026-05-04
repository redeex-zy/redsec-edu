import { NextResponse } from "next/server";
import { Resend } from "resend";

import {
  type InquiryPayload,
  validateInquiryPayload,
} from "@/lib/contact-inquiry";

export const runtime = "nodejs";

const contactRecipient = "nu727027@gmail.com";
const successMessage =
  "Thank you. Your inquiry was sent successfully. RedSec Edu will review it and reply soon.";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatDate(timestamp: Date) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "UTC",
  });

  return formatter.format(timestamp);
}

function buildPlainTextEmail(data: InquiryPayload, submittedAt: Date) {
  return [
    "New RedSec Edu inquiry",
    "",
    `Name: ${data.name}`,
    `Organization: ${data.organization}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "Not provided"}`,
    `Service interested in: ${data.service}`,
    `Submission date/time: ${formatDate(submittedAt)}`,
    "",
    "Message:",
    data.message,
  ].join("\n");
}

function buildHtmlEmail(data: InquiryPayload, submittedAt: Date) {
  const safe = {
    name: escapeHtml(data.name),
    organization: escapeHtml(data.organization),
    email: escapeHtml(data.email),
    phone: escapeHtml(data.phone || "Not provided"),
    service: escapeHtml(data.service),
    message: escapeHtml(data.message).replaceAll("\n", "<br />"),
    submittedAt: escapeHtml(formatDate(submittedAt)),
  };

  return `
    <div style="font-family: Arial, sans-serif; background: #020617; color: #e2e8f0; padding: 24px;">
      <div style="max-width: 680px; margin: 0 auto; border: 1px solid rgba(148, 163, 184, 0.2); border-radius: 20px; background: linear-gradient(180deg, rgba(12, 18, 32, 0.98), rgba(4, 7, 15, 0.96)); padding: 32px;">
        <p style="margin: 0 0 12px; letter-spacing: 0.28em; font-size: 12px; text-transform: uppercase; color: #67e8f9;">New inquiry</p>
        <h1 style="margin: 0 0 24px; font-size: 30px; line-height: 1.15; color: #f8fafc;">RedSec Edu contact form submission</h1>
        <table style="width: 100%; border-collapse: collapse;">
          <tbody>
            <tr>
              <td style="padding: 10px 0; color: #94a3b8; width: 220px;">Name</td>
              <td style="padding: 10px 0; color: #f8fafc;">${safe.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #94a3b8;">Organization</td>
              <td style="padding: 10px 0; color: #f8fafc;">${safe.organization}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #94a3b8;">Email</td>
              <td style="padding: 10px 0; color: #f8fafc;">${safe.email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #94a3b8;">Phone</td>
              <td style="padding: 10px 0; color: #f8fafc;">${safe.phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #94a3b8;">Service interested in</td>
              <td style="padding: 10px 0; color: #f8fafc;">${safe.service}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #94a3b8;">Submission date/time</td>
              <td style="padding: 10px 0; color: #f8fafc;">${safe.submittedAt}</td>
            </tr>
          </tbody>
        </table>
        <div style="margin-top: 28px; border: 1px solid rgba(148, 163, 184, 0.18); border-radius: 16px; background: rgba(15, 23, 42, 0.76); padding: 20px;">
          <p style="margin: 0 0 12px; letter-spacing: 0.24em; font-size: 12px; text-transform: uppercase; color: #67e8f9;">Message</p>
          <p style="margin: 0; font-size: 16px; line-height: 1.8; color: #f8fafc;">${safe.message}</p>
        </div>
      </div>
    </div>
  `;
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "The form submission could not be read." },
      { status: 400 },
    );
  }

  const validation = validateInquiryPayload(body);

  if (!validation.success) {
    if (validation.isSpam) {
      return NextResponse.json({ message: successMessage });
    }

    return NextResponse.json(
      {
        message: validation.message,
        fieldErrors: validation.fieldErrors,
      },
      { status: 400 },
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFromEmail = process.env.RESEND_FROM_EMAIL;

  if (!resendApiKey || !resendFromEmail) {
    console.error("Resend is not configured. Missing RESEND_API_KEY or RESEND_FROM_EMAIL.");

    return NextResponse.json(
      {
        message:
          "The inquiry service is not configured yet. Please try again later.",
      },
      { status: 500 },
    );
  }

  const submittedAt = new Date();
  const resend = new Resend(resendApiKey);

  try {
    const { error } = await resend.emails.send({
      from: resendFromEmail,
      to: contactRecipient,
      replyTo: validation.data.email,
      subject: `New RedSec Edu inquiry: ${validation.data.service}`,
      text: buildPlainTextEmail(validation.data, submittedAt),
      html: buildHtmlEmail(validation.data, submittedAt),
    });

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({ message: successMessage });
  } catch (error) {
    console.error("Failed to send RedSec Edu inquiry", error);

    return NextResponse.json(
      {
        message:
          "The inquiry could not be sent right now. Please try again in a moment.",
      },
      { status: 500 },
    );
  }
}
