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
  loading: true,
  error: false,
  activeLike: false,
  data: {
    idx: 0,
    title: "",
    tallent: 0,
    category: 0,
    detailInfo: "",
    price: 0,
    rate: 0,
    images: [],
  },
  reviews: [],
  buyGuides: [],
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
  initialState: initialState,
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
    resetProductDetailData(state) {
      state = initialState;
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
  resetProductDetailData,
} = productDetailSlice.actions;
export default productDetailSlice.reducer;
