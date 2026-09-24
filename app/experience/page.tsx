'use client';

import { Suspense, useEffect, useMemo, useState, useTransition } from 'react';
import { useSearchParams } from 'next/navigation';
import { developmentCareers, facilityCareers } from '@/lib/data/careers';
import CareerCard from '@/components/experience/CareerCard';
import FeaturedCareerGrid from '@/components/experience/FeaturedCareerGrid';
import GitHubSyncStatus from '@/components/github/GitHubSyncStatus';
import GitHubRepoGrid from '@/components/github/GitHubRepoGrid';
import FadeInUp from '@/components/ui/FadeInUp';
import PageHeader from '@/components/ui/PageHeader';
import StackFilter from '@/components/ui/StackFilter';
import { pageContainerClass } from '@/lib/constants/layout';
import { motion, AnimatePresence } from 'framer-motion';
import {
  splitDevelopmentCareers,
  filterCareersByStack,
  collectStackChips,
  mergeGitHubCareers,
} from '@/lib/utils/splitCareers';
import {
  experienceTabHref,
  parseExperienceTab,
  readExperienceTabFromSearch,
  type CareerTab,
} from '@/lib/utils/experienceTab';
import { useGitHubCareers } from '@/lib/hooks/useGitHubCareers';
import { Loader2 } from 'lucide-react';

function ExperienceContent() {
  const searchParams = useSearchParams();
  const urlTab = parseExperienceTab(searchParams.get('tab'));
  const [tabOverride, setTabOverride] = useState<CareerTab | null>(null);
  if (tabOverride !== null && tabOverride === urlTab) {
    setTabOverride(null);
  }
  const activeTab = tabOverride ?? urlTab;
  const {
    careers: githubCareers,
    syncedAt,
    isLoading: isGithubLoading,
    error: githubError,
  } = useGitHubCareers();
  const [stackFilter, setStackFilter] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const onPopState = () => {
      setTabOverride(readExperienceTabFromSearch(window.location.search));
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const handleTabChange = (tab: CareerTab) => {
    if (tab === activeTab) return;
    setStackFilter(null);
    setTabOverride(tab);
    window.history.replaceState(window.history.state, '', experienceTabHref(tab, searchParams));
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
    <div className="min-h-screen border-t border-line bg-page">
      <div className={`${pageContainerClass} py-16 lg:py-20`}>
        <FadeInUp>
          <PageHeader
            title="경력"
            description="구현·화면을 먼저, 현장 운영 경험은 이어서. 공개 저장소는 GitHub 최신 푸시를 따라갑니다."
          />
        </FadeInUp>

        <div
          className="relative z-20 mb-8 flex w-full max-w-md border border-line bg-surface p-1"
          role="tablist"
          aria-label="경력 유형"
        >
          <a
            href={experienceTabHref('development', searchParams)}
            role="tab"
            aria-selected={activeTab === 'development'}
            aria-label={`개발 ${developmentCount}개`}
            onClick={(event) => {
              if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
              event.preventDefault();
              handleTabChange('development');
            }}
            className={`flex-1 cursor-pointer px-4 py-2.5 text-center text-sm font-medium transition-colors ${
              activeTab === 'development'
                ? 'bg-white text-ink shadow-sm'
                : 'text-ink-secondary hover:text-ink'
            }`}
          >
            개발
            <span className="ml-1.5 tabular-nums text-ink-muted">{developmentCount}개</span>
          </a>
          <a
            href={experienceTabHref('facility', searchParams)}
            role="tab"
            aria-selected={activeTab === 'facility'}
            aria-label={`시설관리 ${facilityCount}개`}
            onClick={(event) => {
              if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
              event.preventDefault();
              handleTabChange('facility');
            }}
            className={`flex-1 cursor-pointer px-4 py-2.5 text-center text-sm font-medium transition-colors ${
              activeTab === 'facility'
                ? 'bg-white text-ink shadow-sm'
                : 'text-ink-secondary hover:text-ink'
            }`}
          >
            시설관리
            <span className="ml-1.5 tabular-nums text-ink-muted">{facilityCount}개</span>
          </a>
        </div>

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
                <div className="mb-8">
                  <StackFilter
                    chips={stackChips}
                    value={stackFilter}
                    onChange={(chip) => startTransition(() => setStackFilter(chip))}
                    label="기술 스택 필터"
                  />
                </div>

                <div className="mb-6 min-h-[1.25rem]">
                  <GitHubSyncStatus
                    isLoading={isGithubLoading}
                    error={githubError}
                    syncedAt={syncedAt}
                    count={githubCareers.length}
                  />
                </div>

                {featured.length > 0 && (
                  <section className="mb-20" aria-label="대표작">
                    <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                      대표작
                    </h2>
                    <p className="mt-2 max-w-2xl text-base leading-7 text-ink-secondary">
                      CompanyFlow, Boardroom, 환자 데이터 분석. 큰 화면에서는 한 줄에, 휴대폰에서는 옆으로 밀어 봅니다.
                    </p>
                    <div className="mt-8">
                      <FeaturedCareerGrid careers={featured} />
                    </div>
                  </section>
                )}

                {rest.length > 0 && (
                  <section aria-label="GitHub 최신 순">
                    <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                      GitHub 최신 순
                    </h2>
                    <p className="mt-2 text-sm text-ink-secondary">
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
                  <p className="text-sm text-ink-muted">해당 스택의 항목이 없습니다.</p>
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
    <div className="flex min-h-screen items-center justify-center border-t border-line bg-page px-4">
      <div
        className="flex items-center gap-2 border border-line bg-white px-4 py-3 text-sm text-ink-secondary"
        role="status"
        aria-live="polite"
      >
        <Loader2 className="h-4 w-4 animate-spin text-ink-muted" />
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
