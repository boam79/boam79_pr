'use client';

import { useEffect } from 'react';

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
      <body className="flex min-h-screen items-center justify-center bg-[#fafafa] px-4 font-sans antialiased">
        <div className="mx-auto max-w-md text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">오류</p>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
            사이트를 불러올 수 없습니다
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">
            예기치 못한 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            다시 시도
          </button>
        </div>
      </body>
    </html>
  );
}
