import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not defined in environment variables');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export interface SendEmailParams {
  to: string | string[];
  subject: string;
  react?: React.ReactElement;
  html?: string;
  text?: string;
}

export async function sendEmail(params: SendEmailParams) {
  try {
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: params.to,
      subject: params.subject,
      react: params.react,
      html: params.html,
      text: params.text,
    });

    if (error) {
      console.error('Email sending error:', error);
      throw error;
    }

    console.log('Email sent successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}

const emailWrapper = (content: string) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; background-color: #CBE4DE; margin: 0; padding: 0;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #CBE4DE; padding: 20px 0;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(46,79,79,0.1);">
              <tr>
                <td style="background-color: #2C3333; padding: 24px 48px; text-align: center;">
                  <h2 style="color: #CBE4DE; font-size: 20px; margin: 0;">&#9823; Chess Trainer</h2>
                </td>
              </tr>
              <tr>
                <td style="padding: 40px 48px;">
                  ${content}
                </td>
              </tr>
              <tr>
                <td style="background-color: #f8faf9; padding: 16px 48px; text-align: center; border-top: 1px solid #CBE4DE;">
                  <p style="color: #2E4F4F; font-size: 12px; margin: 0;">Chess Trainer - Master Your Chess Openings</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
`;

export async function sendVerificationEmail(
  email: string,
  name: string,
  token: string
) {
  const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/auth/verify-email?token=${token}`;

  return sendEmail({
    to: email,
    subject: 'Verify your email address - Chess Trainer',
    html: emailWrapper(`
      <h1 style="color: #2C3333; font-size: 24px; font-weight: bold; margin: 0 0 24px 0;">Welcome to Chess Trainer!</h1>
      <p style="color: #2C3333; font-size: 16px; line-height: 26px; margin: 0 0 24px 0;">Hi ${name},</p>
      <p style="color: #2C3333; font-size: 16px; line-height: 26px; margin: 0 0 24px 0;">
        Thanks for signing up! Please verify your email address by clicking the button below:
      </p>
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center" style="padding: 27px 0;">
            <a href="${verificationUrl}" style="background-color: #0E8388; border-radius: 5px; color: #fff; font-size: 16px; font-weight: bold; text-decoration: none; padding: 12px 24px; display: inline-block;">
              Verify Email Address
            </a>
          </td>
        </tr>
      </table>
      <p style="color: #2C3333; font-size: 16px; line-height: 26px; margin: 0 0 12px 0;">
        Or copy and paste this URL into your browser:
      </p>
      <p style="color: #0E8388; font-size: 14px; word-break: break-all; margin: 0 0 24px 0;">
        ${verificationUrl}
      </p>
      <hr style="border: none; border-top: 1px solid #CBE4DE; margin: 24px 0;">
      <p style="color: #2E4F4F; font-size: 12px; line-height: 16px; margin: 0;">
        This link will expire in 24 hours. If you didn't sign up for Chess Trainer, you can safely ignore this email.
      </p>
    `),
  });
}

export async function sendPasswordResetEmail(
  email: string,
  name: string,
  token: string
) {
  const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/auth/reset-password?token=${token}`;

  return sendEmail({
    to: email,
    subject: 'Reset your password - Chess Trainer',
    html: emailWrapper(`
      <h1 style="color: #2C3333; font-size: 24px; font-weight: bold; margin: 0 0 24px 0;">Password Reset Request</h1>
      <p style="color: #2C3333; font-size: 16px; line-height: 26px; margin: 0 0 24px 0;">Hi ${name},</p>
      <p style="color: #2C3333; font-size: 16px; line-height: 26px; margin: 0 0 24px 0;">
        We received a request to reset your password. Click the button below to create a new password:
      </p>
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center" style="padding: 27px 0;">
            <a href="${resetUrl}" style="background-color: #0E8388; border-radius: 5px; color: #fff; font-size: 16px; font-weight: bold; text-decoration: none; padding: 12px 24px; display: inline-block;">
              Reset Password
            </a>
          </td>
        </tr>
      </table>
      <p style="color: #2C3333; font-size: 16px; line-height: 26px; margin: 0 0 12px 0;">
        Or copy and paste this URL into your browser:
      </p>
      <p style="color: #0E8388; font-size: 14px; word-break: break-all; margin: 0 0 24px 0;">
        ${resetUrl}
      </p>
      <hr style="border: none; border-top: 1px solid #CBE4DE; margin: 24px 0;">
      <p style="color: #2E4F4F; font-size: 12px; line-height: 16px; margin: 0;">
        This link will expire in 1 hour. If you didn't request a password reset, you can safely ignore this email.
      </p>
    `),
  });
}

export async function sendWelcomeEmail(email: string, name: string) {
  return sendEmail({
    to: email,
    subject: 'Welcome to Chess Trainer!',
    html: emailWrapper(`
      <h1 style="color: #2C3333; font-size: 24px; font-weight: bold; margin: 0 0 24px 0;">Welcome aboard!</h1>
      <p style="color: #2C3333; font-size: 16px; line-height: 26px; margin: 0 0 24px 0;">Hi ${name},</p>
      <p style="color: #2C3333; font-size: 16px; line-height: 26px; margin: 0 0 24px 0;">
        Your email has been verified and your account is all set up! Here's what you can do:
      </p>
      <ul style="color: #2C3333; font-size: 16px; line-height: 26px; margin: 0 0 24px 0; padding-left: 20px;">
        <li>Import PGN studies from Lichess, Chess.com, and more</li>
        <li>Practice moves in interactive training mode</li>
        <li>Track your progress across studies</li>
        <li>Organize your opening repertoire</li>
      </ul>
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center" style="padding: 27px 0;">
            <a href="${process.env.NEXT_PUBLIC_APP_URL}" style="background-color: #0E8388; border-radius: 5px; color: #fff; font-size: 16px; font-weight: bold; text-decoration: none; padding: 12px 24px; display: inline-block;">
              Start Training
            </a>
          </td>
        </tr>
      </table>
      <p style="color: #2E4F4F; font-size: 12px; line-height: 16px; margin: 0;">
        Need help? Reply to this email and we'll be happy to assist you.
      </p>
    `),
  });
}
