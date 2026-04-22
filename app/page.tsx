'use client';

import Link from 'next/link';
import { routes } from '@/lib/constants/routes';
import { featuredProject } from '@/lib/data/projects';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import FadeInUp from '@/components/ui/FadeInUp';
import HeroSection from '@/components/home/HeroSection';
import PageBackground from '@/components/ui/PageBackground';
import { ArrowRight, Code, Mail, BarChart3, Building2 } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* Value Proposition */}
      <section className="relative py-32 overflow-hidden">
        <PageBackground imageSrc="/window.svg" overlayClassName="bg-white/85" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700 ring-1 ring-blue-100 mb-6">
                핵심 가치 제안
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
                현장 문제를 디지털로 해결합니다
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                의료기관 운영의 병목을 업무 관점에서 이해하고,
                데이터·개발·시설 운영 경험을 결합해 실행 가능한 개선안으로 연결합니다.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="grid gap-6 md:grid-cols-3 mb-14">
              <Card className="p-8 bg-white/90">
                <Code className="w-10 h-10 text-blue-700 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">개발 실행력</h3>
                <p className="text-gray-700 leading-relaxed">
                  Next.js/Python 기반으로 실무에서 바로 사용하는 내부 도구를 빠르게 구현합니다.
                </p>
              </Card>
              <Card className="p-8 bg-white/90">
                <Building2 className="w-10 h-10 text-emerald-700 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">현장 전문성</h3>
                <p className="text-gray-700 leading-relaxed">
                  병원 시설·안전·운영 프로세스를 이해해 현실적인 개선 우선순위를 설계합니다.
                </p>
              </Card>
              <Card className="p-8 bg-white/90">
                <BarChart3 className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">데이터 기반 개선</h3>
                <p className="text-gray-700 leading-relaxed">
                  대시보드/리포트 자동화로 의사결정 속도와 운영 가시성을 함께 높입니다.
                </p>
              </Card>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="text-center flex flex-wrap justify-center gap-3">
              <Link href={routes.about}>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg bg-white/90">
                  소개 자세히 보기 <ArrowRight className="ml-2 inline" size={20} />
                </Button>
              </Link>
              <Link href={routes.experience}>
                <Button variant="secondary" size="lg" className="px-8 py-4 text-lg">
                  관련 경력 확인하기
                </Button>
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* KPI Section */}
      <section className="relative py-32 overflow-hidden">
        <PageBackground imageSrc="/globe.svg" overlayClassName="bg-white/85" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-14">
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700 ring-1 ring-gray-200 mb-6">
                신뢰 지표
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
                숫자로 보는 역량
              </h2>
              <p className="text-lg md:text-xl text-gray-700">
                운영 경험과 기술 실행력을 함께 갖춘 하이브리드 프로필
              </p>
            </div>
          </FadeInUp>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { label: '시설관리 경력', value: '21년', note: '의료기관 포함 현장 운영 경험' },
              { label: '자격·면허', value: '7개', note: '안전·기술·운전 관련 자격 보유' },
              { label: '최근 GitHub 프로젝트', value: '6+', note: '실서비스/프로토타입 지속 개발' },
            ].map((item, index) => (
              <FadeInUp key={item.label} delay={index * 0.08}>
                <Card className="p-8 bg-white/90">
                  <p className="text-sm font-semibold text-gray-600 mb-3">{item.label}</p>
                  <p className="text-4xl font-extrabold text-gray-900 mb-3">{item.value}</p>
                  <p className="text-gray-600 leading-relaxed">{item.note}</p>
                </Card>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp delay={0.3}>
            <div className="text-center mt-12">
              <Link href={routes.skills}>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg bg-white/90">
                  스킬 전체 보기 <ArrowRight className="ml-2 inline" size={20} />
                </Button>
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Featured Project Summary */}
      <section className="relative py-32 overflow-hidden">
        <PageBackground imageSrc="/next.svg" overlayClassName="bg-white/85" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
                대표 프로젝트 요약
              </h2>
              <p className="text-lg text-gray-700">문제-해결-성과 기준으로 핵심만 확인할 수 있습니다.</p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <Card className="p-10 max-w-5xl mx-auto bg-white/90">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    {featuredProject.title}
                  </h3>
                  <p className="text-lg text-gray-600">{featuredProject.period}</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">{featuredProject.overview}</p>

              <div className="grid gap-4 md:grid-cols-3 mb-8">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <h4 className="text-sm font-bold text-gray-900 mb-2">문제</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{featuredProject.summary.problem}</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <h4 className="text-sm font-bold text-gray-900 mb-2">해결</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{featuredProject.summary.solution}</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <h4 className="text-sm font-bold text-gray-900 mb-2">성과</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{featuredProject.summary.impact}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {featuredProject.techStack.frontend?.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-base font-medium border border-blue-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link href={routes.projects}>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg bg-white/90">
                  프로젝트 상세 분석 보기 <ArrowRight className="ml-2 inline" size={20} />
                </Button>
              </Link>
            </Card>
          </FadeInUp>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <PageBackground imageSrc="/file.svg" overlayClassName="bg-gray-900/80" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInUp>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              바로 대화해볼까요?
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-10">
              프로젝트 협업·채용 문의를 간단히 남겨주세요.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href={`${routes.contact}#contact-form`}>
                <Button variant="secondary" size="lg" className="px-8 py-4 text-lg bg-white/90">
                  <Mail className="mr-2 inline" size={18} />
                  문의 남기기
                </Button>
              </Link>
              <Link href={routes.contact}>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-white text-white hover:bg-white/10">
                  연락처 전체 보기
                </Button>
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
