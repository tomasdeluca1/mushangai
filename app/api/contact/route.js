import { Resend } from "resend";
import { defaultLanguage, getTranslation } from "../../../lib/translations";

const resendApiKey = process.env.RESEND_API_KEY;
const contactToEmail =
  process.env.CONTACT_TO_EMAIL || "huevsite.studio@gmail.com";
const contactFromEmail =
  process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

const resend = resendApiKey ? new Resend(resendApiKey) : null;

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request) {
  try {
    const body = await request.json();
    const language = body?.language || defaultLanguage;
    const copy = getTranslation(language).form;
    const name = body?.name?.trim();
    const email = body?.email?.trim();
    const packageInterest = body?.packageInterest?.trim();
    const message = body?.message?.trim();

    if (!name || !email || !packageInterest) {
      return Response.json(
        { error: copy.errors.missingFields },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { error: copy.errors.invalidEmail },
        { status: 400 },
      );
    }

    if (!resend) {
      return Response.json(
        {
          error: copy.errors.missingApiKey,
        },
        { status: 500 },
      );
    }

    await resend.emails.send({
      from: `muShanghai 2026 <${contactFromEmail}>`,
      to: [contactToEmail],
      replyTo: email,
      subject: `${copy.emailCopy.subjectPrefix}: ${name}`,
      text: [
        `${copy.emailCopy.nameLabel}: ${name}`,
        `Email: ${email}`,
        `${copy.emailCopy.packageLabel}: ${packageInterest}`,
        "",
        `${copy.emailCopy.messageLabel}:`,
        message || copy.emailCopy.noMessage,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>${escapeHtml(copy.emailCopy.title)}</h2>
          <p><strong>${escapeHtml(copy.emailCopy.nameLabel)}:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>${escapeHtml(copy.emailCopy.packageLabel)}:</strong> ${escapeHtml(packageInterest)}</p>
          <p><strong>${escapeHtml(copy.emailCopy.messageLabel)}:</strong></p>
          <p>${escapeHtml(message || copy.emailCopy.noMessage).replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json(
      {
        error:
          error instanceof Error
            ? error.message
            : copy.errors.processing,
      },
      { status: 500 },
    );
  }
}
