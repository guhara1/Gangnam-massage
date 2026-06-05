import type { Metadata } from "next";
import { EditorialPage } from "@/components/editorial-page";
import { pageContent } from "@/lib/editorial-pages";
import { siteUrl } from "@/lib/areas";

export const dynamic = "force-static";

const content = pageContent.contact;

export const metadata: Metadata = {
  title: "예약 문의 | 강남 방문 마사지 상담 전 준비사항",
  description: "예약 문의 전 필요한 주소, 시간, 코스, 출입 방식, 요금 확인 항목을 안내합니다.",
  alternates: {
    canonical: siteUrl("/contact"),
  },
};

export default function ContactPage() {
  return <EditorialPage path="/contact" {...content} showPricing />;
}
