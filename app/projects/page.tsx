'use client';

import { useMemo, useState, useTransition } from 'react';
import { featuredProject } from '@/lib/data/projects';
import { developmentCareers } from '@/lib/data/careers';
import Badge from '@/components/ui/Badge';
import FadeInUp from '@/components/ui/FadeInUp';
import Button from '@/components/ui/Button';
import GitHubSyncStatus from '@/components/github/GitHubSyncStatus';
import GitHubRepoGrid from '@/components/github/GitHubRepoGrid';
import { ExternalLink, Github } from 'lucide-react';
import { filterCareersByStack, collectStackChips, mergeGitHubCareers } from '@/lib/utils/splitCareers';
import { useGitHubCareers } from '@/lib/hooks/useGitHubCareers';

function ProjectVisualSlot({ title }: { title: string }) {
  const hasImages = (featuredProject.images?.length ?? 0) > 0;

  if (hasImages && featuredProject.images?.[0]) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={featuredProject.images[0]}
        alt={`${title} 화면`}
        className="h-full w-full object-cover object-top"
      />
    );
  }

  return (
    <div className="flex h-full min-h-[220px] flex-col bg-[linear-gradient(160deg,#f0fdfa_0%,#fafafa_45%,#f4f4f5_100%)]">
      <div className="flex h-8 items-center gap-1.5 border-b border-zinc-200/80 bg-white/80 px-3">
        <span className="h-2 w-2 rounded-full bg-zinc-300" />
        <span className="h-2 w-2 rounded-full bg-zinc-300" />
        <span className="h-2 w-2 rounded-full bg-zinc-300" />
        <span className="ml-2 text-[10px] text-zinc-400">dashboard preview</span>
      </div>
      <div className="grid flex-1 grid-cols-[64px_1fr] gap-0">
        <div className="space-y-2 border-r border-zinc-200/60 p-3">
          {['요약', '질병', '수술', '지역'].map((t, i) => (
            <div
              key={t}
              className={`h-5 text-center text-[9px] leading-5 ${
                i === 0 ? 'bg-teal-700 text-white' : 'bg-zinc-200/70 text-zinc-500'
              }`}
            >
              {t}
            </div>
          ))}
        </div>
        <div className="space-y-3 p-4">
          <div className="grid grid-cols-3 gap-2">
            <div className="h-12 bg-teal-50 ring-1 ring-teal-100" />
            <div className="h-12 bg-zinc-100" />
            <div className="h-12 bg-zinc-100" />
          </div>
          <div className="h-24 bg-[linear-gradient(180deg,rgba(15,118,110,0.2),transparent)]" />
          <p className="text-center text-[11px] text-zinc-400">
            스크린샷 슬롯 · `public/projects/` 에 이미지 추가 시 자동 표시
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [stackFilter, setStackFilter] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { careers: githubCareers, syncedAt, isLoading, error } = useGitHubCareers();

  const sideProjects = useMemo(() => {
    const merged = mergeGitHubCareers(
      developmentCareers.filter((career) => career.github),
      githubCareers
    );
    return merged.filter((career) => career.github);
  }, [githubCareers]);

  const chips = useMemo(() => collectStackChips(sideProjects, 6), [sideProjects]);
  const filteredSides = useMemo(
    () => filterCareersByStack(sideProjects, stackFilter),
    [sideProjects, stackFilter]
  );

  return (
    <div className="min-h-screen border-t border-zinc-200/80 bg-[var(--bg-page)]">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:px-8 lg:max-w-6xl">
        <FadeInUp>
          <div className="max-w-3xl">
            <h1 className="font-display text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
              프로젝트
            </h1>
            <p className="mt-2 text-sm text-zinc-600">
              케이스 스터디 · GitHub 최신 사이드 빌드
            </p>
          </div>
        </FadeInUp>

        {/* Case study */}
        <FadeInUp delay={0.06}>
          <article className="mt-12 max-w-3xl border-t border-zinc-200 pt-10">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-700">
                Case study
              </p>
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
            <p className="mt-4 text-base leading-relaxed text-zinc-700">
              {featuredProject.overview}
            </p>

            <div className="mt-8 overflow-hidden border border-zinc-200 bg-white">
              <ProjectVisualSlot title={featuredProject.title} />
            </div>

            <section className="mt-12" aria-labelledby="context-heading">
              <h3
                id="context-heading"
                className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500"
              >
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
                <h3
                  id="ui-heading"
                  className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500"
                >
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
              <h3
                id="build-heading"
                className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500"
              >
                3. Build
              </h3>
              <ul className="mt-4 list-inside list-disc space-y-1.5 text-sm text-zinc-700">
                {featuredProject.features.slice(0, 6).map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="mt-6 space-y-1.5 text-sm text-zinc-700">
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
              </div>
            </section>

            <div className="mt-10 flex flex-wrap gap-2">
              {featuredProject.demo && (
                <a href={featuredProject.demo} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" className="inline-flex items-center gap-2" size="md">
                    <ExternalLink className="h-4 w-4" aria-hidden />
                    데모
                  </Button>
                </a>
              )}
              {featuredProject.github && (
                <a href={featuredProject.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="inline-flex items-center gap-2" size="md">
                    <Github className="h-4 w-4" aria-hidden />
                    GitHub
                  </Button>
                </a>
              )}
            </div>
          </article>
        </FadeInUp>

        {sideProjects.length > 0 && (
          <FadeInUp delay={0.1}>
            <div className="mt-16 border-t border-zinc-200 pt-10">
              <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                GitHub 최신 순
              </h2>
              <p className="mt-2 text-sm text-zinc-600">
                최신 푸시가 왼쪽부터 가로로 이어집니다.
              </p>
              <div className="mt-3">
                <GitHubSyncStatus
                  isLoading={isLoading}
                  error={error}
                  syncedAt={syncedAt}
                  count={githubCareers.length}
                />
              </div>

              {chips.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="사이드 프로젝트 스택 필터">
                  <button
                    type="button"
                    onClick={() => startTransition(() => setStackFilter(null))}
                    className={`border px-3 py-1.5 text-xs font-medium ${
                      stackFilter === null
                        ? 'border-teal-700 bg-teal-700 text-white'
                        : 'border-zinc-200 bg-white text-zinc-600'
                    }`}
                  >
                    전체
                  </button>
                  {chips.map((chip) => (
                    <button
                      type="button"
                      key={chip}
                      onClick={() =>
                        startTransition(() =>
                          setStackFilter((prev) => (prev === chip ? null : chip))
                        )
                      }
                      className={`border px-3 py-1.5 text-xs font-medium ${
                        stackFilter === chip
                          ? 'border-teal-700 bg-teal-700 text-white'
                          : 'border-zinc-200 bg-white text-zinc-600'
                      }`}
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              )}

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
