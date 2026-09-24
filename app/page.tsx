'use client';

import { routes } from '@/lib/constants/routes';
import { pageContainerClass } from '@/lib/constants/layout';
import { developmentCareers } from '@/lib/data/careers';
import { splitDevelopmentCareers } from '@/lib/utils/splitCareers';
import Button from '@/components/ui/Button';
import FadeInUp from '@/components/ui/FadeInUp';
import FeaturedCareerGrid from '@/components/experience/FeaturedCareerGrid';
import HeroSection from '@/components/home/HeroSection';
import { ArrowRight, Mail } from 'lucide-react';

export default function Home() {
  const featured = splitDevelopmentCareers(developmentCareers).featured;

  return (
    <div className="bg-[var(--bg-page)]">
      <HeroSection />

      <section className="border-b border-zinc-200/80 bg-white py-16 md:py-20">
        <div className={pageContainerClass}>
          <FadeInUp>
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
                현장 문제를 디지털로 해결합니다
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-600 md:text-lg">
                의료기관 운영의 병목을 업무 관점에서 이해하고, 화면·데이터·배포까지 실행 가능한
                개선으로 연결합니다. 21년 시설·운영 경험과 7개 자격·면허, 카카오임팩트 AI TOP100
                참여가 그 판단의 근거입니다. 이 사이트와 공개 저장소는 AI와 함께 개발했습니다.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={routes.about} variant="outline" size="md">
                소개
              </Button>
              <Button href={`${routes.experience}?tab=facility`} variant="secondary" size="md">
                시설 경력
              </Button>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="border-b border-zinc-200/80 bg-[var(--bg-page)] py-16 md:py-20">
        <div className={pageContainerClass}>
          <FadeInUp>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
                  대표작
                </h2>
                <p className="mt-2 text-sm text-zinc-600">CompanyFlow, Boardroom, 환자 데이터 분석</p>
              </div>
              <Button href={routes.experience} variant="outline" size="sm">
                경력에서 보기 <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.08}>
            <div className="mt-10">
              <FeaturedCareerGrid careers={featured} />
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="bg-zinc-900 py-16 text-zinc-100 md:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 md:px-8">
          <FadeInUp>
            <h2 className="font-display text-xl font-semibold md:text-2xl">문의</h2>
            <p className="mt-3 text-sm text-zinc-400">협업·채용 문의를 남겨 주세요.</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href={`${routes.contact}#contact-form`}
                variant="secondary"
                size="md"
                className="border-zinc-600 bg-white text-zinc-900 hover:bg-zinc-100"
              >
                <Mail className="h-4 w-4" aria-hidden />
                문의하기
              </Button>
              <Button
                href={routes.contact}
                variant="outline"
                size="md"
                className="border-zinc-600 text-zinc-200 hover:bg-zinc-800 hover:text-white"
              >
                연락처
              </Button>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
