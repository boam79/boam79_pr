'use client';

import { Suspense, useMemo, useState, useTransition } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { developmentCareers, facilityCareers } from '@/lib/data/careers';
import CareerCard from '@/components/experience/CareerCard';
import FeaturedCareer from '@/components/experience/FeaturedCareer';
import GitHubSyncStatus from '@/components/github/GitHubSyncStatus';
import GitHubRepoGrid from '@/components/github/GitHubRepoGrid';
import FadeInUp from '@/components/ui/FadeInUp';
import { motion, AnimatePresence } from 'framer-motion';
import {
  splitDevelopmentCareers,
  filterCareersByStack,
  collectStackChips,
  mergeGitHubCareers,
} from '@/lib/utils/splitCareers';
import { useGitHubCareers } from '@/lib/hooks/useGitHubCareers';
import { Loader2 } from 'lucide-react';

type CareerTab = 'development' | 'facility';

function ExperienceContent() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab: CareerTab = searchParams.get('tab') === 'facility' ? 'facility' : 'development';
  const {
    careers: githubCareers,
    syncedAt,
    isLoading: isGithubLoading,
    error: githubError,
  } = useGitHubCareers();
  const [stackFilter, setStackFilter] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tab: CareerTab) => {
    setStackFilter(null);
    const next = new URLSearchParams(searchParams.toString());
    next.set('tab', tab);
    router.replace(`${pathname}?${next.toString()}`);
  };

  const mergedDevelopmentCareers = useMemo(
    () => mergeGitHubCareers(developmentCareers, githubCareers),
    [githubCareers]
  );

  const filteredDevelopment = useMemo(
    () => filterCareersByStack(mergedDevelopmentCareers, stackFilter),
    [mergedDevelopmentCareers, stackFilter]
  );

  const { featured, rest } = useMemo(
    () => splitDevelopmentCareers(filteredDevelopment),
    [filteredDevelopment]
  );

  const stackChips = useMemo(
    () => collectStackChips(mergedDevelopmentCareers),
    [mergedDevelopmentCareers]
  );

  const developmentCount = mergedDevelopmentCareers.length;
  const facilityCount = facilityCareers.length;

  return (
    <div className="min-h-screen border-t border-zinc-200/80 bg-[var(--bg-page)]">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:px-8 lg:max-w-6xl lg:py-20">
        <FadeInUp>
          <div className="mb-12 text-left">
            <h1 className="font-display text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
              경력
            </h1>
            <p className="mt-2 text-sm text-zinc-600 md:text-base">
              구현·화면을 먼저, 현장 운영 경험은 이어서. 공개 저장소는 GitHub 최신 푸시를 따라갑니다.
            </p>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.08}>
          <div
            className="mb-8 flex w-full max-w-md border border-zinc-200 bg-zinc-100/80 p-1"
            role="tablist"
            aria-label="경력 유형"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'development'}
              onClick={() => handleTabChange('development')}
              className={`flex-1 px-4 py-2.5 text-sm font-medium transition-colors ${
                activeTab === 'development'
                  ? 'bg-white text-zinc-900 shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              개발
              <span className="ml-1.5 tabular-nums text-zinc-400">{developmentCount}</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'facility'}
              onClick={() => handleTabChange('facility')}
              className={`flex-1 px-4 py-2.5 text-sm font-medium transition-colors ${
                activeTab === 'facility'
                  ? 'bg-white text-zinc-900 shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              시설관리
              <span className="ml-1.5 tabular-nums text-zinc-400">{facilityCount}</span>
            </button>
          </div>
        </FadeInUp>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'development' ? (
              <div className={isPending ? 'opacity-70 transition-opacity' : ''}>
                {stackChips.length > 0 && (
                  <div className="mb-8" role="group" aria-label="기술 스택 필터">
                    <p className="mb-2 text-xs font-medium uppercase tracking-wide text-zinc-500">
                      스택으로 보기
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => startTransition(() => setStackFilter(null))}
                        className={`border px-3 py-1.5 text-xs font-medium transition-colors ${
                          stackFilter === null
                            ? 'border-teal-700 bg-teal-700 text-white'
                            : 'border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300'
                        }`}
                      >
                        전체
                      </button>
                      {stackChips.map((chip) => (
                        <button
                          type="button"
                          key={chip}
                          onClick={() =>
                            startTransition(() =>
                              setStackFilter((prev) => (prev === chip ? null : chip))
                            )
                          }
                          className={`border px-3 py-1.5 text-xs font-medium transition-colors ${
                            stackFilter === chip
                              ? 'border-teal-700 bg-teal-700 text-white'
                              : 'border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300'
                          }`}
                        >
                          {chip}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-6 min-h-[1.25rem]">
                  <GitHubSyncStatus
                    isLoading={isGithubLoading}
                    error={githubError}
                    syncedAt={syncedAt}
                    count={githubCareers.length}
                  />
                </div>

                {featured.length > 0 && (
                  <section className="mb-14 max-w-3xl space-y-12" aria-label="대표 개발 경력">
                    {featured.map((career) => (
                      <FeaturedCareer key={career.id} career={career} />
                    ))}
                  </section>
                )}

                {rest.length > 0 && (
                  <section aria-label="GitHub 최신 순">
                    <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                      GitHub 최신 순
                    </h2>
                    <p className="mt-2 text-sm text-zinc-600">
                      최신 푸시가 왼쪽부터 가로로 이어집니다.
                    </p>
                    <div className="mt-6">
                      <GitHubRepoGrid
                        careers={rest}
                        pending={isPending}
                        label="GitHub 최신 공개 저장소"
                      />
                    </div>
                  </section>
                )}

                {featured.length === 0 && rest.length === 0 && (
                  <p className="text-sm text-zinc-500">해당 스택의 항목이 없습니다.</p>
                )}
              </div>
            ) : (
              <div className="max-w-3xl space-y-8">
                {facilityCareers.map((career) => (
                  <CareerCard key={career.id} career={career} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function ExperiencePageFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center border-t border-zinc-200/80 bg-[var(--bg-page)] px-4">
      <div
        className="flex items-center gap-2 border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-600"
        role="status"
        aria-live="polite"
      >
        <Loader2 className="h-4 w-4 animate-spin text-zinc-500" />
        불러오는 중
      </div>
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <Suspense fallback={<ExperiencePageFallback />}>
      <ExperienceContent />
    </Suspense>
  );
}
