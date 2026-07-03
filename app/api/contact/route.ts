import { NextRequest, NextResponse } from 'next/server';
import { CONTACT_EMAIL } from '@/lib/constants/site';

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  // Honeypot field: real users never fill this in. Bots that auto-fill every
  // input will populate it, letting us silently drop the submission.
  website?: string;
}

const MAX_FIELD_LENGTH = 2000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

export async function POST(request: NextRequest) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: '요청 본문을 읽을 수 없습니다.' }, { status: 400 });
  }

  const { name, email, company, message, website } = payload;

  // Honeypot triggered: pretend success so bots don't learn to avoid this field.
  if (isNonEmptyString(website)) {
    return NextResponse.json({ ok: true });
  }

  if (!isNonEmptyString(name) || !isNonEmptyString(email) || !isNonEmptyString(message)) {
    return NextResponse.json({ error: '이름, 이메일, 메시지는 필수 입력 항목입니다.' }, { status: 400 });
  }

  if (!EMAIL_PATTERN.test(email.trim())) {
    return NextResponse.json({ error: '올바른 이메일 형식이 아닙니다.' }, { status: 400 });
  }

  if (
    name.length > MAX_FIELD_LENGTH ||
    email.length > MAX_FIELD_LENGTH ||
    message.length > MAX_FIELD_LENGTH ||
    (company && company.length > MAX_FIELD_LENGTH)
  ) {
    return NextResponse.json({ error: '입력 값이 너무 깁니다.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error(
      'RESEND_API_KEY is not configured. Add it as an environment variable to enable the contact form.'
    );
    return NextResponse.json(
      { error: '문의 전송 기능이 아직 설정되지 않았습니다. 이메일로 직접 연락해 주세요.' },
      { status: 503 }
    );
  }

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>',
      to: CONTACT_EMAIL,
      replyTo: email.trim(),
      subject: `[포트폴리오 문의] ${name.trim()}${company ? ` (${company.trim()})` : ''}`,
      text: [
        `이름: ${name.trim()}`,
        `이메일: ${email.trim()}`,
        company ? `회사/소속: ${company.trim()}` : null,
        '',
        '메시지:',
        message.trim(),
      ]
        .filter(Boolean)
        .join('\n'),
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json({ error: '메일 전송에 실패했습니다. 잠시 후 다시 시도해 주세요.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Failed to send contact email:', error);
    return NextResponse.json({ error: '메일 전송 중 오류가 발생했습니다.' }, { status: 500 });
  }
}
