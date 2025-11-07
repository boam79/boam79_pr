import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '스킬 | Boam79 포트폴리오',
  description: '개발 스킬: Next.js, TypeScript, Python, 데이터 분석. 시설관리 스킬: 전기설비, 기계설비, 의료가스 관리. 7개 자격증 보유.',
  keywords: [
    '스킬',
    '기술 스택',
    'Next.js',
    'TypeScript',
    'Python',
    '데이터 분석',
    '전기설비',
    '기계설비',
    '의료가스 관리',
    '자격증',
    '방화관리자',
  ],
  openGraph: {
    title: '스킬 | Boam79 포트폴리오',
    description: '개발 스킬: Next.js, TypeScript, Python, 데이터 분석. 시설관리 스킬: 전기설비, 기계설비, 의료가스 관리. 7개 자격증 보유.',
    type: 'website',
  },
};

export default function SkillsPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

