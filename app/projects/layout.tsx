import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '프로젝트 | Boam79 포트폴리오',
  description: '환자 데이터 분석 툴 개발 프로젝트. Next.js, Python 기반 헬스케어 데이터 분석 및 시각화 도구.',
  keywords: [
    '프로젝트',
    '환자 데이터 분석',
    '헬스케어',
    'Next.js',
    'Python',
    '데이터 시각화',
    '대시보드',
    '병원 시스템',
  ],
  openGraph: {
    title: '프로젝트 | Boam79 포트폴리오',
    description: '환자 데이터 분석 툴 개발 프로젝트. Next.js, Python 기반 헬스케어 데이터 분석 및 시각화 도구.',
    type: 'website',
  },
};

export default function ProjectsPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

