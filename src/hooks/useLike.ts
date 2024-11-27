import { useRouter } from "next/router";
import { StorePageParams } from "pages/store";
import { useCallback, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useRootState } from "store";
import { handleFilter } from "store/storePageSlice";
import { ProductOrderType } from "utils/enum/store";
import useDidMountEffect from "./useDidMountEffect";
import { handleLikeList } from "store/likePageSlice";
import { getCookie } from "cookies-next";

export default function useLike() {
  const dispatch = useDispatch();
  const { list } = useRootState((state) => state.likePageSlice);

  useEffect(() => {
    const cookieData = JSON.parse(getCookie("likeList") as string);

    if (cookieData?.length === 0) return;
    dispatch(handleLikeList(cookieData));
  }, []);

  return { list };
}
