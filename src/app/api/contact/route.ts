import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const body = await req.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
    }

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "contact@yourdomain.com",
      to: [process.env.CONTACT_TO_EMAIL ?? "pmi.totalfitness@hotmail.com"],
      replyTo: email,
      subject: `[PMI Total Fitness] ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        `Subject: ${subject}`,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 8px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 100px;">Name</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${phone ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Phone</td><td style="padding: 8px 0;">${phone}</td></tr>` : ""}
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Subject</td>
              <td style="padding: 8px 0;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f9f9f9; border-radius: 8px;">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 16px; font-size: 12px; color: #aaa;">
            Sent from the PMI Total Fitness contact form.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 })
    }

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "contact@pmitotalfitness.com",
      to: [email],
      subject: "Thanks for contacting PMI Total Fitness!",
      text: [
        `Hi ${name},`,
        "",
        "Thank you for reaching out to PMI Total Fitness! We've received your message and will get back to you as soon as possible.",
        "",
        "In the meantime, feel free to visit our website or give us a call.",
        "",
        "— The PMI Total Fitness Team",
      ].join("\n"),
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 8px;">
            Thanks for contacting PMI Total Fitness!
          </h2>
          <p>Hi ${name},</p>
          <p>Thank you for reaching out to us! We've received your message and will get back to you as soon as possible.</p>
          <p>In the meantime, feel free to visit our website or give us a call.</p>
          <p style="margin-top: 32px;">— The PMI Total Fitness Team</p>
          <p style="margin-top: 16px; font-size: 12px; color: #aaa;">
            This is an automated confirmation. Please do not reply to this email.
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error("Contact route error:", err)
    return NextResponse.json({ error: "Internal server error." }, { status: 500 })
  }
}
