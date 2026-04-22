'use client';

import FadeInUp from '@/components/ui/FadeInUp';
import Card from '@/components/ui/Card';

export default function AboutPage() {
  return (
    <div className="min-h-screen border-t border-zinc-200/80 bg-[#fafafa]">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 md:px-8 lg:max-w-3xl">
        <FadeInUp>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">소개</h1>
        </FadeInUp>

        <div className="mt-10 space-y-12">
          <FadeInUp delay={0.05}>
            <section>
              <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500">요약</h2>
              <p className="mt-3 text-base leading-relaxed text-zinc-700">
                21년간 헬스케어 시설관리 분야에서 쌓은 실무 경험과 컴퓨터공학 전공 지식을 결합하여
                의료기관의 디지털 전환에 기여해 왔습니다.
              </p>
              <p className="mt-4 text-base leading-relaxed text-zinc-700">
                단순한 시설 유지보수를 넘어, ERP 구축, 데이터 분석, AI 기술을 활용해
                병원 운영 효율화에 참여해 왔습니다.
              </p>
            </section>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <section>
              <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500">방향</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <Card className="p-4 shadow-none">
                  <h3 className="text-sm font-semibold text-zinc-900">기술과 현장</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    실무에서 검증된 접근으로 문제를 정의합니다.
                  </p>
                </Card>
                <Card className="p-4 shadow-none">
                  <h3 className="text-sm font-semibold text-zinc-900">데이터</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    측정 가능한 지표로 개선을 제시합니다.
                  </p>
                </Card>
                <Card className="p-4 shadow-none">
                  <h3 className="text-sm font-semibold text-zinc-900">의료·시설</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    인증, 의료가스, 설비 등 도메인을 이해합니다.
                  </p>
                </Card>
              </div>
            </section>
          </FadeInUp>

          <FadeInUp delay={0.15}>
            <section>
              <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500">타임라인</h2>
              <ul className="mt-4 space-y-3 border-t border-zinc-200 pt-4">
                {[
                  { year: 1998, event: '시설관리 경력 시작 (국립의료원)' },
                  { year: 2004, event: '한양사이버대학교 컴퓨터공학과 입학' },
                  { year: 2008, event: '컴퓨터공학 학위 취득' },
                  { year: 2019, event: '헬스케어 분야 전환 (새빛안과병원)' },
                  { year: 2023, event: '병원 IT 인프라 구축 (ERP, 네트워크)' },
                  { year: 2024, event: '카카오임팩트 AI TOP 100 참가' },
                  { year: 2024, event: '환자 데이터 분석 툴 개발 시작' },
                ].map((m) => (
                  <li key={`${m.year}-${m.event}`} className="flex gap-4 text-sm text-zinc-700">
                    <span className="w-14 shrink-0 font-medium tabular-nums text-zinc-500">{m.year}</span>
                    <span className="leading-relaxed">{m.event}</span>
                  </li>
                ))}
              </ul>
            </section>
          </FadeInUp>
        </div>
      </div>
    </div>
  );
}
