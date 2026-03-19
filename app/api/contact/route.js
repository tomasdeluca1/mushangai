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
        { error: "Completá nombre, email y paquete de interés." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { error: "Ingresá un email válido." },
        { status: 400 },
      );
    }

    if (!resend) {
      return Response.json(
        {
          error:
            "Falta configurar RESEND_API_KEY para habilitar el formulario.",
        },
        { status: 500 },
      );
    }

    await resend.emails.send({
      from: `muShanghai 2026 <${contactFromEmail}>`,
      to: [contactToEmail],
      replyTo: email,
      subject: `Nueva consulta sponsor: ${name}`,
      text: [
        `Nombre y empresa: ${name}`,
        `Email: ${email}`,
        `Paquete de interés: ${packageInterest}`,
        "",
        "Mensaje:",
        message || "Sin mensaje adicional.",
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>Nueva consulta desde la landing de muShanghai 2026</h2>
          <p><strong>Nombre y empresa:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Paquete de interés:</strong> ${escapeHtml(packageInterest)}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${escapeHtml(message || "Sin mensaje adicional.").replace(/\n/g, "<br />")}</p>
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
            : "No se pudo procesar el formulario.",
      },
      { status: 500 },
    );
  }
}
