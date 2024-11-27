import { createSlice } from "@reduxjs/toolkit";

import { CardData } from "components/Card";

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
