import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { Action, combineReducers } from "redux";

import { useSelector, useDispatch } from "react-redux";

import productDetailSlice from "store/productDetailSlice";
import reviewPageSlice from "store/reviewPageSlice";
import storePageSlice from "store/storePageSlice";
import cartPageSlice from "store/cartPageSlice";
import mainPageSlice from "store/mainPageSlice";
import likePageSlice from "store/likePageSlice";
import globalSlice from "store/globalSlice";

const rootReducer = combineReducers({
  productDetailSlice,
  reviewPageSlice,
  storePageSlice,
  cartPageSlice,
  mainPageSlice,
  likePageSlice,
  globalSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultmiddleware) => getDefaultmiddleware().concat(),
  devTools: process.env.NODE_ENV !== "production",
});

type StateSelector<T> = (state: RootState) => T;
type EqualityFn<T> = (left: T, right: T) => boolean;

export function useRootState<T>(
  selector: StateSelector<T>,
  equalityFn?: EqualityFn<T>,
) {
  return useSelector(selector, equalityFn);
}

export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
