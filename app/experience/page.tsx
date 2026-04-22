'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { developmentCareers, facilityCareers } from '@/lib/data/careers';
import CareerCard from '@/components/experience/CareerCard';
import FadeInUp from '@/components/ui/FadeInUp';
import { motion, AnimatePresence } from 'framer-motion';
import { compareCareerEndDates } from '@/lib/utils/date';
import { AlertCircle, Loader2 } from 'lucide-react';

type CareerTab = 'development' | 'facility';

function ExperienceContent() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') === 'facility' ? 'facility' : 'development';

  const [activeTab, setActiveTab] = useState<CareerTab>(initialTab);
  const [githubCareers, setGithubCareers] = useState<import('@/types/career').Career[]>([]);
  const [isGithubLoading, setIsGithubLoading] = useState(true);
  const [githubError, setGithubError] = useState<string | null>(null);

  useEffect(() => {
    const tabFromUrl = searchParams.get('tab') === 'facility' ? 'facility' : 'development';
    if (tabFromUrl !== activeTab) {
      setActiveTab(tabFromUrl);
    }
  }, [activeTab, searchParams]);

  useEffect(() => {
    const loadGithubRepos = async () => {
      try {
        setIsGithubLoading(true);
        setGithubError(null);
        const response = await fetch('/api/github-careers');
        if (!response.ok) {
          throw new Error(`GitHub careers API failed with ${response.status}`);
        }

        const repos = (await response.json()) as import('@/types/career').Career[];
        setGithubCareers(repos);
      } catch (error) {
        console.error('Failed to load GitHub repos', error);
        setGithubError('GitHub 경력을 불러오지 못했습니다. 잠시 후 다시 시도해주세요.');
      } finally {
        setIsGithubLoading(false);
      }
    };

    loadGithubRepos();
  }, []);

  const handleTabChange = (tab: CareerTab) => {
    setActiveTab(tab);
    const next = new URLSearchParams(searchParams.toString());
    next.set('tab', tab);
    router.replace(`${pathname}?${next.toString()}`);
  };

  // Merge static and dynamic careers, avoiding duplicates based on GitHub URL
  const mergedDevelopmentCareers = useMemo(
    () =>
      [
        ...developmentCareers,
        ...githubCareers.filter(
          (repo) =>
            !developmentCareers.some(
              (staticCareer) =>
                staticCareer.github === repo.github ||
                (staticCareer.title &&
                  repo.title &&
                  staticCareer.title.toLowerCase() === repo.title.toLowerCase())
            )
        ),
      ].sort((a, b) => compareCareerEndDates(a.period.end, b.period.end)),
    [githubCareers]
  );

  const currentCareers = activeTab === 'development' ? mergedDevelopmentCareers : facilityCareers;

  return (
    <div className="min-h-screen border-t border-zinc-200/80 bg-[#fafafa]">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:px-8 lg:max-w-4xl lg:py-20">
        <FadeInUp>
          <div className="mb-12 text-left">
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">경력</h1>
            <p className="mt-2 text-sm text-zinc-600 md:text-base">개발 · 시설관리</p>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.05}>
          <p className="mb-8 text-xs leading-relaxed text-zinc-500">
            GitHub 기반 항목은 API로 불러옵니다. URL에 <code className="rounded bg-zinc-200/80 px-1.5 py-0.5 text-zinc-800">?tab=facility</code> 로
            시설만 볼 수 있습니다.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="mb-10 flex w-full max-w-md rounded-lg border border-zinc-200 bg-zinc-100/80 p-1">
            <button
              type="button"
              onClick={() => handleTabChange('development')}
              className={`flex-1 rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
                activeTab === 'development'
                  ? 'bg-white text-zinc-900 shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              개발
            </button>
            <button
              type="button"
              onClick={() => handleTabChange('facility')}
              className={`flex-1 rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
                activeTab === 'facility' ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              시설관리
            </button>
          </div>
        </FadeInUp>

        {activeTab === 'development' && (
          <FadeInUp delay={0.15}>
            <div className="mb-8">
              {isGithubLoading ? (
                <div
                  className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-600"
                  role="status"
                  aria-live="polite"
                >
                  <Loader2 className="h-4 w-4 shrink-0 animate-spin text-zinc-500" />
                  GitHub 동기화 중
                </div>
              ) : githubError ? (
                <div
                  className="flex items-start gap-2 rounded-lg border border-amber-200/90 bg-amber-50/90 px-4 py-3 text-sm text-amber-950"
                  role="alert"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{githubError}</span>
                </div>
              ) : (
                <p className="text-sm text-zinc-500">GitHub 항목을 반영했습니다.</p>
              )}
            </div>
          </FadeInUp>
        )}

        {/* Career Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            {currentCareers.map((career, index) => (
              <motion.div
                key={career.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: Math.min(index * 0.05, 0.3) }}
              >
                <CareerCard career={career} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function ExperiencePageFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center border-t border-zinc-200/80 bg-[#fafafa] px-4">
      <div
        className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-600"
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

