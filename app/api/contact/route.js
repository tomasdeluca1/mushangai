import { Resend } from "resend";

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
    const name = body?.name?.trim();
    const email = body?.email?.trim();
    const packageInterest = body?.packageInterest?.trim();
    const message = body?.message?.trim();

    if (!name || !email || !packageInterest) {
      return Response.json(
        { error: "Please fill in your name, email, and package of interest." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!resend) {
      return Response.json(
        {
          error: "RESEND_API_KEY must be configured to enable the contact form.",
        },
        { status: 500 },
      );
    }

    await resend.emails.send({
      from: `muShanghai 2026 <${contactFromEmail}>`,
      to: [contactToEmail],
      replyTo: email,
      subject: `New sponsorship inquiry: ${name}`,
      text: [
        `Name and company: ${name}`,
        `Email: ${email}`,
        `Package of interest: ${packageInterest}`,
        "",
        "Message:",
        message || "No additional message.",
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>New inquiry from the muShanghai 2026 landing page</h2>
          <p><strong>Name and company:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Package of interest:</strong> ${escapeHtml(packageInterest)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message || "No additional message.").replace(/\n/g, "<br />")}</p>
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
            : "The form could not be processed.",
      },
      { status: 500 },
    );
  }
}
