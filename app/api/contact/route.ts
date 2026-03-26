import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.resend_key);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, date, message } = await req.json();

    if (!firstName || !lastName || !email || !phone || !date || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Ride & Slide <hello@rideandslidepartyco.com>',
      to: 'Rideandslidepartyco@gmail.com',
      replyTo: email,
      subject: `New Contact Request from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #0f172a; margin-bottom: 24px;">New Quote Request</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
            <p style="margin: 8px 0;"><strong>Customer:</strong> ${firstName} ${lastName}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 8px 0;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin: 8px 0;"><strong>Event Date:</strong> ${date}</p>
          </div>
          <p style="color: #475569; line-height: 1.6; background-color: #fff; padding: 15px; border: 1px solid #e2e8f0; border-radius: 8px;">
            ${message}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
