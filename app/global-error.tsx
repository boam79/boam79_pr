'use client';

import { useEffect } from 'react';
import './globals.css';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled global error:', error);
  }, [error]);

  return (
    <html lang="ko">
      <body className="flex min-h-screen items-center justify-center bg-white px-4 font-sans antialiased">
        <div className="mx-auto max-w-md text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-ink-muted">오류</p>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            사이트를 불러올 수 없습니다
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
            예기치 못한 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-8 inline-flex items-center justify-center gap-2 bg-accent px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-ink"
          >
            다시 시도
          </button>
        </div>
      </body>
    </html>
  );
}
