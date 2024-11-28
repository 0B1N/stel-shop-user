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
  isLogin: boolean;
  needLoginModal: {
    visible: boolean;
  };
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
  needLoginModal: { visible: false },
  likeCount: 0,
  cartCount: 0,
  isLogin: false,
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
    handleIsLogin(state, action) {
      state.isLogin = action.payload;
    },
    handleVisibleNeedLoginModal(state, action) {
      state.needLoginModal.visible = action.payload;
    },
  },
});

export const {
  handleVisibleNeedLoginModal,
  handleResetReviewModalState,
  handleReviewModalData,
  handleVisibleMenuModal,
  handleVisibleReviewModal,
  handleVisibleBuyModal,
  handleLikeCount,
  handleCartCount,
  handleIsLogin,
} = globalSlice.actions;
export default globalSlice.reducer;
