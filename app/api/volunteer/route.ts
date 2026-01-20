import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { admin } from '@/data/admin'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    // Extract form data
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const location = formData.get('location') as string
    const interests = formData.getAll('interests') as string[]
    const timeCommitment = formData.get('timeCommitment') as string
    const duration = formData.get('duration') as string
    const experience = formData.get('experience') as string
    const languages = formData.get('languages') as string
    const motivation = formData.get('motivation') as string
    const additional = formData.get('additional') as string

    // Validate required fields
    if (!firstName || !lastName || !email || !location || !motivation) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      )
    }

    // Create email content
    const emailContent = `
New Volunteer Application

Personal Information:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Phone: ${phone || 'Not provided'}
- Location: ${location}

Volunteer Interests:
${interests.length > 0 ? interests.map(interest => `- ${interest}`).join('\n') : 'No specific interests selected'}

Availability:
- Time Commitment: ${timeCommitment || 'Not specified'}
- Duration: ${duration || 'Not specified'}

Experience & Skills:
- Experience: ${experience || 'Not provided'}
- Languages: ${languages || 'Not provided'}

Motivation:
${motivation}

Additional Information:
${additional || 'None provided'}
    `.trim()

     // Send email to admin
     const { data, error } = await resend.emails.send({
       from: 'onboarding@resend.dev',
       to: admin.email,
       subject: `New Volunteer Application: ${firstName} ${lastName}`,
       html: `
         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
           <h2 style="color: #D30000; border-bottom: 2px solid #D30000; padding-bottom: 10px;">
             New Volunteer Application
           </h2>
           
           <div style="margin: 20px 0;">
             <h3 style="color: #333; margin-bottom: 5px;">Personal Information:</h3>
             <p style="margin: 5px 0;"><strong>Name:</strong> ${firstName} ${lastName}</p>
             <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
             <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
             <p style="margin: 5px 0;"><strong>Location:</strong> ${location}</p>
           </div>
           
           <div style="margin: 20px 0;">
             <h3 style="color: #333; margin-bottom: 5px;">Volunteer Interests:</h3>
             <div style="background-color: #f5f5f5; padding: 10px;">
               ${interests.length > 0 ? interests.map(interest => `<p>• ${interest}</p>`).join('') : '<p>No specific interests selected</p>'}
             </div>
           </div>
           
           <div style="margin: 20px 0;">
             <h3 style="color: #333; margin-bottom: 5px;">Availability:</h3>
             <p style="margin: 5px 0;"><strong>Time Commitment:</strong> ${timeCommitment || 'Not specified'}</p>
             <p style="margin: 5px 0;"><strong>Duration:</strong> ${duration || 'Not specified'}</p>
           </div>
           
           <div style="margin: 20px 0;">
             <h3 style="color: #333; margin-bottom: 5px;">Experience & Skills:</h3>
             <p style="margin: 5px 0;"><strong>Experience:</strong> ${experience || 'Not provided'}</p>
             <p style="margin: 5px 0;"><strong>Languages:</strong> ${languages || 'Not provided'}</p>
           </div>
           
           <div style="margin: 20px 0;">
             <h3 style="color: #333; margin-bottom: 10px;">Motivation:</h3>
             <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #D30000; white-space: pre-wrap;">
${motivation}
             </div>
           </div>
           
           ${additional ? `
           <div style="margin: 20px 0;">
             <h3 style="color: #333; margin-bottom: 10px;">Additional Information:</h3>
             <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #D30000; white-space: pre-wrap;">
${additional}
             </div>
           </div>
           ` : ''}
           
           <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
             <p>This application was submitted via the Democratic Burma website volunteer form.</p>
             <p>Sent at: ${new Date().toLocaleString()}</p>
           </div>
         </div>
       `,
       text: emailContent,
       replyTo: email,
     })

     if (error) {
       console.error('Email send error:', error)
       return NextResponse.json(
         { error: `Failed to send application: ${error.message}` },
         { status: 500 }
       )
     }

     // Send confirmation email to user
     await resend.emails.send({
       from: 'onboarding@resend.dev',
       to: [email],
       subject: 'Thank You for Your Volunteer Application - Democratic Burma',
       html: `
         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
           <h2 style="color: #D30000; border-bottom: 2px solid #D30000; padding-bottom: 10px;">
             Thank You for Your Volunteer Application
           </h2>
           
           <div style="margin: 20px 0;">
             <p>Dear ${firstName} ${lastName},</p>
             <p>Thank you for your interest in volunteering with Democratic Burma. We have received your application and are excited about the possibility of working together to advance democracy and human rights in Burma.</p>
           </div>
           
           <div style="margin: 20px 0;">
             <p>Our team will review your application carefully and get back to you soon to discuss next steps and how your skills and interests can best support our mission.</p>
           </div>
           
           <div style="margin: 20px 0;">
             <p>In the meantime, we encourage you to:</p>
             <ul style="margin: 10px 0; padding-left: 20px;">
               <li>Follow our latest updates on the website</li>
               <li>Share our mission with your network</li>
               <li>Learn more about our current campaigns</li>
             </ul>
           </div>
           
           <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
             <p>With gratitude and anticipation,</p>
             <p>The Democratic Burma Team</p>
             <p>Washington, DC</p>
           </div>
         </div>
       `,
       text: `
Thank You for Your Volunteer Application

Dear ${firstName} ${lastName},

Thank you for your interest in volunteering with Democratic Burma. We have received your application and are excited about the possibility of working together to advance democracy and human rights in Burma.

Our team will review your application carefully and get back to you within 3-5 business days to discuss next steps and how your skills and interests can best support our mission.

In the meantime, we encourage you to:
- Follow our latest updates on the website
- Share our mission with your network
- Learn more about our current campaigns

With gratitude and anticipation,
The Democratic Burma Team
Washington, DC
       `,
     })

     return NextResponse.json(
       { success: true, message: 'Application submitted successfully! We will contact you within 3-5 business days.' },
       { status: 200 }
     )

  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}