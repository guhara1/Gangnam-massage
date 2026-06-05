import type { Metadata } from "next";
import { EditorialPage } from "@/components/editorial-page";
import { pageContent } from "@/lib/editorial-pages";
import { siteUrl } from "@/lib/areas";

export const dynamic = "force-static";

const content = pageContent.guide;

export const metadata: Metadata = {
  title: "이용 가이드 | 예약 전 준비사항",
  description: "강남 방문 마사지 예약 전 주소, 시간, 출입 방식, 장소 규정을 단계별로 확인하는 방법을 안내합니다.",
  alternates: {
    canonical: siteUrl("/guide"),
  },
};

export default function GuidePage() {
  return <EditorialPage path="/guide" {...content} />;
}
