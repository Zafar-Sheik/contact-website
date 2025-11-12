import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, company, email, phone, message, service } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Configure transporter (use your domain's SMTP or Gmail)
    const transporter = nodemailer.createTransport({
      host: "mail.contactonlinesolutions.co.za", // use your hosting provider's mail server
      port: 465, // 465 for SSL, 587 for TLS
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1️⃣ Email to your business inbox
    const adminMailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `📩 New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 16px; background: #f9fafb; color: #333;">
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company || "N/A"}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "N/A"}</p>
          <p><strong>Service:</strong> ${service || "N/A"}</p>
          <hr style="margin: 16px 0; border: none; border-top: 1px solid #ccc;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-line;">${message}</p>
        </div>
      `,
    };

    // 2️⃣ Auto-reply confirmation email to user
    const userMailOptions = {
      from: `"Contact Online Solutions" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `✅ We've received your message, ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; background: #f9fafb; color: #333; padding: 20px;">
          <h2 style="color: #0ea5e9;">Thank you for reaching out!</h2>
          <p>Hi ${name},</p>
          <p>We've received your message and our team will get back to you soon.</p>
          <hr style="margin: 16px 0; border: none; border-top: 1px solid #ddd;" />
          <p><strong>Your Message:</strong></p>
          <blockquote style="border-left: 4px solid #0ea5e9; padding-left: 10px; color: #555;">
            ${message}
          </blockquote>
          <p style="margin-top: 20px;">Best regards,<br /><strong>Contact Online Solutions Team</strong></p>
          <p style="font-size: 12px; color: #888;">Durban, South Africa</p>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
