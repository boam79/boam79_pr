'use client';

import Button from '@/components/ui/Button';
import { routes } from '@/lib/constants/routes';
import { pageContainerClass } from '@/lib/constants/layout';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const featuredNames = [
  { rank: '01', title: 'CompanyFlow', note: '회사별 맞춤 업무관리' },
  { rank: '02', title: 'Boardroom (hem)', note: '병원 경영회의 시뮬레이터' },
  { rank: '03', title: '환자 데이터 분석 툴', note: '운영 지표 대시보드' },
];

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
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(15,118,110,0.12),transparent_50%),radial-gradient(ellipse_at_90%_20%,rgba(24,24,27,0.06),transparent_45%),linear-gradient(180deg,#f4f7f6_0%,#fafafa_55%,#fafafa_100%)]"
        aria-hidden
      />

      <div className={`relative ${pageContainerClass} py-20 sm:py-24 lg:py-28`}>
        <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div variants={container} initial="hidden" animate="show">
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
              코드는 Cursor 등 AI와 함께 설계하고 구현합니다.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <Button href={routes.experience} size="lg" className="w-full justify-center sm:w-auto">
                개발 경력
              </Button>
              <Button
                href={routes.projects}
                variant="secondary"
                size="lg"
                className="w-full justify-center sm:w-auto"
              >
                프로젝트 <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </motion.div>
          </motion.div>

          <motion.ol
            variants={container}
            initial="hidden"
            animate="show"
            className="hidden border-t border-zinc-200 pt-6 lg:block"
            aria-label="대표작"
          >
            {featuredNames.map((work) => (
              <motion.li
                key={work.rank}
                variants={item}
                className="flex items-baseline justify-between gap-4 border-b border-zinc-200 py-4"
              >
                <div>
                  <p className="font-display text-sm font-semibold tabular-nums tracking-[0.16em] text-teal-800">
                    {work.rank}
                  </p>
                  <p className="mt-1 font-display text-xl font-semibold tracking-tight text-zinc-900">
                    {work.title}
                  </p>
                </div>
                <p className="max-w-[11rem] text-right text-sm leading-6 text-zinc-500">{work.note}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
