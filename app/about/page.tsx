'use client';

import Image from 'next/image';
import FadeInUp from '@/components/ui/FadeInUp';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeInUp>
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 drop-shadow-lg">
              About Boam79
            </h1>
          </div>
        </FadeInUp>

        <div className="prose prose-lg max-w-none">
          <FadeInUp delay={0.1}>
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Professional Summary</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                21년간 헬스케어 시설관리 분야에서 쌓은 실무 경험과 컴퓨터공학 전공 지식을 결합하여
                의료기관의 디지털 전환(Digital Transformation)을 선도하는 전문가입니다.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                단순한 시설 유지보수를 넘어, ERP 구축, 데이터 분석, AI 기술을 활용하여
                병원 운영 효율화와 환자 경험 개선에 기여하고 있습니다.
              </p>
            </section>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Career Philosophy</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl border-2 border-white/50 shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="text-4xl mb-4">🔧</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">기술과 현장의 융합</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    이론이 아닌 실무에서 검증된 솔루션으로 문제를 해결합니다
                  </p>
                </div>
                <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl border-2 border-white/50 shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">데이터 기반 의사결정</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    경험과 직관을 넘어 데이터로 증명 가능한 개선을 만들어냅니다
                  </p>
                </div>
                <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl border-2 border-white/50 shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="text-4xl mb-4">🏥</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">헬스케어 특화 전문성</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    병원 인증평가, 의료가스, 의료기기 관리 등 헬스케어 도메인 지식을 보유하고 있습니다
                  </p>
                </div>
              </div>
            </section>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Timeline</h2>
              <div className="space-y-6">
                {[
                  { year: 1998, event: "시설관리 경력 시작 (국립의료원)" },
                  { year: 2004, event: "한양사이버대학교 컴퓨터공학과 입학" },
                  { year: 2008, event: "컴퓨터공학 학위 취득" },
                  { year: 2019, event: "헬스케어 분야 전환 (새빛안과병원)" },
                  { year: 2023, event: "병원 IT 인프라 구축 경험 (ERP, 네트워크)" },
                  { year: 2024, event: "카카오임팩트 AI TOP 100 참가" },
                  { year: 2024, event: "환자 데이터 분석 툴 개발 시작" },
                ].map((milestone, index) => (
                  <FadeInUp key={`${milestone.year}-${index}`} delay={0.4 + index * 0.05}>
                    <div className="flex gap-6 items-start bg-white/90 backdrop-blur-md p-4 rounded-lg border border-white/50 hover:shadow-lg transition-shadow">
                      <div className="font-bold text-2xl text-blue-600 w-24">{milestone.year}</div>
                      <div className="text-xl text-gray-700 pt-1">{milestone.event}</div>
                    </div>
                  </FadeInUp>
                ))}
              </div>
            </section>
          </FadeInUp>
        </div>
      </div>
    </div>
  );
}

