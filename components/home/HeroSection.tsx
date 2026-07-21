'use client';

import Link from 'next/link';
import { routes } from '@/lib/constants/routes';
import Button from '@/components/ui/Button';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative overflow-hidden border-b border-zinc-200/80">
      {/* Full-bleed visual plane */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(15,118,110,0.12),transparent_50%),radial-gradient(ellipse_at_90%_20%,rgba(24,24,27,0.06),transparent_45%),linear-gradient(180deg,#f4f7f6_0%,#fafafa_55%,#fafafa_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(0deg,rgba(250,250,250,0.95),transparent)]"
        aria-hidden
      />

      {/* Edge-to-edge product frame */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] lg:block" aria-hidden>
        <div className="absolute inset-0 bg-[linear-gradient(105deg,transparent_0%,rgba(15,118,110,0.04)_40%,rgba(15,118,110,0.08)_100%)]" />
        <div className="absolute bottom-[12%] left-[8%] right-0 top-[18%] overflow-hidden border border-zinc-200/80 bg-white/70 shadow-[0_20px_60px_-28px_rgba(15,23,42,0.35)] backdrop-blur-sm">
          <div className="flex h-9 items-center gap-1.5 border-b border-zinc-200/80 bg-zinc-50/90 px-3">
            <span className="h-2 w-2 rounded-full bg-zinc-300" />
            <span className="h-2 w-2 rounded-full bg-zinc-300" />
            <span className="h-2 w-2 rounded-full bg-zinc-300" />
            <span className="ml-3 text-[10px] font-medium tracking-wide text-zinc-400">
              patient-analysis · dashboard
            </span>
          </div>
          <div className="grid h-[calc(100%-2.25rem)] grid-cols-[72px_1fr]">
            <div className="space-y-2 border-r border-zinc-100 bg-zinc-50/60 p-3">
              {['요약', '질병', '수술', '지역'].map((label, i) => (
                <div
                  key={label}
                  className={`h-6 text-[9px] leading-6 ${
                    i === 0 ? 'bg-teal-700/90 text-center text-white' : 'bg-zinc-200/80 text-center text-zinc-500'
                  }`}
                >
                  {label}
                </div>
              ))}
            </div>
            <div className="space-y-3 p-4">
              <div className="flex gap-2">
                <div className="h-14 flex-1 bg-teal-50/90 ring-1 ring-teal-100" />
                <div className="h-14 flex-1 bg-zinc-100" />
                <div className="h-14 flex-1 bg-zinc-100" />
              </div>
              <div className="h-24 bg-[linear-gradient(180deg,rgba(15,118,110,0.18),rgba(15,118,110,0.02))] ring-1 ring-teal-100/80" />
              <div className="grid grid-cols-3 gap-2">
                <div className="h-10 bg-zinc-100" />
                <div className="h-10 bg-zinc-100" />
                <div className="h-10 bg-zinc-100" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-24 md:px-8 lg:max-w-6xl lg:py-28">
        <motion.div
          className="max-w-xl lg:max-w-2xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={item}
            className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-teal-800"
          >
            Healthcare × Frontend
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-semibold tracking-tight text-zinc-900 sm:text-6xl md:text-7xl"
          >
            Boam79
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-lg font-medium leading-snug text-zinc-800 sm:text-xl md:text-2xl md:leading-relaxed"
          >
            현장 요구를 화면과 데이터로 정리하는
            <span className="mt-1 block text-teal-800">프론트엔드 · 풀스택 구현</span>
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-base leading-relaxed text-zinc-600 md:text-lg"
          >
            병원 운영 맥락을 아는 개발로, 대시보드·도구를 실제 쓸 수 있는 수준까지 만듭니다.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Link href={routes.experience}>
              <Button size="lg" className="w-full justify-center sm:w-auto">
                개발 경력
              </Button>
            </Link>
            <Link href={routes.projects}>
              <Button variant="secondary" size="lg" className="w-full justify-center sm:w-auto">
                프로젝트 <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
