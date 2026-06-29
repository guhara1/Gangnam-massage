import type { Metadata } from "next";
import { EditorialPage } from "@/components/editorial-page";
import { pageContent } from "@/lib/editorial-pages";
import { siteUrl } from "@/lib/areas";

export const dynamic = "force-static";

const content = pageContent.service;

export const metadata: Metadata = {
  title: "서비스 안내 | 합법 방문 마사지 이용 범위",
  description: "강남 방문 마사지 서비스 범위, 불가 요청, 장소별 출입 기준, 예약 전 확인사항을 안내합니다.",
  alternates: {
    canonical: siteUrl("/service"),
  },
};

export default function ServicePage() {
  return (
    <EditorialPage
      path="/service"
      breadcrumb={[
        { name: "홈", path: "/" },
        { name: "서비스 안내", path: "/service" },
      ]}
      {...content}
    />
  );
}
