'use client';

import Link from 'next/link';
import { routes } from '@/lib/constants/routes';
import { featuredProject } from '@/lib/data/projects';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import FadeInUp from '@/components/ui/FadeInUp';
import HeroSection from '@/components/home/HeroSection';
import { ArrowRight, Code, Mail, BarChart3, Building2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-[#fafafa]">
      <HeroSection />

      <section className="border-b border-zinc-200/80 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 md:px-8 lg:max-w-5xl">
          <FadeInUp>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">
                현장 문제를 디지털로 해결합니다
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-600 md:text-lg">
                의료기관 운영의 병목을 업무 관점에서 이해하고,
                데이터·개발·시설 운영 경험을 결합해 실행 가능한 개선안으로 연결합니다.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.08}>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <Card className="border-zinc-200/90 bg-white p-6 shadow-none">
                <Code className="mb-3 h-8 w-8 text-zinc-700" strokeWidth={1.5} />
                <h3 className="text-sm font-semibold text-zinc-900">개발 실행력</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Next.js/Python 기반으로 실무에서 바로 쓰는 내부 도구를 빠르게 구현합니다.
                </p>
              </Card>
              <Card className="border-zinc-200/90 bg-white p-6 shadow-none">
                <Building2 className="mb-3 h-8 w-8 text-zinc-700" strokeWidth={1.5} />
                <h3 className="text-sm font-semibold text-zinc-900">현장 전문성</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  병원 시설·안전·운영 프로세스를 이해해 현실적인 개선 순서를 잡습니다.
                </p>
              </Card>
              <Card className="border-zinc-200/90 bg-white p-6 shadow-none">
                <BarChart3 className="mb-3 h-8 w-8 text-zinc-700" strokeWidth={1.5} />
                <h3 className="text-sm font-semibold text-zinc-900">데이터 기반</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  대시보드·리포트로 의사결정과 운영 가시성을 높입니다.
                </p>
              </Card>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.12}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={routes.about}>
                <Button variant="outline" size="md">
                  소개
                </Button>
              </Link>
              <Link href={routes.experience}>
                <Button variant="secondary" size="md">
                  경력
                </Button>
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="border-b border-zinc-200/80 bg-zinc-50 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 md:px-8 lg:max-w-5xl">
          <FadeInUp>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">요약</h2>
              <p className="mt-3 text-sm text-zinc-500">운영 경험과 기술 실행</p>
            </div>
          </FadeInUp>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { label: '시설관리 경력', value: '21년', note: '의료기관 포함 현장 운영' },
              { label: '자격·면허', value: '7개', note: '안전·기술·운전' },
              { label: 'GitHub 프로젝트', value: '6+', note: '프로토타입·실서비스' },
            ].map((item, index) => (
              <FadeInUp key={item.label} delay={index * 0.06}>
                <Card className="border-zinc-200/90 bg-white p-6 shadow-none">
                  <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">{item.label}</p>
                  <p className="mt-2 text-3xl font-semibold tabular-nums text-zinc-900">{item.value}</p>
                  <p className="mt-2 text-sm text-zinc-600">{item.note}</p>
                </Card>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp delay={0.2}>
            <div className="mt-10 text-center">
              <Link href={routes.skills}>
                <Button variant="outline" size="md">
                  스킬 전체 <ArrowRight className="h-4 w-4" aria-hidden />
                </Button>
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="border-b border-zinc-200/80 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 md:px-8 lg:max-w-5xl">
          <FadeInUp>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">
                대표 프로젝트
              </h2>
              <p className="mt-3 text-sm text-zinc-600">문제 · 해결 · 성과</p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.08}>
            <Card className="mx-auto mt-10 max-w-3xl border-zinc-200/90 bg-white p-6 shadow-none md:p-8">
              <h3 className="text-lg font-semibold text-zinc-900">{featuredProject.title}</h3>
              <p className="mt-1 text-sm text-zinc-500">{featuredProject.period}</p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600">{featuredProject.overview}</p>

              <div className="mt-6 grid gap-3 md:grid-cols-3">
                <div className="rounded-lg border border-zinc-200 bg-zinc-50/80 p-4">
                  <p className="text-xs font-medium text-zinc-500">문제</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-700">{featuredProject.summary.problem}</p>
                </div>
                <div className="rounded-lg border border-zinc-200 bg-zinc-50/80 p-4">
                  <p className="text-xs font-medium text-zinc-500">해결</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-700">{featuredProject.summary.solution}</p>
                </div>
                <div className="rounded-lg border border-zinc-200 bg-zinc-50/80 p-4">
                  <p className="text-xs font-medium text-zinc-500">성과</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-700">{featuredProject.summary.impact}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {featuredProject.techStack.frontend?.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <Link href={routes.projects}>
                  <Button variant="outline" size="md">
                    상세 보기 <ArrowRight className="h-4 w-4" aria-hidden />
                  </Button>
                </Link>
              </div>
            </Card>
          </FadeInUp>
        </div>
      </section>

      <section className="bg-zinc-900 py-16 text-zinc-100 md:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 md:px-8">
          <FadeInUp>
            <h2 className="text-xl font-semibold md:text-2xl">문의</h2>
            <p className="mt-3 text-sm text-zinc-400">협업·채용 문의를 남겨 주세요.</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={`${routes.contact}#contact-form`}>
                <Button variant="secondary" size="md" className="border-zinc-600 bg-white text-zinc-900 hover:bg-zinc-100">
                  <Mail className="h-4 w-4" aria-hidden />
                  이메일로 문의
                </Button>
              </Link>
              <Link href={routes.contact}>
                <Button
                  variant="outline"
                  size="md"
                  className="border-zinc-600 text-zinc-200 hover:bg-zinc-800"
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
