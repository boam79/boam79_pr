import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '프로젝트 | Boam79 포트폴리오',
  description: '대표 케이스와 GitHub 최신 공개 저장소. 한 줄 소개는 README 분석 기준이며, 구현은 AI와 함께 했습니다.',
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
    description: '대표 케이스와 GitHub 최신 공개 저장소. 한 줄 소개는 README 분석 기준이며, 구현은 AI와 함께 했습니다.',
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

