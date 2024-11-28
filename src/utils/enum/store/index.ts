export const PRODUCT_ORDER = {
  popular: "인기순",
  new: "최신순",
  lowPrice: "낮은가격순",
  highPrice: "높은가격순",
} as const;

export type ProductOrderType = keyof typeof PRODUCT_ORDER;

export const PRODUCT_CATEGORY = {
  0: "전체",
  1: "키링",
  2: "키캡",
  3: "인형",
  4: "아크릴 굿즈",
  5: "머그컵",
  6: "슬리퍼",
} as const;

export type ProductCategoryType = keyof typeof PRODUCT_CATEGORY;

export const PRODCUT_MEMBERS = {
  0: "스텔라이브",
  1: "강지",
  2: "아이리 칸나",
  3: "아야츠노 유니",
  4: "시라유키 히나",
  5: "네네코 마시로",
  6: "아카네 리제",
  7: "아라하시 타비",
  8: "텐코 시부키",
  9: "아오쿠모 린",
  10: "하나코 나나",
  11: "유즈하 리코",
} as const;

export type ProductMemberType = keyof typeof PRODCUT_MEMBERS;
