import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Boam79 포트폴리오 | Healthcare Facility × IT 융합 전문가",
  description: "21년 시설관리 경력과 AI 기술을 융합한 헬스케어 디지털 전환 전문가. 병원 ERP 구축, 환자 데이터 분석, 의료기관 인증평가 경험 보유.",
  keywords: [
    "Boam79",
    "포트폴리오",
    "시설관리",
    "헬스케어 IT",
    "병원 시설관리",
    "의료 시설",
    "ERP 구축",
    "데이터 분석",
    "AI",
    "Next.js",
    "의료가스 관리",
    "전문병원인증",
  ],
  authors: [{ name: "Boam79" }],
  creator: "Boam79",
  openGraph: {
    title: "Boam79 포트폴리오 | Healthcare Facility × IT 융합 전문가",
    description: "21년 경력의 헬스케어 시설관리 및 IT 전문가",
    type: "website",
    locale: "ko_KR",
    siteName: "Boam79 포트폴리오",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boam79 포트폴리오 | Healthcare Facility × IT 융합 전문가",
    description: "21년 경력의 헬스케어 시설관리 및 IT 전문가",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Boam79',
    jobTitle: 'Healthcare Facility × IT 융합 전문가',
    description: '21년 시설관리 경력과 AI 기술을 융합한 헬스케어 디지털 전환 전문가',
    url: 'https://your-domain.com', // 실제 도메인으로 변경 필요
    sameAs: [
      'https://github.com/boam79',
      'https://linkedin.com/in/jaemin-park',
    ],
    knowsAbout: [
      '시설관리',
      '헬스케어 IT',
      '병원 시설관리',
      'ERP 구축',
      '데이터 분석',
      'AI',
      'Next.js',
      'Python',
      '의료가스 관리',
    ],
  };

  return (
    <html lang="ko">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
