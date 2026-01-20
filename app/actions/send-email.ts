"use server"

import { Resend } from "resend"
import { admin } from "@/data/admin"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    if (!name || !email || !subject || !message) {
      return {
        success: false,
        error: "All fields are required",
      }
    }

    // Send email to admin
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [admin.email],
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #D30000; border-bottom: 2px solid #D30000; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 5px;">Contact Details:</h3>
            <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
            <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #D30000; white-space: pre-wrap;">
${message}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>This message was sent from the Democratic Burma website contact form.</p>
            <p>Sent at: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Sent at: ${new Date().toLocaleString()}
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return {
        success: false,
        error: `Failed to send email: ${error.message}`,
      }
    }

    // Send confirmation email to user
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [email],
      subject: "Thank you for contacting Democratic Burma",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #D30000; border-bottom: 2px solid #D30000; padding-bottom: 10px;">
            Thank You for Your Message
          </h2>
          
          <div style="margin: 20px 0;">
            <p>Dear ${name},</p>
            <p>Thank you for reaching out to Democratic Burma. We have received your message with the subject:</p>
            <p style="background-color: #f5f5f5; padding: 10px; border-left: 4px solid #D30000; font-weight: bold;">
              ${subject}
            </p>
          </div>
          
          <div style="margin: 20px 0;">
            <p>Our team will review your message and get back to you soon.</p>
            <p>We appreciate your interest in our work for democracy and human rights in Burma.</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>With gratitude,</p>
            <p>The Democratic Burma Team</p>
            <p>Washington, DC</p>
          </div>
        </div>
      `,
      text: `
Thank You for Your Message

Dear ${name},

Thank you for reaching out to Democratic Burma. We have received your message with the subject: ${subject}

Our team will review your message and get back to you within 24-48 hours.
We appreciate your interest in our work for democracy and human rights in Burma.

With gratitude,
The Democratic Burma Team
Washington, DC
      `,
    })

    return {
      success: true,
      message: "Your message has been sent successfully! We will get back to you soon.",
    }
  } catch (error) {
    console.error("Email sending error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    }
  }
}
