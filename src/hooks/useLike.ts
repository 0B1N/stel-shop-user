import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useRootState } from "store";

import { getCookie } from "cookies-next";

import { handleLikeList } from "store/likePageSlice";

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
