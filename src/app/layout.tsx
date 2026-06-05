import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
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
            <Link href="/" className="text-lg font-bold tracking-[0]">
              Gangnam Care Guide
            </Link>
            <nav aria-label="상단 메뉴" className="flex flex-wrap items-center gap-1 text-sm">
              {navigation.map((item) =>
                item.href === "/gangnam" ? (
                  <details key={item.href} className="group relative">
                    <summary className="list-none rounded-md px-3 py-2 font-medium text-neutral-800 outline-none hover:bg-white focus-visible:ring-2 focus-visible:ring-[var(--accent)]">
                      {item.label}
                    </summary>
                    <div className="absolute left-0 top-full mt-2 grid w-48 gap-1 rounded-md border border-[var(--line)] bg-white p-2 shadow-lg group-open:block">
                      <Link className="rounded px-3 py-2 hover:bg-neutral-50" href="/gangnam">
                        강남구 전체
                      </Link>
                      {gangnamAreas.map((area) => (
                        <Link
                          key={area.slug}
                          className="rounded px-3 py-2 hover:bg-neutral-50"
                          href={`/gangnam/${area.slug}`}
                        >
                          {area.name}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-md px-3 py-2 font-medium text-neutral-800 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
