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
  },
});

export const {
  handleResetReviewModalState,
  handleReviewModalData,
  handleVisibleMenuModal,
  handleVisibleReviewModal,
  handleVisibleBuyModal,
} = globalSlice.actions;
export default globalSlice.reducer;
