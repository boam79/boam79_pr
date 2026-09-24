import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '소개 | Boam79 포트폴리오',
  description: '21년 헬스케어 시설·운영 경험과 AI 협업 개발. 병원 운영 도구, 경영회의 시뮬레이터, 공공데이터 MCP가 현재 방향입니다.',
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
    description: '21년 헬스케어 시설·운영 경험과 AI 협업 개발. 병원 운영 도구, 경영회의 시뮬레이터, 공공데이터 MCP가 현재 방향입니다.',
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

