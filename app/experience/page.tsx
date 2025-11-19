'use client';

import { useState, useEffect } from 'react';
import { developmentCareers, facilityCareers } from '@/lib/data/careers';
import CareerCard from '@/components/experience/CareerCard';
import FadeInUp from '@/components/ui/FadeInUp';
import { motion, AnimatePresence } from 'framer-motion';

export default function ExperiencePage() {
  const [activeTab, setActiveTab] = useState<'development' | 'facility'>('development');
  const [githubCareers, setGithubCareers] = useState<import('@/types/career').Career[]>([]);

  useEffect(() => {
    const loadGithubRepos = async () => {
      try {
        // Replace 'boam79' with your actual GitHub username if different
        const repos = await import('@/lib/github').then(m => m.fetchGitHubRepos('boam79'));
        setGithubCareers(repos);
      } catch (error) {
        console.error('Failed to load GitHub repos', error);
      }
    };

    if (activeTab === 'development') {
      loadGithubRepos();
    }
  }, [activeTab]);

  // Merge static and dynamic careers, avoiding duplicates based on GitHub URL
  const mergedDevelopmentCareers = [
    ...developmentCareers,
    ...githubCareers.filter(repo =>
      !developmentCareers.some(staticCareer =>
        staticCareer.github === repo.github ||
        (staticCareer.title && repo.title && staticCareer.title.toLowerCase() === repo.title.toLowerCase())
      )
    )
  ].sort((a, b) => {
    // Sort by end date (present first, then new to old)
    const getEndDate = (dateStr: string) => dateStr === 'present' ? new Date() : new Date(dateStr);
    return getEndDate(b.period.end).getTime() - getEndDate(a.period.end).getTime();
  });

  const currentCareers = activeTab === 'development' ? mergedDevelopmentCareers : facilityCareers;

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
      </div>

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

        {/* Tab Navigation */}
        <FadeInUp delay={0.1}>
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-white/90 backdrop-blur-md rounded-xl p-1 shadow-lg">
              <button
                onClick={() => setActiveTab('development')}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${activeTab === 'development'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                개발 경력
              </button>
              <button
                onClick={() => setActiveTab('facility')}
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

