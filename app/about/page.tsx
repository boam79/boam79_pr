'use client';

import FadeInUp from '@/components/ui/FadeInUp';
import PageHeader from '@/components/ui/PageHeader';
import { readingContainerClass } from '@/lib/constants/layout';
import { SITE_AI_BUILT, SITE_DIRECTION } from '@/lib/constants/site';

const principles = [
  {
    title: '기술과 현장',
    body: '실무에서 검증된 접근으로 문제를 정의합니다.',
  },
  {
    title: '데이터',
    body: '측정 가능한 지표로 개선을 제시합니다.',
  },
  {
    title: '의료·시설',
    body: '인증, 의료가스, 설비 등 도메인을 이해합니다.',
  },
];

const timeline = [
  { year: 1998, event: '시설관리 경력 시작 (국립의료원)' },
  { year: 2004, event: '한양사이버대학교 컴퓨터공학과 입학' },
  { year: 2008, event: '컴퓨터공학 학위 취득' },
  { year: 2019, event: '헬스케어 분야 전환 (새빛안과병원)' },
  { year: 2023, event: '병원 IT 인프라 구축 (ERP, 네트워크)' },
  { year: 2025, event: '환자 데이터 분석 툴 개발 시작' },
  { year: 2025, event: '카카오임팩트 AI TOP 100 참가' },
  { year: 2026, event: 'Boardroom 등 공개 프로젝트를 AI와 함께 구현' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen border-t border-zinc-200/80 bg-[var(--bg-page)]">
      <div className={`${readingContainerClass} py-16 lg:py-20`}>
        <FadeInUp>
          <PageHeader title="소개" description="현장 21년과 디지털 도구를 같은 문제로 잇습니다." />
        </FadeInUp>

        <div className="space-y-14">
          <FadeInUp delay={0.05}>
            <section>
              <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">요약</h2>
              <p className="mt-3 text-base leading-7 text-zinc-700">
                21년간 헬스케어 시설관리 분야에서 쌓은 실무 경험과 컴퓨터공학 전공 지식을 결합하여
                의료기관의 디지털 전환에 기여해 왔습니다.
              </p>
              <p className="mt-4 text-base leading-7 text-zinc-700">
                단순한 시설 유지보수를 넘어, ERP 구축, 데이터 분석, AI 기술을 활용해
                병원 운영 효율화에 참여해 왔습니다.
              </p>
            </section>
          </FadeInUp>

          <FadeInUp delay={0.08}>
            <section>
              <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">개발 방향</h2>
              <p className="mt-3 text-base leading-7 text-zinc-700">{SITE_DIRECTION}</p>
              <ul className="mt-4 space-y-3">
                {[
                  '병원 운영 데이터·자산·재고를 현장에서 바로 쓰는 도구로 만듭니다.',
                  '경영 의사결정은 멀티 모델 AI 토론(Boardroom)으로 비교 가능하게 합니다.',
                  '공공데이터·지원사업·감가상각 같은 총무 실무는 MCP로 자동화합니다.',
                ].map((line) => (
                  <li key={line} className="flex gap-3 text-sm leading-7 text-zinc-600">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-700" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </section>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <section>
              <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">AI로 개발</h2>
              <p className="mt-3 text-base leading-7 text-zinc-700">{SITE_AI_BUILT}</p>
              <p className="mt-4 text-base leading-7 text-zinc-700">
                현장 문제 정의와 도메인 판단은 사람이 하고, 설계·코드·테스트·배포는 AI와 짧은 주기로
                반복합니다. GitHub 공개 저장소가 그 작업 기록입니다.
              </p>
            </section>
          </FadeInUp>

          <FadeInUp delay={0.12}>
            <section>
              <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">원칙</h2>
              <div className="mt-5 grid gap-8 sm:grid-cols-3">
                {principles.map((item) => (
                  <div key={item.title} className="border-l-2 border-l-teal-700 pl-4">
                    <h3 className="text-sm font-semibold text-zinc-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">{item.body}</p>
                  </div>
                ))}
              </div>
            </section>
          </FadeInUp>

          <FadeInUp delay={0.15}>
            <section>
              <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">타임라인</h2>
              <ol className="relative mt-6 space-y-0 border-l border-zinc-200 pl-6">
                {timeline.map((m) => (
                  <li key={`${m.year}-${m.event}`} className="relative pb-5 last:pb-0">
                    <span
                      className="absolute -left-[1.7rem] top-1.5 h-2 w-2 rounded-full bg-teal-700"
                      aria-hidden
                    />
                    <p className="text-xs font-medium tabular-nums text-zinc-500">{m.year}</p>
                    <p className="mt-1 text-sm leading-6 text-zinc-700">{m.event}</p>
                  </li>
                ))}
              </ol>
            </section>
          </FadeInUp>
        </div>
      </div>
    </div>
  );
}
