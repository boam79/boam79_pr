'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { routes } from '@/lib/constants/routes';
import Button from '@/components/ui/Button';
import { RotateCcw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled application error:', error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center border-t border-zinc-200/80 bg-[#fafafa] px-4">
      <div className="mx-auto max-w-md text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">오류</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
          문제가 발생했습니다
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          페이지를 불러오는 중 예기치 못한 오류가 발생했습니다. 다시 시도하거나 홈으로 이동해 주세요.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            variant="primary"
            size="md"
            className="inline-flex items-center gap-2"
            onClick={reset}
          >
            <RotateCcw className="h-4 w-4" aria-hidden />
            다시 시도
          </Button>
          <Link href={routes.home}>
            <Button variant="outline" size="md" className="inline-flex items-center gap-2">
              <Home className="h-4 w-4" aria-hidden />
              홈으로
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
