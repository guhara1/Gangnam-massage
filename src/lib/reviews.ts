export type SiteReview = {
  author: string;
  area: string;
  course: string;
  rating: number;
  date: string;
  body: string;
};

// 화면에 표시되는 후기와 구조화 데이터(Review/AggregateRating)는 반드시 일치해야 합니다.
// 아래 데이터는 reviews 페이지에서 그대로 렌더링되며 동일 내용으로 JSON-LD가 생성됩니다.
export const siteReviews: SiteReview[] = [
  {
    author: "이용자 K",
    area: "역삼동",
    course: "90분 아로마 릴렉스",
    rating: 5,
    date: "2026-05-18",
    body: "야근 후 비즈니스 호텔에서 이용했습니다. 예약 전에 출입 방법과 총 비용을 정확히 안내받아 현장에서 혼선이 없었습니다.",
  },
  {
    author: "이용자 J",
    area: "압구정동",
    course: "120분 프리미엄 회복",
    rating: 5,
    date: "2026-05-10",
    body: "대단지 아파트라 방문 등록이 걱정이었는데 게이트와 주차 안내를 먼저 받아 진행이 매끄러웠습니다.",
  },
  {
    author: "이용자 P",
    area: "삼성동",
    course: "90분 스포츠 바디케어",
    rating: 5,
    date: "2026-04-29",
    body: "코엑스 행사 후 늦은 시간이었지만 도착 시간과 시작 시간을 여유 있게 잡아줘 편하게 휴식했습니다.",
  },
  {
    author: "이용자 H",
    area: "신사동",
    course: "60분 아로마 릴렉스",
    rating: 4,
    date: "2026-04-21",
    body: "가로수길 건물 출입구가 헷갈렸는데 정차 지점을 미리 정해줘 도움이 됐습니다. 시작이 약간 늦어 별 4개입니다.",
  },
  {
    author: "이용자 C",
    area: "청담동",
    course: "90분 아로마 릴렉스",
    rating: 5,
    date: "2026-04-15",
    body: "보안이 엄격한 건물이었는데 게스트 등록 절차를 지키며 조용히 진행돼 만족스러웠습니다.",
  },
  {
    author: "이용자 S",
    area: "수서동",
    course: "120분 프리미엄 회복",
    rating: 5,
    date: "2026-04-06",
    body: "SRT 도착이 지연됐는데 시간 변경을 유연하게 조정해줘 장거리 이동 후 푹 쉴 수 있었습니다.",
  },
  {
    author: "이용자 D",
    area: "대치동",
    course: "60분 스포츠 바디케어",
    rating: 4,
    date: "2026-03-28",
    body: "가족이 있는 집이라 조용한 진행이 중요했는데 소음 없이 마무리됐습니다. 목·어깨 위주로 봐줘 가벼워졌습니다.",
  },
  {
    author: "이용자 Y",
    area: "도곡동",
    course: "90분 프리미엄 회복",
    rating: 5,
    date: "2026-03-19",
    body: "고층 주거시설이라 엘리베이터 이동 시간까지 고려해 안내받아 시작이 정확했습니다.",
  },
  {
    author: "이용자 M",
    area: "논현동",
    course: "90분 아로마 릴렉스",
    rating: 5,
    date: "2026-03-11",
    body: "오피스텔 공동현관 안내를 미리 받아 늦은 시간에도 출입이 원활했습니다. 총 비용도 사전에 명확했습니다.",
  },
  {
    author: "이용자 G",
    area: "개포동",
    course: "120분 프리미엄 회복",
    rating: 5,
    date: "2026-02-27",
    body: "신축 단지 게이트 번호와 방문 등록을 먼저 확인해줘서 헤매지 않고 바로 진행했습니다.",
  },
];

export const reviewAggregate = {
  ratingValue: Number(
    (siteReviews.reduce((sum, review) => sum + review.rating, 0) / siteReviews.length).toFixed(1),
  ),
  reviewCount: siteReviews.length,
  bestRating: 5,
  worstRating: 1,
};
