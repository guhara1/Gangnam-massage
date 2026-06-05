import type { Metadata } from "next";
import { EditorialPage } from "@/components/editorial-page";
import { pageContent } from "@/lib/editorial-pages";
import { siteUrl } from "@/lib/areas";

export const dynamic = "force-static";

const content = pageContent.reviews;

export const metadata: Metadata = {
  title: "후기 | 방문 마사지 후기 확인 기준",
  description: "실제 후기 게시 기준, 가짜 후기 배제 원칙, 후기 확인 방법을 안내합니다.",
  alternates: {
    canonical: siteUrl("/reviews"),
  },
};

export default function ReviewsPage() {
  return <EditorialPage path="/reviews" {...content} />;
}
