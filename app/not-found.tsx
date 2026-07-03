import Link from 'next/link';
import { routes } from '@/lib/constants/routes';
import Button from '@/components/ui/Button';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center border-t border-zinc-200/80 bg-[#fafafa] px-4">
      <div className="mx-auto max-w-md text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">404</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          요청하신 주소가 변경되었거나 존재하지 않습니다. 주소를 다시 확인하거나 홈으로 이동해 주세요.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href={routes.home}>
            <Button variant="primary" size="md" className="inline-flex items-center gap-2">
              <Home className="h-4 w-4" aria-hidden />
              홈으로
            </Button>
          </Link>
          <Link href={routes.contact}>
            <Button variant="outline" size="md" className="inline-flex items-center gap-2">
              연락하기 <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
