import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "관리자 페이지 | Boam79 포트폴리오",
  description: "문의 내역 관리 페이지",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

