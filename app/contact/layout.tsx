import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '연락하기 | Boam79 포트폴리오',
  description: '프로젝트 협업이나 채용 문의를 환영합니다. 헬스케어 IT 및 시설관리 전문가 박재민에게 연락하세요.',
  keywords: [
    '연락',
    '문의',
    '채용',
    '협업',
    '프로젝트',
    '헬스케어 IT',
    '시설관리',
  ],
  openGraph: {
    title: '연락하기 | Boam79 포트폴리오',
    description: '프로젝트 협업이나 채용 문의를 환영합니다. 헬스케어 IT 및 시설관리 전문가 박재민에게 연락하세요.',
    type: 'website',
  },
};

export default function ContactPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

