'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { developmentCareers, facilityCareers } from '@/lib/data/careers';
import CareerCard from '@/components/experience/CareerCard';
import FadeInUp from '@/components/ui/FadeInUp';
import { motion, AnimatePresence } from 'framer-motion';
import { compareCareerEndDates } from '@/lib/utils/date';
import PageBackground from '@/components/ui/PageBackground';
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
    <div className="relative min-h-screen">
      <PageBackground imageSrc="/window.svg" overlayClassName="bg-white/85" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeInUp>
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 drop-shadow-lg">
              경력사항
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 drop-shadow-md">
              개발 경력과 시설관리 경력을 확인하세요
            </p>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.05}>
          <div className="mx-auto mb-8 flex w-full max-w-4xl flex-wrap gap-2 rounded-2xl border border-blue-100 bg-blue-50/80 p-3 text-sm text-blue-900">
            <span className="rounded-full bg-white px-3 py-1 font-semibold">최근 GitHub 활동 자동 반영</span>
            <span className="rounded-full bg-white px-3 py-1 font-semibold">실제 배포 링크/리포 확인 가능</span>
            <span className="rounded-full bg-white px-3 py-1 font-semibold">개발·시설관리 경력 분리 탐색</span>
          </div>
        </FadeInUp>

        {/* Tab Navigation */}
        <FadeInUp delay={0.1}>
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-white/90 backdrop-blur-md rounded-xl p-1 shadow-lg">
              <button
                onClick={() => handleTabChange('development')}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${activeTab === 'development'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                개발 경력
              </button>
              <button
                onClick={() => handleTabChange('facility')}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${activeTab === 'facility'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                시설관리 경력
              </button>
            </div>
          </div>
        </FadeInUp>

        {activeTab === 'development' && (
          <FadeInUp delay={0.15}>
            <div className="mx-auto mb-8 max-w-4xl">
              {isGithubLoading ? (
                <div
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-600 shadow-sm"
                  role="status"
                  aria-live="polite"
                >
                  <Loader2 className="h-4 w-4 animate-spin" />
                  GitHub 경력을 동기화하는 중입니다...
                </div>
              ) : githubError ? (
                <div
                  className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                  role="alert"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{githubError}</span>
                </div>
              ) : (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                  GitHub 기반 최신 프로젝트 경력이 자동으로 반영되었습니다.
                </div>
              )}
            </div>
          </FadeInUp>
        )}

        {/* Career Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {currentCareers.map((career, index) => (
              <motion.div
                key={career.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
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
    <div className="relative min-h-screen">
      <PageBackground imageSrc="/window.svg" overlayClassName="bg-white/85" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <div
          className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-600 shadow-sm"
          role="status"
          aria-live="polite"
        >
          <Loader2 className="h-4 w-4 animate-spin" />
          경력 페이지를 불러오는 중입니다...
        </div>
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

