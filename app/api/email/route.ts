import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';
import { Env } from '@/types/Env';

const smtpOptions = {
  host: Env.SMTP_HOST,
  port: parseInt(Env.SMTP_PORT, 10),
  auth: {
    user: Env.SMTP_USER,
    pass: Env.SMTP_PASSWORD
  },
  secure: true
};

export async function POST(req: NextRequest) {
  const transporter = nodemailer.createTransport({
    ...smtpOptions
  });
  try {
    const data = await req.json();
    await transporter.sendMail({
      from: Env.SMTP_FROM_EMAIL,
      to: Env.SMTP_TO_EMAIL,
      subject: 'Email from DaylonArtPage',
      html: `<section>
              <strong>From: </strong><p style="display: inline">${data['name'] || ''}</p><br/>
              <strong>Email: </strong><p style="display: inline">${data['email'] || ''}</p><br/>
              <strong>Message: </strong><p style="display: inline">${data['message'] || ''}</p><br/>
            </section>`
    });
    return NextResponse.json({ message: 'Email sent!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error: ' + error }, { status: 500 });
  }
}