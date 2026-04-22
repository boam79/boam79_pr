'use client';

import { featuredProject } from '@/lib/data/projects';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import FadeInUp from '@/components/ui/FadeInUp';
import PageBackground from '@/components/ui/PageBackground';
import Button from '@/components/ui/Button';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen">
      <PageBackground imageSrc="/next.svg" overlayClassName="bg-white/85" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeInUp>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 drop-shadow-lg">
              프로젝트
            </h1>
            <p className="text-xl text-gray-700 drop-shadow-md">
              주요 프로젝트와 성과를 확인하세요
            </p>
          </div>
        </FadeInUp>

        <div className="max-w-4xl mx-auto">
          <FadeInUp delay={0.1}>
            <Card className="p-8 bg-white/90 backdrop-blur-md border-2 border-white/50 shadow-xl">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                    {featuredProject.title}
                  </h2>
                  <Badge variant={featuredProject.status}>
                    {featuredProject.status === 'in-progress' ? '진행중' : '완료'}
                  </Badge>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">{featuredProject.overview}</p>
              </div>

              <div className="grid gap-4 md:grid-cols-3 mb-8">
                <div className="rounded-xl border border-rose-100 bg-rose-50/70 p-4">
                  <p className="text-sm font-semibold text-rose-700 mb-2">문제</p>
                  <p className="text-sm text-rose-900 leading-relaxed">{featuredProject.summary.problem}</p>
                </div>
                <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-4">
                  <p className="text-sm font-semibold text-blue-700 mb-2">해결</p>
                  <p className="text-sm text-blue-900 leading-relaxed">{featuredProject.summary.solution}</p>
                </div>
                <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-4">
                  <p className="text-sm font-semibold text-emerald-700 mb-2">성과</p>
                  <p className="text-sm text-emerald-900 leading-relaxed">{featuredProject.summary.impact}</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">목표</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {featuredProject.objectives.map((obj, index) => (
                    <li key={index}>{obj}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">주요 기능</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {featuredProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">기술 스택</h3>
                <div className="space-y-2">
                  {featuredProject.techStack.frontend && (
                    <div>
                      <span className="text-sm font-medium text-gray-600">Frontend: </span>
                      <span className="text-sm text-gray-700">
                        {featuredProject.techStack.frontend.join(', ')}
                      </span>
                    </div>
                  )}
                  {featuredProject.techStack.backend && (
                    <div>
                      <span className="text-sm font-medium text-gray-600">Backend: </span>
                      <span className="text-sm text-gray-700">
                        {featuredProject.techStack.backend.join(', ')}
                      </span>
                    </div>
                  )}
                  {featuredProject.techStack.dataAnalysis && (
                    <div>
                      <span className="text-sm font-medium text-gray-600">Data Analysis: </span>
                      <span className="text-sm text-gray-700">
                        {featuredProject.techStack.dataAnalysis.join(', ')}
                      </span>
                    </div>
                  )}
                  {featuredProject.techStack.visualization && (
                    <div>
                      <span className="text-sm font-medium text-gray-600">Visualization: </span>
                      <span className="text-sm text-gray-700">
                        {featuredProject.techStack.visualization.join(', ')}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {featuredProject.challenges && featuredProject.challenges.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">도전 과제</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {featuredProject.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                {featuredProject.demo && (
                  <a href={featuredProject.demo} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" className="inline-flex items-center gap-2">
                      <ExternalLink size={16} />
                      데모 보기
                    </Button>
                  </a>
                )}
                {featuredProject.github && (
                  <a href={featuredProject.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="inline-flex items-center gap-2">
                      <Github size={16} />
                      GitHub 보기
                    </Button>
                  </a>
                )}
              </div>
            </Card>
          </FadeInUp>
        </div>
      </div>
    </div>
  );
}

