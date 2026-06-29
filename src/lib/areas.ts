export const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gangnam-massage.netlify.app";

export function siteUrl(path: string) {
  const normalized = path === "/" ? "" : path;
  return `${baseUrl}${normalized}`;
}

export const navigation = [
  { label: "홈", href: "/" },
  { label: "지역별", href: "/gangnam" },
  { label: "코스별", href: "/service" },
  { label: "가격별", href: "/pricing" },
  { label: "이용가이드", href: "/guide" },
  { label: "실시간 후기", href: "/reviews" },
] as const;

export type Area = {
  name: string;
  slug: string;
  neighborhoods: string[];
  situations: string[];
  routeNotes: string[];
  precheck: string[];
  faq: { question: string; answer: string }[];
};

export const gangnamAreas: Area[] = [
  {
    name: "신사동",
    slug: "sinsa",
    neighborhoods: ["가로수길", "신사역", "잠원동 경계"],
    situations: ["상가와 주거지가 섞여 출입구 확인이 중요합니다.", "미팅이나 식사 후 숙소에서 쉬려는 문의가 많습니다."],
    routeNotes: ["도산대로와 강남대로 진입 방향에 따라 정차 위치가 달라집니다."],
    precheck: ["기계식 주차 여부", "야간 출입구", "엘리베이터 운영 시간"],
    faq: [
      { question: "가로수길 주변은 무엇을 먼저 확인하나요?", answer: "건물명, 실제 출입구, 정차 가능 위치를 먼저 확인합니다." },
      { question: "호텔 이용도 가능한가요?", answer: "숙소의 외부인 방문 규정을 확인한 뒤 가능 여부를 안내합니다." },
    ],
  },
  {
    name: "압구정동",
    slug: "apgujeong",
    neighborhoods: ["압구정로데오", "대단지 아파트", "백화점 주변"],
    situations: ["미용, 병원, 쇼핑 일정 후 휴식 문의가 많습니다.", "대단지 출입 등록과 방문 차량 등록이 중요합니다."],
    routeNotes: ["압구정로와 언주로는 시간대별 흐름 차이가 큽니다."],
    precheck: ["방문 차량 등록", "동과 라인", "경비실 호출 방식"],
    faq: [
      { question: "아파트 단지 예약은 어떻게 준비하나요?", answer: "동, 라인, 방문 등록 방식, 주차 가능 여부를 알려주면 좋습니다." },
      { question: "압구정로데오 주변도 늦은 시간 가능한가요?", answer: "시간대와 이동 여건에 따라 가능 여부를 확인합니다." },
    ],
  },
  {
    name: "논현동",
    slug: "nonhyeon",
    neighborhoods: ["논현역", "학동역", "영동시장"],
    situations: ["회식 후 숙소 이용 문의가 자주 있습니다.", "오피스텔과 중소형 호텔의 출입 기준 확인이 필요합니다."],
    routeNotes: ["강남대로, 학동로, 봉은사로가 겹쳐 우회 동선 확인이 중요합니다."],
    precheck: ["공동현관", "정차 가능 위치", "숙소 방문 규정"],
    faq: [
      { question: "논현동 오피스텔은 어떤 정보가 필요한가요?", answer: "공동현관, 엘리베이터 위치, 정차 지점을 함께 알려주세요." },
      { question: "회식 후 예약은 가능한가요?", answer: "이용자 상태와 숙소 규정을 확인한 뒤 무리 없는 경우에만 진행합니다." },
    ],
  },
  {
    name: "청담동",
    slug: "cheongdam",
    neighborhoods: ["청담사거리", "명품거리", "영동대교 남단"],
    situations: ["행사나 촬영 후 컨디션 정리 문의가 많습니다.", "보안 데스크와 게스트 등록 절차가 중요합니다."],
    routeNotes: ["도산대로와 영동대로 진입 방향에 따라 하차 지점이 바뀔 수 있습니다."],
    precheck: ["게스트 등록", "보안 데스크 호출", "지하주차장 높이 제한"],
    faq: [
      { question: "보안이 엄격한 건물도 가능한가요?", answer: "건물 규정을 지키는 범위에서만 가능 여부를 확인합니다." },
      { question: "행사 후 예약은 언제 문의하면 좋나요?", answer: "종료 시간이 변동될 수 있어 여유 있게 문의하는 편이 좋습니다." },
    ],
  },
  {
    name: "삼성동",
    slug: "samseong",
    neighborhoods: ["코엑스", "삼성역 업무지구", "봉은사역"],
    situations: ["전시, 컨퍼런스, 야근 후 문의가 많습니다.", "대형 호텔과 레지던스의 로비 동선 확인이 필요합니다."],
    routeNotes: ["영동대로와 테헤란로는 행사 일정에 따라 이동 시간이 달라집니다."],
    precheck: ["호텔 방문 규정", "행사 종료 시간", "지하주차장 구역"],
    faq: [
      { question: "코엑스 행사일에는 무엇을 고려하나요?", answer: "행사 종료 직후 혼잡을 고려해 예약 시간을 여유 있게 잡습니다." },
      { question: "업무지구 야근 후도 가능한가요?", answer: "회사 건물이 아닌 실제 이용 장소 기준으로 가능 여부를 확인합니다." },
    ],
  },
  {
    name: "대치동",
    slug: "daechi",
    neighborhoods: ["은마아파트", "대치동 학원가", "대치역"],
    situations: ["가족 주거지에서 조용한 이용 환경을 원하는 문의가 많습니다.", "학원 종료 시간대 차량 혼잡을 고려해야 합니다."],
    routeNotes: ["도곡로와 남부순환로 주변은 학원 종료 시간 정차 지점 조율이 중요합니다."],
    precheck: ["단지 진입 가능 시간", "동거인 동의", "주거지 소음 기준"],
    faq: [
      { question: "학원가 근처는 언제 혼잡한가요?", answer: "평일 저녁과 밤 시간대에 차량 이동이 많습니다." },
      { question: "가족이 있는 집에서도 가능한가요?", answer: "동거인 동의와 조용한 이용 환경이 먼저 확인되어야 합니다." },
    ],
  },
  {
    name: "역삼동",
    slug: "yeoksam",
    neighborhoods: ["강남역 업무권", "역삼역", "르네상스사거리"],
    situations: ["야근과 출장 일정 후 비즈니스 호텔 문의가 많습니다.", "로비 대기와 체크인 완료 여부가 중요합니다."],
    routeNotes: ["테헤란로와 강남대로 교차 흐름 때문에 이동 시간이 달라집니다."],
    precheck: ["호텔 체크인", "로비 대기 가능 구역", "정차 제한 구간"],
    faq: [
      { question: "비즈니스 호텔 예약 전 확인할 점은 무엇인가요?", answer: "외부인 방문 규정, 객실 호출 방식, 주차 여부를 확인합니다." },
      { question: "강남역 근처는 이동 시간이 짧나요?", answer: "거리보다 진입 방향과 정체가 더 크게 작용할 수 있습니다." },
    ],
  },
  {
    name: "도곡동",
    slug: "dogok",
    neighborhoods: ["도곡역", "매봉역", "타워팰리스"],
    situations: ["고층 주거시설에서 조용한 일정 조율 문의가 많습니다.", "방문 등록과 엘리베이터 이동 시간이 중요합니다."],
    routeNotes: ["언주로, 남부순환로, 양재천 주변 도로 상황을 함께 확인합니다."],
    precheck: ["방문자 등록 앱", "지하주차장 동선", "엘리베이터 환승"],
    faq: [
      { question: "고층 아파트는 시간이 더 걸리나요?", answer: "출입 등록과 엘리베이터 이동 절차 때문에 여유 시간이 필요할 수 있습니다." },
      { question: "양재천 인근은 어떤 점을 보나요?", answer: "주말 보행 인파와 주차 여건을 함께 고려합니다." },
    ],
  },
  {
    name: "개포동",
    slug: "gaepo",
    neighborhoods: ["개포 신축 단지", "구룡역", "대모산입구역"],
    situations: ["신축 단지 출입 절차를 꼼꼼히 확인하는 문의가 많습니다.", "게이트가 많아 목적지 설정을 구체화해야 합니다."],
    routeNotes: ["양재대로와 개포로 진입 방향에 따라 단지 접근 시간이 달라집니다."],
    precheck: ["입주민 앱 등록", "게이트 번호", "승하차 지점"],
    faq: [
      { question: "신축 단지는 어떤 정보가 필요한가요?", answer: "단지명, 게이트, 방문 등록 방식, 주차 가능 시간이 필요합니다." },
      { question: "대모산 인근은 이동이 어렵나요?", answer: "진입로와 하차 지점에 따라 달라져 정확한 주소 확인이 중요합니다." },
    ],
  },
  {
    name: "일원동",
    slug: "irwon",
    neighborhoods: ["삼성서울병원 주변", "일원역", "대청역"],
    situations: ["병원 방문 보호자나 장기 일정 후 휴식 문의가 있습니다.", "의료 효과를 약속하지 않고 휴식 목적만 안내합니다."],
    routeNotes: ["병원 주변은 응급 차량과 일반 차량 흐름을 고려해 정차 위치를 정합니다."],
    precheck: ["숙소 방문 규정", "보호자 일정 변동", "조용한 환경"],
    faq: [
      { question: "병원 주변 이용 시 주의할 점은 무엇인가요?", answer: "의료 목적이 아닌 휴식 안내이며 병원 규정과 주변 질서를 우선합니다." },
      { question: "일정이 늦어지면 어떻게 하나요?", answer: "가능 시간 변경 여부를 미리 공유해야 조정할 수 있습니다." },
    ],
  },
  {
    name: "수서동",
    slug: "suseo",
    neighborhoods: ["SRT 수서역", "수서역 환승권", "탄천 주변"],
    situations: ["열차 도착 후 숙소 체크인 시간에 맞춘 문의가 많습니다.", "짐 이동과 택시 대기 시간을 고려해야 합니다."],
    routeNotes: ["SRT 도착, 택시 대기, 숙소 이동 시간이 겹치면 시작 시간이 늦어질 수 있습니다."],
    precheck: ["열차 지연 가능성", "체크인 완료", "짐 보관 위치"],
    faq: [
      { question: "SRT 도착 직후 예약해도 되나요?", answer: "열차 지연과 이동 시간을 고려해 여유 있게 잡는 편이 안정적입니다." },
      { question: "수서역 주변 숙소는 무엇을 확인하나요?", answer: "체크인 완료 여부와 객실 방문 규정을 확인합니다." },
    ],
  },
  {
    name: "세곡동",
    slug: "segok",
    neighborhoods: ["세곡지구", "헌릉로", "자곡동 경계"],
    situations: ["조용한 주거지에서 사전 예약 중심 문의가 많습니다.", "차량 이동 의존도가 높아 방문 가능 시간 확인이 중요합니다."],
    routeNotes: ["헌릉로와 밤고개로 흐름에 따라 강남 중심부 이동 시간이 달라집니다."],
    precheck: ["단지 정차 가능 여부", "야간 출입 게이트", "예약 시간 여유"],
    faq: [
      { question: "세곡동은 당일 예약이 어려운가요?", answer: "가능한 경우도 있지만 이동 거리를 고려해 사전 문의가 안정적입니다." },
      { question: "차량 진입이 필요한 곳은 어떻게 안내하나요?", answer: "단지 입구와 정차 가능한 지점을 구체적으로 알려주면 좋습니다." },
    ],
  },
  {
    name: "자곡동",
    slug: "jagok",
    neighborhoods: ["강남보금자리", "못골마을", "율현동 경계"],
    situations: ["신규 주거 단지가 많아 출입 등록 문의가 많습니다.", "도로명이 비슷해 단지명과 게이트 확인이 중요합니다."],
    routeNotes: ["밤고개로와 자곡로 연결 구간은 시간대별 차량 흐름을 확인합니다."],
    precheck: ["단지 출입 등록", "도로명 주소와 단지명", "주차장 입구"],
    faq: [
      { question: "자곡동 신축 단지는 주소만 알려주면 되나요?", answer: "주소와 함께 단지명, 게이트, 주차장 입구를 알려주면 좋습니다." },
      { question: "밤 시간 이용 때 유의할 점은 무엇인가요?", answer: "주거지 특성상 소음과 출입 규정을 지켜야 합니다." },
    ],
  },
  {
    name: "율현동",
    slug: "yulhyeon",
    neighborhoods: ["율현공원", "밤고개로", "세곡동 연결권"],
    situations: ["주거지와 녹지 인근이라 이동 가능 여부 확인이 중요합니다.", "주소 체계가 낯설 수 있어 주변 기준점이 필요합니다."],
    routeNotes: ["강남 중심부에서 접근할 때 밤고개로 정체와 정차 지점 확인이 필요합니다."],
    precheck: ["도로명 주소", "주변 기준 건물", "주차 또는 정차 지점"],
    faq: [
      { question: "율현동은 위치 설명이 왜 중요한가요?", answer: "주거지와 녹지가 이어져 정확한 주소와 기준점이 필요합니다." },
      { question: "강남 중심부에서 이동 시간이 긴가요?", answer: "시간대와 도로 흐름에 따라 달라져 예약 전 예상 시간을 확인합니다." },
    ],
  },
];

export function getArea(slug: string) {
  return gangnamAreas.find((area) => area.slug === slug);
}

export const gangnamOverview = {
  title: "강남구 출장마사지 홈타이 | 지역별 이용 가이드",
  description: "강남구 출장마사지 홈타이 이용 전 확인할 수 있는 주요 생활권, 이용 절차, 요금 확인 방법, 예약 전 주의사항을 안내합니다.",
  h1: "강남구 출장마사지 홈타이 이용 가이드",
};
