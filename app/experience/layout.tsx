import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '경력사항 | Boam79 포트폴리오',
  description: '개발 경력: 환자 데이터 분석 툴 개발, 카카오임팩트 AI TOP 100 참가, ERP 구축. 시설관리 경력: 21년간 병원/제조업/공공기관 시설관리 전문가.',
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
    description: '개발 경력: 환자 데이터 분석 툴 개발, 카카오임팩트 AI TOP 100 참가, ERP 구축. 시설관리 경력: 21년간 병원/제조업/공공기관 시설관리 전문가.',
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

