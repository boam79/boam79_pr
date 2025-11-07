'use client';

import Link from 'next/link';
import { routes } from '@/lib/constants/routes';
import { skillCategories } from '@/lib/data/skills';
import { featuredProject } from '@/lib/data/projects';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import FadeInUp from '@/components/ui/FadeInUp';
import HeroSection from '@/components/home/HeroSection';
import { ArrowRight, Code, Wrench, Award } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* About Preview */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
          }}
        >
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 drop-shadow-lg">
                About Boam79
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
                21년간 헬스케어 시설관리 분야에서 쌓은 실무 경험과 컴퓨터공학 전공 지식을 결합하여
                의료기관의 디지털 전환을 선도하는 전문가입니다.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center p-10 border-2 border-white/50 bg-white/90 backdrop-blur-md hover:border-blue-200 transition-colors shadow-xl">
                <Code className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">개발 역량</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Next.js, Python 기반 풀스택 개발 및 데이터 분석
                </p>
              </Card>
              <Card className="text-center p-10 border-2 border-white/50 bg-white/90 backdrop-blur-md hover:border-green-200 transition-colors shadow-xl">
                <Wrench className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">시설관리</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  21년 경력의 전기/기계 설비 및 의료가스 관리 전문
                </p>
              </Card>
              <Card className="text-center p-10 border-2 border-white/50 bg-white/90 backdrop-blur-md hover:border-orange-200 transition-colors shadow-xl">
                <Award className="w-16 h-16 text-orange-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI 역량</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  카카오임팩트 AI TOP 100 참가 및 헬스케어 AI 솔루션 개발
                </p>
              </Card>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="text-center">
              <Link href={routes.about}>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg shadow-xl bg-white/90 backdrop-blur-md">
                  더 알아보기 <ArrowRight className="ml-2 inline" size={20} />
                </Button>
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
          }}
        >
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 drop-shadow-lg">
                주요 스킬
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 drop-shadow-md">
                개발 및 시설관리 역량을 한눈에 확인하세요
              </p>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.slice(0, 3).map((category, index) => (
              <FadeInUp key={category.category} delay={index * 0.1}>
                <Card className="p-8 border-2 border-white/50 bg-white/90 backdrop-blur-md hover:border-blue-200 transition-colors shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.slice(0, 4).map((skill) => {
                      const percentage = (skill.level / 5) * 100;
                      return (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-2">
                            <span className="text-base font-semibold text-gray-700">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-500">{skill.level}/5</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Card>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp delay={0.3}>
            <div className="text-center mt-16">
              <Link href={routes.skills}>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg shadow-xl bg-white/90 backdrop-blur-md">
                  전체 스킬 보기 <ArrowRight className="ml-2 inline" size={20} />
                </Button>
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Featured Project */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
          }}
        >
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 drop-shadow-lg">
                주요 프로젝트
              </h2>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <Card className="p-10 max-w-5xl mx-auto border-2 border-white/50 bg-white/90 backdrop-blur-md hover:border-blue-200 transition-colors shadow-xl">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    {featuredProject.title}
                  </h3>
                  <p className="text-lg text-gray-600">{featuredProject.period}</p>
                </div>
              </div>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">{featuredProject.overview}</p>
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
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg shadow-xl bg-white/90 backdrop-blur-md">
                  프로젝트 상세 보기 <ArrowRight className="ml-2 inline" size={20} />
                </Button>
              </Link>
            </Card>
          </FadeInUp>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
          }}
        >
          <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInUp>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              함께 일하고 싶으신가요?
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 drop-shadow-md">
              프로젝트 협업이나 채용 문의를 환영합니다
            </p>
            <Link href={routes.contact}>
              <Button variant="secondary" size="lg" className="px-8 py-4 text-lg shadow-xl bg-white/90 backdrop-blur-md">
                연락하기
              </Button>
            </Link>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
