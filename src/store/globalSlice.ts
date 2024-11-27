import { createSlice } from "@reduxjs/toolkit";
import { ReviewData } from "components/ReviewCard";

type GlobalState = {
  reviewModal: {
    visible: boolean;
    data: ReviewData | null;
  };
  menuModal: {
    visible: boolean;
  };
  buyModal: {
    visible: boolean;
  };
  likeCount: number;
  cartCount: number;
};

const initialState: GlobalState = {
  reviewModal: {
    visible: false,
    data: null,
  },
  menuModal: {
    visible: false,
  },
  buyModal: {
    visible: false,
  },
  likeCount: 0,
  cartCount: 0,
};

const globalSlice = createSlice({
  name: "globalSlice",
  initialState,
  reducers: {
    handleVisibleReviewModal(state) {
      state.reviewModal.visible = !state.reviewModal.visible;
    },
    handleReviewModalData(state, action) {
      state.reviewModal.data = action.payload;
    },
    handleResetReviewModalState(state) {
      state.reviewModal.visible = !state.reviewModal.visible;
      state.reviewModal.data = null;
    },
    handleVisibleMenuModal(state) {
      state.menuModal.visible = !state.menuModal.visible;
    },
    handleVisibleBuyModal(state) {
      state.buyModal.visible = !state.buyModal.visible;
    },
    handleLikeCount(state, action) {
      state.likeCount = action.payload;
    },
    handleCartCount(state, action) {
      state.cartCount = action.payload;
    },
  },
});

export const {
  handleResetReviewModalState,
  handleReviewModalData,
  handleVisibleMenuModal,
  handleVisibleReviewModal,
  handleVisibleBuyModal,
  handleLikeCount,
  handleCartCount,
} = globalSlice.actions;
export default globalSlice.reducer;
