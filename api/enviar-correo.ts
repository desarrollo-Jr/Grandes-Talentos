import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

function escapar(valor: unknown): string {
  return String(valor ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      ok: false,
      mensaje: "Método no permitido",
    });
  }

  try {
    const datos = req.body ?? {};

    if (!datos || typeof datos !== "object") {
      return res.status(400).json({
        ok: false,
        mensaje: "No se recibieron datos",
      });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const emailTo = process.env.EMAIL_TO;

    if (
      !smtpHost ||
      !smtpPort ||
      !smtpUser ||
      !smtpPass ||
      !emailTo
    ) {
      return res.status(500).json({
        ok: false,
        mensaje: "Configuración SMTP incompleta",
      });
    }

    const tipo = String(
      datos.tipo ?? "Formulario web"
    )
      .replace(/[\r\n]/g, " ")
      .slice(0, 80);

    const correoUsuario = String(
      datos.correo ?? ""
    ).trim();

    const filas = Object.entries(datos)
      .filter(([campo]) => campo !== "tipo")
      .map(
        ([campo, valor]) => `
          <tr>
            <td
              style="
                padding:10px;
                border:1px solid #ddd;
                font-weight:bold;
                background:#f5f5f5;
              "
            >
              ${escapar(campo)}
            </td>

            <td
              style="
                padding:10px;
                border:1px solid #ddd;
              "
            >
              ${escapar(valor)}
            </td>
          </tr>
        `
      )
      .join("");

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: Number(smtpPort) === 465,

      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const resultadoEnvio = await transporter.sendMail({
      from: `"Fundación Grandes Talentos" <${smtpUser}>`,

      to: emailTo,

      replyTo:
        correoUsuario !== ""
          ? correoUsuario
          : undefined,

      subject: `Nuevo formulario - ${tipo}`,

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            max-width: 700px;
            margin: auto;
          "
        >
          <h2 style="color:#00152f;">
            Nuevo formulario recibido
          </h2>

          <p>
            Tipo de formulario:
            <strong>${escapar(tipo)}</strong>
          </p>

          <table
            style="
              width:100%;
              border-collapse:collapse;
              margin-top:20px;
            "
          >
            ${filas}
          </table>

          <p
            style="
              margin-top:25px;
              font-size:12px;
              color:#777;
            "
          >
            Mensaje enviado automáticamente desde
            Fundación Grandes Talentos.
          </p>
        </div>
      `,
    });
    console.log("CORREO ENVIADO");
    console.log("Message ID:", resultadoEnvio.messageId);
    console.log("Aceptados:", resultadoEnvio.accepted);
    console.log("Rechazados:", resultadoEnvio.rejected);
    console.log("Respuesta SMTP:", resultadoEnvio.response);

    return res.status(200).json({
      ok: true,
      mensaje: "Correo enviado correctamente",
    });
  } catch (error) {
    console.error("Error SMTP:", error);

    return res.status(500).json({
      ok: false,
      mensaje: "No se pudo enviar el correo",
    });
  }
}