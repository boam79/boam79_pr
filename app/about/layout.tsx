import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '소개 | Boam79 포트폴리오',
  description: '21년간 헬스케어 시설관리 분야에서 쌓은 실무 경험과 컴퓨터공학 전공 지식을 결합한 디지털 전환 전문가.',
  keywords: [
    '박재민',
    '소개',
    '경력',
    '헬스케어 시설관리',
    '디지털 전환',
    '컴퓨터공학',
    '병원 시설관리',
  ],
  openGraph: {
    title: '소개 | Boam79 포트폴리오',
    description: '21년간 헬스케어 시설관리 분야에서 쌓은 실무 경험과 컴퓨터공학 전공 지식을 결합한 디지털 전환 전문가.',
    type: 'website',
  },
};

export default function AboutPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

