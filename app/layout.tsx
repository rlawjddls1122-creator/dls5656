import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "오늘의 작업 BGM",
  description:
    "지금 내 기분과 작업 종류에 맞는 플레이리스트를 추천해주는 큐레이션 도구",
  openGraph: {
    title: "오늘의 작업 BGM",
    description:
      "지금 내 기분과 작업 종류에 맞는 플레이리스트를 추천해주는 큐레이션 도구",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen font-sans selection:bg-glow/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
