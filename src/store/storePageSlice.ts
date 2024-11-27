import { createSlice } from "@reduxjs/toolkit";

import { CardData } from "components/Card";

import {
  ProductCategoryType,
  ProductMemberType,
  ProductOrderType,
} from "utils/enum/store";
import { store_page_mockup } from "utils/mockup/store";

type StorePageState = {
  filter: {
    category: ProductCategoryType;
    member: ProductMemberType;
    order: ProductOrderType;
  };
  visibleFilterMenu: boolean;
  list: CardData[];
};

const initialState: StorePageState = {
  filter: {
    order: "new",
    member: 0,
    category: 0,
  },
  visibleFilterMenu: false,
  list: store_page_mockup,
};

const storePageSlice = createSlice({
  name: "storePageSlice",
  initialState,
  reducers: {
    handleFilter(state, action) {
      state.filter = { ...state.filter, ...action.payload };
    },
    handleVisibleFilterMenu(state) {
      state.visibleFilterMenu = !state.visibleFilterMenu;
    },
  },
});

export const { handleFilter, handleVisibleFilterMenu } = storePageSlice.actions;
export default storePageSlice.reducer;
