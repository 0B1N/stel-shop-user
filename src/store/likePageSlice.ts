import { createSlice } from "@reduxjs/toolkit";
import { CardData } from "components/Card";
import { ReviewData } from "components/ReviewCard";
import {
  new_mockup_data,
  photo_review_mockup_data,
  popular_mockup_data,
} from "utils/mockup/main";

type LikePageState = {
  list: CardData[];
};

const initialState: LikePageState = {
  list: [],
};

const likePageSlice = createSlice({
  name: "likePageSlice",
  initialState,
  reducers: {
    handleLikeList(state, action) {
      state.list = action.payload;
    },
  },
});

export const { handleLikeList } = likePageSlice.actions;
export default likePageSlice.reducer;
