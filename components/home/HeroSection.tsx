'use client';

import Link from 'next/link';
import { routes } from '@/lib/constants/routes';
import Button from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative border-b border-zinc-200/80 bg-zinc-50">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-24 md:px-8 lg:max-w-4xl lg:py-28">
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-zinc-500">
          의료 시설 · IT
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
          Boam79
        </h1>

        <h2 className="mt-6 text-lg font-medium leading-snug text-zinc-800 sm:text-xl md:text-2xl md:leading-relaxed">
          시설·운영 경험을 바탕으로
          <span className="mt-1 block text-zinc-700">
            IT 도입·개발을 실무에 맞게 정리합니다
          </span>
        </h2>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-600 md:text-lg">
          병원 현장에서의 운영·규정·리스크를 고려해 요구사항을 정리합니다.
          화면·데이터·배포까지 실제 사용 가능한 수준으로 구현합니다.
        </p>

        <dl className="mt-10 grid max-w-xl grid-cols-1 gap-6 border-t border-zinc-200 pt-10 sm:grid-cols-3 sm:gap-8">
          <div>
            <dt className="text-xs font-medium text-zinc-500">시설관리</dt>
            <dd className="mt-1 text-2xl font-semibold tabular-nums text-zinc-900">21년</dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-zinc-500">자격·면허</dt>
            <dd className="mt-1 text-2xl font-semibold tabular-nums text-zinc-900">7개</dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-zinc-500">참여</dt>
            <dd className="mt-1 text-sm font-medium leading-tight text-zinc-800">
              AI TOP100
              <span className="mt-0.5 block text-xs font-normal text-zinc-500">카카오임팩트</span>
            </dd>
          </div>
        </dl>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Link href={routes.experience}>
            <Button size="lg" className="w-full justify-center sm:w-auto">
              경력 보기
            </Button>
          </Link>
          <Link href={`${routes.contact}#contact-primary`}>
            <Button variant="secondary" size="lg" className="w-full justify-center sm:w-auto">
              문의 <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
