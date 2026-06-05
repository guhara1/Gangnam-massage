import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { FloatingCallButton } from "@/components/floating-call-button";
import { HeaderNav } from "@/components/header-nav";
import { baseUrl, gangnamAreas, navigation } from "@/lib/areas";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  applicationName: "Gangnam Care Guide",
  icons: {
    icon: "/favicon.ico",
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
        <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-background/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
            <Link href="/" className="text-lg font-bold tracking-[0] text-[var(--accent)]">
              Gangnam Care Guide
            </Link>
            <HeaderNav areas={gangnamAreas} navigation={navigation} />
          </div>
        </header>
        {children}
        <FloatingCallButton />
      </body>
    </html>
  );
}
