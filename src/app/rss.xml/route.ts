import { gangnamAreas, siteUrl } from "@/lib/areas";

export const dynamic = "force-static";

const routes = [
  {
    path: "/",
    title: "강남 출장마사지 홈타이 지역별 이용 안내",
    description: "강남구 주요 생활권, 이용 절차, 요금 안내, 예약 전 확인사항을 정리한 메인 안내입니다.",
  },
  {
    path: "/gangnam",
    title: "강남구 출장마사지 홈타이 이용 가이드",
    description: "강남구 전체 생활권과 예약 전 확인할 내용을 안내합니다.",
  },
  {
    path: "/service",
    title: "서비스 안내",
    description: "합법 방문 마사지 예약 전 확인할 코스, 관리 범위, 불가 요청 기준을 안내합니다.",
  },
  {
    path: "/pricing",
    title: "이용 요금",
    description: "60분, 90분, 120분 코스별 기본 요금과 상담 전 확인할 비용 기준을 안내합니다.",
  },
  {
    path: "/guide",
    title: "이용 가이드",
    description: "예약 절차, 장소 확인, 취소 규정, 위생 기준을 처음 이용하는 분도 이해하기 쉽게 정리했습니다.",
  },
  {
    path: "/reviews",
    title: "실시간 후기",
    description: "강남구 생활권별 방문 마사지 이용 전 참고할 수 있는 실제 후기 기준과 확인 포인트입니다.",
  },
  {
    path: "/contact",
    title: "예약 문의",
    description: "예약 전 지역, 시간, 코스, 장소 규정을 확인하고 문의하는 페이지입니다.",
  },
];

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const updated = new Date().toUTCString();
  const areaItems = gangnamAreas.map((area) => ({
    path: `/gangnam/${area.slug}`,
    title: `${area.name} 출장마사지 홈타이 안내`,
    description: `${area.name} 생활권, 이용 상황, 예약 전 확인사항을 정리한 지역별 안내입니다.`,
  }));
  const items = [...routes, ...areaItems]
    .map((route) => {
      const url = siteUrl(route.path);

      return `<item>
        <title>${escapeXml(route.title)}</title>
        <link>${escapeXml(url)}</link>
        <guid>${escapeXml(url)}</guid>
        <description>${escapeXml(route.description)}</description>
        <pubDate>${updated}</pubDate>
      </item>`;
    })
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Gangnam Care Guide</title>
    <link>${escapeXml(siteUrl("/"))}</link>
    <description>강남구 합법 방문 마사지 예약 전 확인할 지역별 안내, 요금, 이용 가이드 업데이트입니다.</description>
    <language>ko-KR</language>
    <lastBuildDate>${updated}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "content-type": "application/rss+xml; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
