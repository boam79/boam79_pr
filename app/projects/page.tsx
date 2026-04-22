'use client';

import { featuredProject } from '@/lib/data/projects';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import FadeInUp from '@/components/ui/FadeInUp';
import Button from '@/components/ui/Button';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen border-t border-zinc-200/80 bg-[#fafafa]">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:px-8 lg:max-w-2xl">
        <FadeInUp>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">프로젝트</h1>
          <p className="mt-2 text-sm text-zinc-600">요약 · 세부</p>
        </FadeInUp>

        <FadeInUp delay={0.08}>
          <Card className="mt-10 p-6 md:p-8">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-semibold text-zinc-900">{featuredProject.title}</h2>
              <Badge variant={featuredProject.status}>
                {featuredProject.status === 'in-progress' ? '진행' : '완료'}
              </Badge>
            </div>
            <p className="text-sm text-zinc-500">{featuredProject.period}</p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-700 md:text-base">{featuredProject.overview}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-zinc-200 bg-zinc-50/80 p-4">
                <p className="text-xs font-medium text-zinc-500">문제</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-800">{featuredProject.summary.problem}</p>
              </div>
              <div className="rounded-lg border border-zinc-200 bg-zinc-50/80 p-4">
                <p className="text-xs font-medium text-zinc-500">해결</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-800">{featuredProject.summary.solution}</p>
              </div>
              <div className="rounded-lg border border-zinc-200 bg-zinc-50/80 p-4 sm:col-span-1">
                <p className="text-xs font-medium text-zinc-500">성과</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-800">{featuredProject.summary.impact}</p>
              </div>
            </div>

            <h3 className="mt-8 text-xs font-medium uppercase tracking-wide text-zinc-500">목표</h3>
            <ul className="mt-2 list-inside list-disc space-y-1.5 text-sm text-zinc-700">
              {featuredProject.objectives.map((obj, index) => (
                <li key={index} className="pl-0.5">
                  {obj}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-xs font-medium uppercase tracking-wide text-zinc-500">기능</h3>
            <ul className="mt-2 list-inside list-disc space-y-1.5 text-sm text-zinc-700">
              {featuredProject.features.map((feature, index) => (
                <li key={index} className="pl-0.5">
                  {feature}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-xs font-medium uppercase tracking-wide text-zinc-500">기술 스택</h3>
            <div className="mt-3 space-y-1.5 text-sm text-zinc-700">
              {featuredProject.techStack.frontend && (
                <p>
                  <span className="text-zinc-500">Frontend: </span>
                  {featuredProject.techStack.frontend.join(', ')}
                </p>
              )}
              {featuredProject.techStack.backend && (
                <p>
                  <span className="text-zinc-500">Backend: </span>
                  {featuredProject.techStack.backend.join(', ')}
                </p>
              )}
              {featuredProject.techStack.dataAnalysis && (
                <p>
                  <span className="text-zinc-500">분석: </span>
                  {featuredProject.techStack.dataAnalysis.join(', ')}
                </p>
              )}
              {featuredProject.techStack.visualization && (
                <p>
                  <span className="text-zinc-500">시각화: </span>
                  {featuredProject.techStack.visualization.join(', ')}
                </p>
              )}
            </div>

            {featuredProject.challenges && featuredProject.challenges.length > 0 && (
              <>
                <h3 className="mt-8 text-xs font-medium uppercase tracking-wide text-zinc-500">과제</h3>
                <ul className="mt-2 list-inside list-disc space-y-1.5 text-sm text-zinc-700">
                  {featuredProject.challenges.map((challenge, index) => (
                    <li key={index} className="pl-0.5">
                      {challenge}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="mt-8 flex flex-wrap gap-2">
              {featuredProject.demo && (
                <a href={featuredProject.demo} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" className="inline-flex items-center gap-2" size="md">
                    <ExternalLink className="h-4 w-4" />
                    데모
                  </Button>
                </a>
              )}
              {featuredProject.github && (
                <a href={featuredProject.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="inline-flex items-center gap-2" size="md">
                    <Github className="h-4 w-4" />
                    GitHub
                  </Button>
                </a>
              )}
            </div>
          </Card>
        </FadeInUp>
      </div>
    </div>
  );
}
