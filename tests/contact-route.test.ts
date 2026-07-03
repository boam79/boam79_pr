import { describe, expect, it, beforeEach, vi } from 'vitest';

function buildRequest(body: unknown) {
  return new Request('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }) as unknown as Parameters<typeof import('@/app/api/contact/route').POST>[0];
}

describe('POST /api/contact', () => {
  beforeEach(() => {
    vi.unstubAllEnvs();
  });

  it('rejects requests missing required fields', async () => {
    const { POST } = await import('@/app/api/contact/route');
    const response = await POST(buildRequest({ name: '', email: '', message: '' }));
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data.error).toMatch(/필수/);
  });

  it('rejects invalid email format', async () => {
    const { POST } = await import('@/app/api/contact/route');
    const response = await POST(
      buildRequest({ name: '홍길동', email: 'not-an-email', message: '안녕하세요' })
    );
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data.error).toMatch(/이메일/);
  });

  it('silently accepts honeypot-triggered submissions without sending mail', async () => {
    const { POST } = await import('@/app/api/contact/route');
    const response = await POST(
      buildRequest({
        name: 'bot',
        email: 'bot@example.com',
        message: 'spam',
        website: 'https://spam.example.com',
      })
    );
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.ok).toBe(true);
  });

  it('returns 503 when RESEND_API_KEY is not configured', async () => {
    vi.stubEnv('RESEND_API_KEY', '');
    const { POST } = await import('@/app/api/contact/route');
    const response = await POST(
      buildRequest({ name: '홍길동', email: 'hong@example.com', message: '문의합니다' })
    );
    expect(response.status).toBe(503);
    const data = await response.json();
    expect(data.error).toBeTruthy();
  });
});
