import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Action, combineReducers } from "redux";

import globalSlice from "store/globalSlice";
import mainPageSlice from "store/mainPageSlice";
import storePageSlice from "store/storePageSlice";
import reviewPageSlice from "store/reviewPageSlice";
import productDetailSlice from "store/productDetailSlice";

const rootReducer = combineReducers({
  globalSlice,
  mainPageSlice,
  storePageSlice,
  reviewPageSlice,
  productDetailSlice,
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
