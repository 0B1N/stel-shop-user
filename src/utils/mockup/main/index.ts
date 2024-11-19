import { CardData } from "components/Card";
import { ReviewData } from "components/ReviewCard";

export const new_mockup_data = [
  {
    title: "스텔라이브 아티산 키캡 - 아카네 리제",
    rate: 5,
    price: 15000,
    img: "/test_image2.webp",
    isNew: true,
  },
  {
    title: "스텔라이브 아티산 키캡 - 네네코 마시로",
    rate: 3,
    price: 15000,
    img: "/test_image3.webp",
    isNew: true,
  },
  {
    title: "스텔라이브 아티산 키캡 - 아라하시 타비",
    rate: 5,
    price: 15000,
    img: "/test_image4.webp",
    isNew: true,
  },
  {
    title: "스텔라이브 아티산 키캡 - 시라유키 히나",
    rate: 4,
    price: 15000,
    img: "/test_image5.webp",
    isNew: true,
  },
] as CardData[];

export const popular_mockup_data = [
  {
    title: "2024 타비 뿡댕이 키링",
    rate: 5,
    price: 15000,
    img: "/test_image.png",
  },
  {
    title: "2023 칸나 인형",
    rate: 3,
    price: 65000,
    sale: 20,
    img: "/test_image6.webp",
  },
  {
    title: "나나 카라비너 머그",
    rate: 5,
    price: 32000,
    img: "/test_image8.webp",
  },
  {
    title: "2024 리제 피엔나 다리 쿠션",
    rate: 4,
    price: 45000,
    img: "/test_image9.webp",
    sale: 16,
  },
] as CardData[];

export const photo_review_mockup_data = [
  {
    rate: 5,
    date: "2024-11-19",
    thumbnail: "/test_image.png",
    detail: {
      img: "/test_image.png",
      title: "2024 타비 뿡댕이 키링",
      price: 15000,
    },
  },
  {
    rate: 5,
    date: "2024-11-19",
    thumbnail: "/test_image.png",
    detail: {
      img: "/test_image.png",
      title: "2024 타비 뿡댕이 키링",
      price: 15000,
    },
  },
  {
    rate: 5,
    date: "2024-11-19",
    thumbnail: "/test_image.png",
    detail: {
      img: "/test_image.png",
      title: "2024 타비 뿡댕이 키링",
      price: 15000,
    },
  },
  {
    rate: 5,
    date: "2024-11-19",
    thumbnail: "/test_image.png",
    detail: {
      img: "/test_image.png",
      title: "2024 타비 뿡댕이 키링",
      price: 15000,
    },
  },
] as ReviewData[];
