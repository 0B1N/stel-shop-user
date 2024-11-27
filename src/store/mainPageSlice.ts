import { createSlice } from "@reduxjs/toolkit";
import { CardData } from "components/Card";
import { ReviewData } from "components/ReviewCard";
import {
  new_mockup_data,
  photo_review_mockup_data,
  popular_mockup_data,
} from "utils/mockup/main";

type MainPageState = {
  product: {
    new: CardData[];
    popular: CardData[];
  };
  reviews: ReviewData[];
};

const initialState: MainPageState = {
  product: {
    new: new_mockup_data,
    popular: popular_mockup_data,
  },
  reviews: photo_review_mockup_data,
};

const mainPageSlice = createSlice({
  name: "mainPageSlice",
  initialState,
  reducers: {},
});

export const {} = mainPageSlice.actions;
export default mainPageSlice.reducer;
