'use client';

import Link from 'next/link';
import { routes } from '@/lib/constants/routes';
import { featuredProject } from '@/lib/data/projects';
import Button from '@/components/ui/Button';
import FadeInUp from '@/components/ui/FadeInUp';
import HeroSection from '@/components/home/HeroSection';
import { ArrowRight, Mail, ExternalLink } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-[var(--bg-page)]">
      <HeroSection />

      <section className="border-b border-zinc-200/80 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 md:px-8 lg:max-w-5xl">
          <FadeInUp>
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
                현장 문제를 디지털로 해결합니다
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-600 md:text-lg">
                의료기관 운영의 병목을 업무 관점에서 이해하고, 화면·데이터·배포까지 실행 가능한
                개선으로 연결합니다. 21년 시설·운영 경험과 7개 자격·면허, 카카오임팩트 AI TOP100
                참여가 그 판단의 근거입니다.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={routes.about}>
                <Button variant="outline" size="md">
                  소개
                </Button>
              </Link>
              <Link href={`${routes.experience}?tab=facility`}>
                <Button variant="secondary" size="md">
                  시설 경력
                </Button>
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="border-b border-zinc-200/80 bg-[var(--bg-page)] py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 md:px-8 lg:max-w-5xl">
          <FadeInUp>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
                  대표 프로젝트
                </h2>
                <p className="mt-2 text-sm text-zinc-600">문제 · UI · 성과</p>
              </div>
              <Link
                href={routes.projects}
                className="inline-flex items-center gap-1 text-sm font-medium text-teal-800 hover:underline"
              >
                전체 보기 <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.08}>
            <article className="mt-10 grid gap-8 border-t border-zinc-200 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
              <div>
                <h3 className="font-display text-xl font-semibold text-zinc-900 md:text-2xl">
                  {featuredProject.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">{featuredProject.period}</p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
                  {featuredProject.overview}
                </p>

                <dl className="mt-8 space-y-5">
                  {(
                    [
                      ['문제', featuredProject.summary.problem],
                      ['해결', featuredProject.summary.solution],
                      ['성과', featuredProject.summary.impact],
                    ] as const
                  ).map(([label, text]) => (
                    <div key={label} className="border-l-2 border-teal-700/70 pl-4">
                      <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                        {label}
                      </dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-zinc-700">{text}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredProject.techStack.frontend?.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {featuredProject.demo && (
                    <a href={featuredProject.demo} target="_blank" rel="noopener noreferrer">
                      <Button size="md" className="inline-flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" aria-hidden />
                        데모
                      </Button>
                    </a>
                  )}
                  <Link href={routes.projects}>
                    <Button variant="outline" size="md">
                      케이스 스터디
                    </Button>
                  </Link>
                </div>
              </div>

              {/* UI frame placeholder — 스크린샷 슬롯 */}
              <div className="relative min-h-[240px] overflow-hidden border border-zinc-200 bg-white lg:min-h-[320px]">
                <div className="flex h-8 items-center gap-1.5 border-b border-zinc-100 bg-zinc-50 px-3">
                  <span className="h-2 w-2 rounded-full bg-zinc-300" />
                  <span className="h-2 w-2 rounded-full bg-zinc-300" />
                  <span className="h-2 w-2 rounded-full bg-zinc-300" />
                </div>
                <div className="space-y-3 p-5">
                  <div className="h-3 w-1/3 bg-zinc-200" />
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-16 bg-teal-50 ring-1 ring-teal-100" />
                    <div className="h-16 bg-zinc-100" />
                    <div className="h-16 bg-zinc-100" />
                  </div>
                  <div className="h-28 bg-[linear-gradient(180deg,rgba(15,118,110,0.16),transparent)]" />
                  <p className="text-center text-[11px] text-zinc-400">
                    UI 프리뷰 · 스크린샷 준비 중
                  </p>
                </div>
              </div>
            </article>
          </FadeInUp>
        </div>
      </section>

      <section className="bg-zinc-900 py-16 text-zinc-100 md:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 md:px-8">
          <FadeInUp>
            <h2 className="font-display text-xl font-semibold md:text-2xl">문의</h2>
            <p className="mt-3 text-sm text-zinc-400">협업·채용 문의를 남겨 주세요.</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={`${routes.contact}#contact-form`}>
                <Button
                  variant="secondary"
                  size="md"
                  className="border-zinc-600 bg-white text-zinc-900 hover:bg-zinc-100"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  문의하기
                </Button>
              </Link>
              <Link href={routes.contact}>
                <Button
                  variant="outline"
                  size="md"
                  className="border-zinc-600 text-zinc-200 hover:bg-zinc-800 hover:text-white"
                >
                  연락처
                </Button>
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
