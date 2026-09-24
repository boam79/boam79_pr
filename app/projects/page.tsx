'use client';

import { useMemo, useState, useTransition } from 'react';
import { featuredProject } from '@/lib/data/projects';
import { developmentCareers } from '@/lib/data/careers';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import FadeInUp from '@/components/ui/FadeInUp';
import PageHeader from '@/components/ui/PageHeader';
import StackFilter from '@/components/ui/StackFilter';
import FeaturedCareerGrid from '@/components/experience/FeaturedCareerGrid';
import GitHubSyncStatus from '@/components/github/GitHubSyncStatus';
import GitHubRepoGrid from '@/components/github/GitHubRepoGrid';
import { pageContainerClass } from '@/lib/constants/layout';
import { collectStackChips, filterCareersByStack, mergeGitHubCareers, splitDevelopmentCareers } from '@/lib/utils/splitCareers';
import { useGitHubCareers } from '@/lib/hooks/useGitHubCareers';
import { ExternalLink, Github } from 'lucide-react';

function TechPills({ label, items }: { label: string; items?: string[] }) {
  if (!items?.length) return null;
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {items.map((tech) => (
          <span key={tech} className="border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-700">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [stackFilter, setStackFilter] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { careers: githubCareers, syncedAt, isLoading, error } = useGitHubCareers();
  const featured = useMemo(() => splitDevelopmentCareers(developmentCareers).featured, []);

  const sideProjects = useMemo(() => {
    const merged = mergeGitHubCareers(
      developmentCareers.filter((career) => career.github),
      githubCareers
    );
    const featuredIds = new Set(featured.map((item) => item.id));
    return merged.filter((career) => career.github && !featuredIds.has(career.id));
  }, [githubCareers, featured]);

  const chips = useMemo(() => collectStackChips(sideProjects, 6), [sideProjects]);
  const filteredSides = useMemo(
    () => filterCareersByStack(sideProjects, stackFilter),
    [sideProjects, stackFilter]
  );

  return (
    <div className="min-h-screen border-t border-zinc-200/80 bg-[var(--bg-page)]">
      <div className={`${pageContainerClass} py-16 lg:py-20`}>
        <FadeInUp>
          <PageHeader
            title="프로젝트"
            description="대표작을 먼저 보고, 이어서 환자 분석 툴 케이스와 GitHub 최신 빌드를 봅니다."
          />
        </FadeInUp>

        {featured.length > 0 && (
          <FadeInUp delay={0.05}>
            <section className="mb-20" aria-label="대표작">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-zinc-900">대표작</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                CompanyFlow, Boardroom, 환자 데이터 분석.
              </p>
              <div className="mt-8">
                <FeaturedCareerGrid careers={featured} />
              </div>
            </section>
          </FadeInUp>
        )}

        <FadeInUp delay={0.08}>
          <article className="max-w-3xl border-t border-zinc-200 pt-10">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-700">Case study</p>
              <Badge variant={featuredProject.status}>
                {featuredProject.status === 'in-progress' ? '진행' : '완료'}
              </Badge>
            </div>

            <h2 className="font-display text-2xl font-semibold text-zinc-900 md:text-3xl">
              {featuredProject.title}
            </h2>
            <p className="mt-1 text-sm text-zinc-500">
              {featuredProject.period} · {featuredProject.role}
            </p>
            <p className="mt-4 text-base leading-7 text-zinc-700">{featuredProject.overview}</p>

            <section className="mt-12" aria-labelledby="context-heading">
              <h3 id="context-heading" className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                1. Context
              </h3>
              <dl className="mt-4 space-y-5">
                {(
                  [
                    ['문제', featuredProject.summary.problem],
                    ['해결', featuredProject.summary.solution],
                    ['성과', featuredProject.summary.impact],
                  ] as const
                ).map(([label, text]) => (
                  <div key={label} className="border-l-2 border-teal-700/70 pl-4">
                    <dt className="text-sm font-semibold text-zinc-900">{label}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-zinc-600">{text}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {featuredProject.designDecisions && featuredProject.designDecisions.length > 0 && (
              <section className="mt-12" aria-labelledby="ui-heading">
                <h3 id="ui-heading" className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                  2. UI decisions
                </h3>
                <ol className="mt-4 space-y-6">
                  {featuredProject.designDecisions.map((d, index) => (
                    <li key={d.title} className="grid gap-1 sm:grid-cols-[2rem_1fr]">
                      <span className="font-display text-lg font-semibold tabular-nums text-teal-700">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-zinc-900">{d.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-zinc-600">{d.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            <section className="mt-12" aria-labelledby="build-heading">
              <h3 id="build-heading" className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                3. Build
              </h3>
              <ul className="mt-4 space-y-2">
                {featuredProject.features.slice(0, 6).map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6 text-zinc-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-700" aria-hidden />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 space-y-5">
                <TechPills label="Frontend" items={featuredProject.techStack.frontend} />
                <TechPills label="Backend" items={featuredProject.techStack.backend} />
                <TechPills label="분석" items={featuredProject.techStack.dataAnalysis} />
              </div>
            </section>

            <div className="mt-10 flex flex-wrap gap-2">
              {featuredProject.demo && (
                <Button
                  href={featuredProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden />
                  데모
                </Button>
              )}
              {featuredProject.github && (
                <Button
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="md"
                >
                  <Github className="h-4 w-4" aria-hidden />
                  GitHub
                </Button>
              )}
            </div>
          </article>
        </FadeInUp>

        {sideProjects.length > 0 && (
          <FadeInUp delay={0.1}>
            <div className="mt-16 border-t border-zinc-200 pt-10">
              <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">GitHub 최신 순</h2>
              <p className="mt-2 text-sm text-zinc-600">대표작을 뺀 나머지 공개 저장소입니다.</p>
              <div className="mt-3">
                <GitHubSyncStatus
                  isLoading={isLoading}
                  error={error}
                  syncedAt={syncedAt}
                  count={githubCareers.length}
                />
              </div>
              <div className="mt-6">
                <StackFilter
                  chips={chips}
                  value={stackFilter}
                  onChange={(chip) => startTransition(() => setStackFilter(chip))}
                  label="사이드 프로젝트 스택 필터"
                />
              </div>
              <div className="mt-6">
                {filteredSides.length > 0 ? (
                  <GitHubRepoGrid
                    careers={filteredSides}
                    pending={isPending}
                    label="GitHub 최신 사이드 빌드"
                  />
                ) : (
                  <p className="py-6 text-sm text-zinc-500">해당 스택의 프로젝트가 없습니다.</p>
                )}
              </div>
            </div>
          </FadeInUp>
        )}
      </div>
    </div>
  );
}
