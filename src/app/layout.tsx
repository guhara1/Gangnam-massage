import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { FloatingCallButton } from "@/components/floating-call-button";
import { HeaderNav } from "@/components/header-nav";
import { SiteFooter } from "@/components/site-footer";
import { baseUrl, gangnamAreas, navigation, siteUrl } from "@/lib/areas";

const defaultTitle = "강남 출장마사지 홈타이 | 강남구 지역별 이용 안내";
const defaultDescription =
  "강남 출장마사지 홈타이 이용 전 확인할 수 있는 강남구 주요 지역, 이용 절차, 요금 안내, 예약 전 주의사항을 정리했습니다.";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  applicationName: "Gangnam Care Guide",
  alternates: {
    types: {
      "application/rss+xml": siteUrl("/rss.xml"),
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.svg",
  },
  other: {
    "naver-site-verification": "28f2bf4a22319a31dd02e3feebc92f0b6a2a0ba8",
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl("/"),
    siteName: "Gangnam Care Guide",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: defaultTitle,
    description: defaultDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[rgba(15,20,25,0.92)] backdrop-blur-xl">
          <div className="mx-auto flex min-h-[68px] max-w-[1180px] flex-wrap items-center gap-4 px-5 sm:px-6">
            <Link href="/" className="text-xl font-extrabold tracking-[0] text-white">
              Gangnam <span className="text-[var(--accent)]">Care Guide</span>
            </Link>
            <HeaderNav areas={gangnamAreas} navigation={navigation} />
          </div>
        </header>
        {children}
        <SiteFooter />
        <FloatingCallButton />
      </body>
    </html>
  );
}
