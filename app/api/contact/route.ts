import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.resend_key);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, date, message } = await req.json();

    if (!firstName || !lastName || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Ride & Slide <hello@rideandslidepartyco.com>',
      to: 'Rideandslidepartyco@gmail.com',
      subject: `New Contact Request from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 12px;">
          <h2 style="color: #0f172a; margin-bottom: 24px;">New Quote Request</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Event Date:</strong> ${date || 'Not specified'}</p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="color: #475569; line-height: 1.6;">${message}</p>
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
