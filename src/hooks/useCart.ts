import { useRouter } from "next/router";
import { StorePageParams } from "pages/store";
import { useCallback, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useRootState } from "store";
import { handleFilter } from "store/storePageSlice";
import { ProductOrderType } from "utils/enum/store";
import useDidMountEffect from "./useDidMountEffect";
import { handleLikeList } from "store/likePageSlice";
import { getCookie, setCookie } from "cookies-next";
import {
  deleteCartItem,
  editCartItemCount,
  setCartList,
} from "store/cartPageSlice";
import { toast } from "react-toastify";

export default function useCart() {
  const dispatch = useDispatch();
  const { list } = useRootState((state) => state.cartPageSlice);

  function handleDeleteCartItem(idx: number) {
    dispatch(deleteCartItem({ idx }));

    toast.error("장바구니에서 삭제됐습니다.", {
      position: "bottom-center",
    });
  }

  function handleCartItemCount(idx: number, count: number) {
    dispatch(editCartItemCount({ idx, count }));
  }

  useEffect(() => {
    const cookieCartList = getCookie("cartList");

    if (cookieCartList) {
      const cookieData = JSON.parse(getCookie("cartList") as string);

      if (cookieData?.length === 0) return;
      dispatch(setCartList(cookieData));
    }
  }, []);

  useDidMountEffect(() => {
    setCookie("cartList", JSON.stringify(list), {
      maxAge: 60 * 60 * 24 * 365,
    });
  }, [JSON.stringify(list)]);

  return { list, handleDeleteCartItem, handleCartItemCount };
}
