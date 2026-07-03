'use client';

import { FormEvent, useState } from 'react';
import Button from '@/components/ui/Button';
import { CheckCircle2, Loader2, Send, AlertCircle } from 'lucide-react';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      company: String(formData.get('company') || ''),
      message: String(formData.get('message') || ''),
      website: String(formData.get('website') || ''), // honeypot
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || '전송에 실패했습니다.');
      }

      setStatus('success');
      form.reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : '전송에 실패했습니다.');
    }
  };

  if (status === 'success') {
    return (
      <div
        className="flex items-start gap-3 rounded-lg border border-emerald-200/90 bg-emerald-50/90 px-4 py-4 text-sm text-emerald-950"
        role="status"
      >
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden />
        <div>
          <p className="font-medium">문의가 전송되었습니다.</p>
          <p className="mt-1 text-emerald-800">빠른 시일 내에 답변드리겠습니다. 감사합니다.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Honeypot: 화면에는 보이지 않고 스크린 리더에서도 제외됩니다. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">웹사이트</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            이름 <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={200}
            className="mt-1.5 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30"
            placeholder="홍길동"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            이메일 <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            className="mt-1.5 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="text-xs font-medium uppercase tracking-wide text-zinc-500">
          회사/소속 (선택)
        </label>
        <input
          id="company"
          name="company"
          type="text"
          maxLength={200}
          className="mt-1.5 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30"
          placeholder="회사명"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-xs font-medium uppercase tracking-wide text-zinc-500">
          메시지 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={2000}
          className="mt-1.5 w-full resize-y rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30"
          placeholder="문의 내용을 남겨 주세요."
        />
      </div>

      {status === 'error' && errorMessage && (
        <div
          className="flex items-start gap-2 rounded-lg border border-amber-200/90 bg-amber-50/90 px-4 py-3 text-sm text-amber-950"
          role="alert"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          <span>{errorMessage}</span>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="md"
        disabled={status === 'submitting'}
        className="inline-flex items-center gap-2"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            전송 중
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden />
            보내기
          </>
        )}
      </Button>
    </form>
  );
}
