import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

// Helper functions to convert raw select values into clean, luxury labels
function formatIncome(val?: string) {
  if (!val) return "";
  const map: Record<string, string> = {
    "below-50k": "Below ₹50,000 / month",
    "50k-1l": "₹50,000 – ₹1 Lakh / month",
    "1l-3l": "₹1 Lakh – ₹3 Lakhs / month",
    "3l-above": "Above ₹3 Lakhs / month",
  };
  return map[val] || val;
}

function formatGoal(val?: string) {
  if (!val) return "";
  const map: Record<string, string> = {
    "1cr": "₹1 Crore",
    "3cr": "₹3 Crore",
    "5cr": "₹5 Crore",
    "10cr": "₹10 Crore Milestone",
    "starting": "Just Starting Journey",
  };
  return map[val] || val;
}

function formatSavings(val?: string) {
  if (!val) return "";
  const map: Record<string, string> = {
    none: "Nothing Yet",
    "below-5l": "Below ₹5 Lakhs",
    "5-20l": "₹5 Lakhs – ₹20 Lakhs",
    "above-20l": "Above ₹20 Lakhs",
  };
  return map[val] || val;
}

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
    let subject = "New Lead Submission - Ten Crore Club";
    let formTitle = "Form Submission";

    switch (type) {
      case "booking":
        subject = `⚡ Strategy Session Request: ${name || email}`;
        formTitle = "Strategy Session Booking Request";
        break;
      case "contact":
        subject = `✉️ New Contact Inquiry: ${name || email}`;
        formTitle = "Contact Us Form Inquiry";
        break;
      case "blueprint":
        subject = `📄 ₹10 Crore Blueprint Request: ${email}`;
        formTitle = "₹10 Crore Blueprint Download Request";
        break;
      case "newsletter":
        subject = `📬 New Newsletter Subscriber: ${email}`;
        formTitle = "Newsletter Subscription";
        break;
    }

    const formattedIncome = formatIncome(monthlyIncome);
    const formattedGoal = formatGoal(goal);
    const formattedSavings = formatSavings(currentSavings);

    // Bulletproof HTML Email Template for Email Clients (Hostinger, Gmail, Outlook)
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${formTitle}</title>
        </head>
        <body style="margin:0; padding:20px; background-color:#070707; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#f5ebd9;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:620px; margin:0 auto; background-color:#121212; border:1px solid #d5a04a; border-radius:16px; overflow:hidden; box-shadow:0 12px 40px rgba(213,160,74,0.25);">
            
            <!-- Header Banner -->
            <tr>
              <td style="background: linear-gradient(180deg, #1c1813 0%, #121212 100%); padding: 32px 24px; text-align: center; border-bottom: 2px solid #282218;">
                <div style="font-size: 24px; font-weight: 800; color: #d5a04a; letter-spacing: 3px; text-transform: uppercase;">
                  TEN CRORE CLUB
                </div>
                <div style="font-size: 11px; color: #a39580; text-transform: uppercase; letter-spacing: 2px; margin-top: 4px;">
                  The Wealth Architect Platform
                </div>
                <div style="margin-top: 16px;">
                  <span style="background-color: #cb0503; color: #ffffff; padding: 6px 18px; border-radius: 20px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; display: inline-block;">
                    ${formTitle}
                  </span>
                </div>
              </td>
            </tr>

            <!-- Lead Details Table -->
            <tr>
              <td style="padding: 24px 28px;">
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                  
                  ${name ? `
                  <tr>
                    <td style="padding: 12px 14px; border-bottom: 1px solid #222222; font-size: 13px; color: #a39580; width: 40%; font-weight: 600;">
                      Full Name
                    </td>
                    <td style="padding: 12px 14px; border-bottom: 1px solid #222222; font-size: 14px; color: #ffffff; font-weight: 700; text-align: right;">
                      ${name}
                    </td>
                  </tr>` : ""}

                  <tr>
                    <td style="padding: 12px 14px; border-bottom: 1px solid #222222; font-size: 13px; color: #a39580; width: 40%; font-weight: 600;">
                      Email Address
                    </td>
                    <td style="padding: 12px 14px; border-bottom: 1px solid #222222; font-size: 14px; text-align: right;">
                      <a href="mailto:${email}" style="color: #d5a04a; text-decoration: none; font-weight: 700;">${email}</a>
                    </td>
                  </tr>

                  ${phone ? `
                  <tr>
                    <td style="padding: 12px 14px; border-bottom: 1px solid #222222; font-size: 13px; color: #a39580; width: 40%; font-weight: 600;">
                      Mobile Number
                    </td>
                    <td style="padding: 12px 14px; border-bottom: 1px solid #222222; font-size: 14px; text-align: right;">
                      <a href="tel:${phone}" style="color: #25D366; text-decoration: none; font-weight: 700;">+91 ${phone}</a>
                    </td>
                  </tr>` : ""}

                  ${city ? `
                  <tr>
                    <td style="padding: 12px 14px; border-bottom: 1px solid #222222; font-size: 13px; color: #a39580; width: 40%; font-weight: 600;">
                      City / Location
                    </td>
                    <td style="padding: 12px 14px; border-bottom: 1px solid #222222; font-size: 14px; color: #ffffff; font-weight: 600; text-align: right;">
                      ${city}
                    </td>
                  </tr>` : ""}

                  ${currentAge ? `
                  <tr>
                    <td style="padding: 12px 14px; border-bottom: 1px solid #222222; font-size: 13px; color: #a39580; width: 40%; font-weight: 600;">
                      Current Age
                    </td>
                    <td style="padding: 12px 14px; border-bottom: 1px solid #222222; font-size: 14px; color: #ffffff; font-weight: 600; text-align: right;">
                      ${currentAge} years
                    </td>
                  </tr>` : ""}

                  ${formattedIncome ? `
                  <tr>
                    <td style="padding: 12px 14px; border-bottom: 1px solid #222222; font-size: 13px; color: #a39580; width: 40%; font-weight: 600;">
                      Monthly Income
                    </td>
                    <td style="padding: 12px 14px; border-bottom: 1px solid #222222; font-size: 14px; color: #d5a04a; font-weight: 700; text-align: right;">
                      ${formattedIncome}
                    </td>
                  </tr>` : ""}

                  ${formattedGoal ? `
                  <tr>
                    <td style="padding: 12px 14px; border-bottom: 1px solid #222222; font-size: 13px; color: #a39580; width: 40%; font-weight: 600;">
                      Financial Goal
                    </td>
                    <td style="padding: 12px 14px; border-bottom: 1px solid #222222; font-size: 14px; color: #d5a04a; font-weight: 700; text-align: right;">
                      ${formattedGoal}
                    </td>
                  </tr>` : ""}

                  ${formattedSavings ? `
                  <tr>
                    <td style="padding: 12px 14px; border-bottom: 1px solid #222222; font-size: 13px; color: #a39580; width: 40%; font-weight: 600;">
                      Current Savings
                    </td>
                    <td style="padding: 12px 14px; border-bottom: 1px solid #222222; font-size: 14px; color: #ffffff; font-weight: 600; text-align: right;">
                      ${formattedSavings}
                    </td>
                  </tr>` : ""}

                </table>

                ${message ? `
                <div style="margin-top: 24px; background-color: #1a1a1a; border-left: 4px solid #d5a04a; border-radius: 8px; padding: 16px 20px;">
                  <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #d5a04a; font-weight: 700; margin-bottom: 6px;">
                    Message / Notes from Lead
                  </div>
                  <div style="font-size: 14px; color: #ffffff; line-height: 1.6; font-style: italic;">
                    "${message.replace(/\n/g, "<br>")}"
                  </div>
                </div>` : ""}

                ${phone ? `
                <div style="margin-top: 28px; text-align: center;">
                  <a href="tel:${phone}" style="background-color: #cb0503; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-size: 13px; font-weight: bold; display: inline-block; margin-right: 8px; box-shadow: 0 4px 15px rgba(203,5,3,0.3);">
                    📞 Call Lead (+91 ${phone})
                  </a>
                  <a href="mailto:${email}" style="background-color: #222222; color: #d5a04a; border: 1px solid #d5a04a; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-size: 13px; font-weight: bold; display: inline-block;">
                    ✉️ Reply via Email
                  </a>
                </div>` : ""}
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color: #0d0d0d; padding: 20px; text-align: center; border-top: 1px solid #222222; font-size: 11px; color: #777777;">
                Ten Crore Club Web Portal • Auto-generated Lead Notification<br/>
                Received: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
              </td>
            </tr>
          </table>
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

      const recipient = process.env.NOTIFICATION_EMAIL || "contact@tencroreclub.com";

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
              <a href="https://tencroreclub.com/docs/Ten-Crore-Blueprint.pdf" style="background: #cb0503; color: #ffffff; padding: 14px 28px; text-decoration: none; font-weight: bold; border-radius: 10px; display: inline-block; box-shadow: 0 4px 20px rgba(203,5,3,0.4);">
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
