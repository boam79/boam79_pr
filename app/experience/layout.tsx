import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '경력사항 | Boam79 포트폴리오',
  description: '개발 경력은 GitHub 최신 공개 저장소를 따라갑니다. 시설관리 경력은 21년 병원·현장 운영입니다. 구현은 AI와 함께 했습니다.',
  keywords: [
    '경력',
    '개발 경력',
    '시설관리 경력',
    '병원 경력',
    'AI TOP 100',
    '환자 데이터 분석',
    'ERP 구축',
    '카카오임팩트',
    '좋은아침병원',
    '호산여성병원',
  ],
  openGraph: {
    title: '경력사항 | Boam79 포트폴리오',
    description: '개발 경력은 GitHub 최신 공개 저장소를 따라갑니다. 시설관리 경력은 21년 병원·현장 운영입니다. 구현은 AI와 함께 했습니다.',
    type: 'website',
  },
};

export default function ExperiencePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

