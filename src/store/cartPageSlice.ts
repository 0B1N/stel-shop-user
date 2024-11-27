import { createSlice } from "@reduxjs/toolkit";

import { CartItemData } from "components/CartItem";

type CartPageState = {
  list: CartItemData[];
};

const initialState: CartPageState = {
  list: [],
};

const cartPageSlice = createSlice({
  name: "cartPageSlice",
  initialState,
  reducers: {
    setCartList(state, action) {
      state.list = action.payload;
    },
    deleteCartItem(state, action) {
      state.list = state.list.filter((item) => item.idx !== action.payload.idx);
    },
    editCartItemCount(state, action) {
      state.list = state.list.map((item) =>
        item.idx === action.payload.idx
          ? { ...item, count: action.payload.count }
          : item,
      );
    },
  },
});

export const { setCartList, deleteCartItem, editCartItemCount } =
  cartPageSlice.actions;
export default cartPageSlice.reducer;
