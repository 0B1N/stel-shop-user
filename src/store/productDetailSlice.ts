import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ReviewData } from "components/ReviewCard";
import { ProductCategoryType, ProductMemberType } from "utils/enum/store";

type ProductDetailState = {
  hideProductImage: boolean;
  anchorIndex: number;
  reviews: ReviewData[];
  mainImageIndex: number;
  productCount: number;
  activeLike: boolean;
  buyGuides: {
    title: string;
    desc?: string;
    list: Record<string, string>;
  }[];
  data: {
    idx: number;
    title: string;
    tallent: ProductMemberType;
    images: string[];
    price: number;
    category: ProductCategoryType;
    detailInfo: string;
    rate: number;
    isNew?: boolean;
  };
  loading: boolean;
  error: boolean;
};

const initialState: ProductDetailState = {
  hideProductImage: false,
  anchorIndex: 0,
  productCount: 1,
  mainImageIndex: 0,
  loading: false,
  error: false,
  activeLike: false,
  data: {
    idx: 0,
    title: "2024 타비 뿡댕이 키링",
    tallent: 7,
    category: 2,
    detailInfo: "",
    price: 15000,
    rate: 5,
    images: ["/test_image.png", "/test_image2.webp", "/test_image3.webp"],
  },
  reviews: [
    {
      email: "binnyy01@gmail.com",
      product: {
        title: "2024 타비 뿡댕이 키링",
        image: "/test_image.png",
        price: 15000,
        category: 1,
      },
      review: {
        rate: 5,
        images: [
          "/test_image.png",
          "/test_image.png",
          "/test_image.png",
          "/test_image.png",
        ],
        date: "2024-11-26",
        desc: `이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!\n이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!\n이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!`,
      },
    },
    {
      email: "binnyy01@gmail.com",
      product: {
        title: "2024 타비 뿡댕이 키링",
        image: "/test_image.png",
        price: 15000,
        category: 1,
      },
      review: {
        rate: 5,
        images: [
          "/test_image.png",
          "/test_image.png",
          "/test_image.png",
          "/test_image.png",
        ],
        date: "2024-11-26",
        desc: `이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!\n이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!\n이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!`,
      },
    },
    {
      email: "binnyy01@gmail.com",
      product: {
        title: "2024 타비 뿡댕이 키링",
        image: "/test_image.png",
        price: 15000,
        category: 1,
      },
      review: {
        rate: 5,
        images: [
          "/test_image.png",
          "/test_image.png",
          "/test_image.png",
          "/test_image.png",
        ],
        date: "2024-11-26",
        desc: `이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!\n이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!\n이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!`,
      },
    },
    {
      email: "binnyy01@gmail.com",
      product: {
        title: "2024 타비 뿡댕이 키링",
        image: "/test_image.png",
        price: 15000,
        category: 1,
      },
      review: {
        rate: 5,
        images: [
          "/test_image.png",
          "/test_image.png",
          "/test_image.png",
          "/test_image.png",
        ],
        date: "2024-11-26",
        desc: `이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!\n이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!\n이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!`,
      },
    },
    {
      email: "binnyy01@gmail.com",
      product: {
        title: "2024 타비 뿡댕이 키링",
        image: "/test_image.png",
        price: 15000,
        category: 1,
      },
      review: {
        rate: 5,
        images: [
          "/test_image.png",
          "/test_image.png",
          "/test_image.png",
          "/test_image.png",
        ],
        date: "2024-11-26",
        desc: `이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!\n이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!\n이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!`,
      },
    },
  ],
  buyGuides: [
    {
      title: "배송 정보",
      list: {
        "배송 정보": "일반택배(CJ대한통운)",
        "배송 지역": "한국",
        "배송 기간":
          "상품 출고 후 영업일 기준 1~3일 이내 수령이 가능하며 도서 산간 지역이거나 택배사의 물량이 많은 경우 기간이 조금 더 소요될 수 있습니다.",
      },
    },
    {
      title: "교환/환불 정보",
      desc: `주문제작 상품은 단순 변심, 주문 착오 등 고객 사유에 따른 교환/환불이 어렵습니다.\n상품에 이상이 있을 경우, 1:1문의하기를 통해 마플샵에 문의 해주세요`,
      list: {
        "배송 정보": "일반택배(CJ대한통운)",
        "배송 지역": "한국",
        "배송 기간":
          "상품 출고 후 영업일 기준 1~3일 이내 수령이 가능하며 도서 산간 지역이거나 택배사의 물량이 많은 경우 기간이 조금 더 소요될 수 있습니다.",
      },
    },
  ],
};

export const getProductDetail = createAsyncThunk(
  "productDetail",
  async (idx: number, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/detail/test${idx}.json`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue("에러");
    }
  },
);

const productDetailSlice = createSlice({
  name: "productDetailSlice",
  initialState,
  reducers: {
    handleAnchorIndex(state, action) {
      state.anchorIndex = action.payload;
    },
    handleHideProductImage(state) {
      state.hideProductImage = !state.hideProductImage;
    },
    handleProductCount(state, action) {
      state.productCount = action.payload;
    },
    handleMainImageIndex(state, action) {
      state.mainImageIndex = action.payload;
    },
    handleActiveLike(state, action) {
      state.activeLike = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getProductDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.reviews = action.payload.reviews;
        state.buyGuides = action.payload.buyGuides;

        state.loading = false;
      })
      .addCase(getProductDetail.rejected, (state, action) => {
        state.error = true;
        state.loading = false;
        state.data = null;
      });
  },
});

export const {
  handleMainImageIndex,
  handleAnchorIndex,
  handleHideProductImage,
  handleActiveLike,
  handleProductCount,
} = productDetailSlice.actions;
export default productDetailSlice.reducer;
