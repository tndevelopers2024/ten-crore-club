import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      type,
      name,
      email,
      phone,
      city,
      currentAge,
      monthlyIncome,
      goal,
      currentSavings,
      message,
    } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email address is required." },
        { status: 400 }
      );
    }

    // Determine subject and title based on form type
    let subject = "New Submission - Ten Crore Club";
    let formTitle = "Form Submission";

    switch (type) {
      case "booking":
        subject = `Strategy Session Request: ${name || email}`;
        formTitle = "Strategy Session Booking Request";
        break;
      case "contact":
        subject = `New Contact Inquiry: ${name || email}`;
        formTitle = "Contact Us Form Inquiry";
        break;
      case "blueprint":
        subject = `₹10 Crore Blueprint Request: ${email}`;
        formTitle = "₹10 Crore Blueprint Download Request";
        break;
      case "newsletter":
        subject = `New Newsletter Subscriber: ${email}`;
        formTitle = "Newsletter Subscription";
        break;
    }

    // Build Luxury Gold & Obsidian Branded HTML Email Template for Admin
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'DM Sans', system-ui, -apple-system, sans-serif; background-color: #000000; color: #faf0dc; margin: 0; padding: 24px; }
            .container { max-width: 600px; margin: 0 auto; background-color: #111111; border: 1px solid #d5a04a; border-radius: 16px; padding: 32px; box-shadow: 0 10px 40px rgba(213, 160, 74, 0.2); }
            .header { text-align: center; border-bottom: 1px solid #2a2a2a; padding-bottom: 20px; margin-bottom: 24px; }
            .logo-text { font-size: 24px; font-weight: bold; color: #d5a04a; letter-spacing: 2px; text-transform: uppercase; }
            .badge { display: inline-block; background: rgba(213, 160, 74, 0.15); border: 1px solid #d5a04a; color: #d5a04a; padding: 4px 12px; border-radius: 999px; font-size: 11px; font-weight: bold; text-transform: uppercase; margin-top: 8px; }
            .content-row { display: flex; justify-content: space-between; border-bottom: 1px solid #222222; padding: 12px 0; }
            .label { color: #e1c18d; opacity: 0.8; font-size: 13px; font-weight: 500; }
            .value { color: #faf0dc; font-size: 14px; font-weight: bold; text-align: right; }
            .message-box { background: #1a1a1a; border-left: 3px solid #d5a04a; padding: 16px; border-radius: 8px; margin-top: 20px; font-style: italic; color: #faf0dc; }
            .footer { text-align: center; margin-top: 32px; padding-top: 20px; border-top: 1px solid #2a2a2a; font-size: 11px; color: #888888; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo-text">Ten Crore Club</div>
              <div class="badge">${formTitle}</div>
            </div>

            <div style="margin-bottom: 20px;">
              ${name ? `<div class="content-row"><span class="label">Full Name:</span><span class="value">${name}</span></div>` : ""}
              <div class="content-row"><span class="label">Email Address:</span><span class="value"><a href="mailto:${email}" style="color:#d5a04a;">${email}</a></span></div>
              ${phone ? `<div class="content-row"><span class="label">Mobile Number:</span><span class="value"><a href="tel:${phone}" style="color:#d5a04a;">${phone}</a></span></div>` : ""}
              ${city ? `<div class="content-row"><span class="label">City:</span><span class="value">${city}</span></div>` : ""}
              ${currentAge ? `<div class="content-row"><span class="label">Current Age:</span><span class="value">${currentAge} years</span></div>` : ""}
              ${monthlyIncome ? `<div class="content-row"><span class="label">Monthly Income:</span><span class="value">${monthlyIncome}</span></div>` : ""}
              ${goal ? `<div class="content-row"><span class="label">Financial Goal:</span><span class="value">${goal}</span></div>` : ""}
              ${currentSavings ? `<div class="content-row"><span class="label">Current Savings:</span><span class="value">${currentSavings}</span></div>` : ""}
            </div>

            ${message ? `
              <div class="label">Message / Notes:</div>
              <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
            ` : ""}

            <div class="footer">
              Sent automatically via Ten Crore Club Web Portal (${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })})
            </div>
          </div>
        </body>
      </html>
    `;

    // Check for PDF attachments (e.g. for ₹10 Crore Blueprint)
    const pdfPath = path.join(process.cwd(), "public", "docs", "Ten-Crore-Blueprint.pdf");
    const hasPdfFile = fs.existsSync(pdfPath);
    const pdfAttachments = (type === "blueprint" && hasPdfFile)
      ? [{ filename: "Ten-Crore-Blueprint.pdf", path: pdfPath }]
      : [];

    // Check if SMTP environment variables exist
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const recipient = process.env.NOTIFICATION_EMAIL || "contact@tencroreclub.in";

      // 1. Send notification email to Admin
      await transporter.sendMail({
        from: process.env.SMTP_FROM || `"Ten Crore Club" <${smtpUser}>`,
        to: recipient,
        replyTo: email,
        subject: subject,
        html: htmlContent,
      });

      // 2. Send user auto-reply email with PDF attachment if type === "blueprint"
      try {
        const userSubject = type === "blueprint" 
          ? "Your ₹10 Crore Wealth Blueprint PDF — Ten Crore Club" 
          : `Confirmation: We received your request — Ten Crore Club`;

        const userHtml = type === "blueprint" ? `
          <div style="font-family: sans-serif; background: #000000; color: #faf0dc; padding: 32px; border-radius: 16px; max-width: 600px; margin: 0 auto; border: 1px solid #d5a04a;">
            <h2 style="color: #d5a04a; margin-top: 0;">Your ₹10 Crore Blueprint is Ready</h2>
            <p>Hello ${name || "Investor"},</p>
            <p>Thank you for requesting Alex Pandyan's <strong>Wealth Architect Blueprint & Roadmap</strong>.</p>
            <p>We have attached the PDF blueprint directly to this email so you can study the arithmetic roadmap and start compounding with confidence.</p>
            <div style="text-align: center; margin: 28px 0;">
              <a href="https://tencroreclub.in/docs/Ten-Crore-Blueprint.pdf" style="background: #cb0503; color: #ffffff; padding: 14px 28px; text-decoration: none; font-weight: bold; border-radius: 10px; display: inline-block; box-shadow: 0 4px 20px rgba(203,5,3,0.4);">
                📄 Download Blueprint PDF
              </a>
            </div>
            <p style="color: #e1c18d; font-size: 13px;">If you have any questions or want to discuss your portfolio strategy 1-on-1 with Alex Pandyan, reply directly to this email.</p>
            <br/>
            <p style="color: #d5a04a;"><em>"Let Your Investments Fly Higher."</em></p>
            <p>— <strong>Alex Pandyan</strong><br/><span style="font-size: 12px; color: #888;">The Wealth Architect & Founder, Ten Crore Club</span></p>
          </div>
        ` : `
          <div style="font-family: sans-serif; background: #000; color: #faf0dc; padding: 24px; border-radius: 12px;">
            <h2 style="color: #d5a04a;">Hello ${name || "Investor"},</h2>
            <p>Thank you for reaching out to <strong>Ten Crore Club</strong>.</p>
            <p>We have received your request and our team will be in touch with you shortly.</p>
            <br/>
            <p style="color: #d5a04a;"><em>"Let Your Investments Fly Higher."</em></p>
            <p>— Alex Pandyan & The Ten Crore Club Team</p>
          </div>
        `;

        await transporter.sendMail({
          from: process.env.SMTP_FROM || `"Ten Crore Club" <${smtpUser}>`,
          to: email,
          subject: userSubject,
          html: userHtml,
          attachments: pdfAttachments,
        });
      } catch (userErr) {
        console.warn("User auto-reply email warning:", userErr);
      }

      return NextResponse.json({
        success: true,
        pdfAttached: pdfAttachments.length > 0,
        message: "Email dispatched successfully via SMTP.",
      });
    } else {
      // Local dev / fallback mode logging
      console.log("==========================================");
      console.log(`[EMAIL DISPATCH - DEV SIMULATION MODE]`);
      console.log(`Subject: ${subject}`);
      console.log(`Payload:`, body);
      console.log(`PDF Attachment Available:`, hasPdfFile ? pdfPath : "No PDF at public/docs/Ten-Crore-Blueprint.pdf");
      console.log("==========================================");

      return NextResponse.json({
        success: true,
        simulated: true,
        pdfAttached: hasPdfFile,
        message: "Submission logged successfully. (Configure SMTP environment variables to activate live emailing).",
      });
    }
  } catch (error: any) {
    console.error("Error processing email dispatch API:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to process email request." },
      { status: 500 }
    );
  }
}
