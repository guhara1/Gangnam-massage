export const pricingPlans = [
  {
    name: "60분 코스",
    price: "90,000",
    minutes: "60분",
    description: "기본 컨디션 정리와 짧은 휴식에 맞춘 구성",
    featured: false,
  },
  {
    name: "90분 코스",
    price: "150,000",
    minutes: "90분",
    description: "아로마 포함 추천 구성",
    featured: true,
  },
  {
    name: "120분 코스",
    price: "180,000",
    minutes: "120분",
    description: "이동 후 충분한 휴식을 원하는 분을 위한 구성",
    featured: false,
  },
] as const;
