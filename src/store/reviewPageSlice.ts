import { createSlice } from "@reduxjs/toolkit";

import { ReviewData } from "components/ReviewCard";

import { review_page_data } from "utils/mockup/review";

type ReviewPageState = {
  list: ReviewData[];
};

const initialState: ReviewPageState = {
  list: review_page_data.slice(0, 5),
};

const reviewPageSlice = createSlice({
  name: "reviewPageSlice",
  initialState,
  reducers: {},
});

export const {} = reviewPageSlice.actions;
export default reviewPageSlice.reducer;
