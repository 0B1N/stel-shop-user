import { CardData } from "components/Card";
import { getCookie, setCookie } from "cookies-next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch, useRootState } from "store";
import { handleLikeCount } from "store/globalSlice";
import {
  getProductDetail,
  handleActiveLike,
  handleAnchorIndex,
} from "store/productDetailSlice";

export default function useProductDetails(idx: number) {
  const dispatch = useAppDispatch();
  const { data, activeLike } = useRootState(
    (state) => state.productDetailSlice,
  );

  function handleClick(id: string) {
    const scrollTop = document.getElementById(id).offsetTop;
    const exclusionArea = window.outerWidth < 1280 ? 61 + 41 : 48 + 86;

    window.scrollTo({
      top: scrollTop - exclusionArea,
      behavior: "smooth",
    });
  }

  function handleWindowScroll() {
    const exclusionArea = window.outerWidth < 1280 ? 61 + 41 : 48 + 86;

    const productDetailScrollTop =
      document.getElementById("productDetail").offsetTop - exclusionArea;
    const reviewScrollTop =
      document.getElementById("review").offsetTop - exclusionArea;
    const buyGuideScrollTop =
      document.getElementById("buyGuide").offsetTop - exclusionArea;

    const windowScrollTop = document.documentElement.scrollTop;

    if (
      windowScrollTop >= productDetailScrollTop &&
      windowScrollTop < buyGuideScrollTop
    ) {
      dispatch(handleAnchorIndex(0));
    } else if (
      windowScrollTop >= buyGuideScrollTop &&
      windowScrollTop < reviewScrollTop
    ) {
      dispatch(handleAnchorIndex(1));
    } else if (windowScrollTop >= reviewScrollTop) {
      dispatch(handleAnchorIndex(2));
    }
  }

  function handleShareClick() {
    const url = window.location.href;
    navigator.clipboard.writeText(url);

    alert("주소가 복사되었습니다.");
  }

  function handleLikeClick() {
    const cookieData = JSON.parse(getCookie("likeList") as string);

    if (activeLike) {
      const removeData = cookieData.filter((item) => item.idx !== data.idx);

      setCookie("likeList", JSON.stringify(removeData));
      dispatch(handleLikeCount(removeData.length));
      dispatch(handleActiveLike(false));
      alert("좋아요 목록에서 삭제됐습니다.");
    } else {
      const updateData = cookieData ? [data, ...cookieData] : [data];

      const expiryDate = new Date(Number(new Date()) + 315360000000);
      const refererKey = new Date().getTime() + Math.random();
      setCookie("likeList", JSON.stringify(updateData));

      dispatch(handleLikeCount(updateData.length));
      dispatch(handleActiveLike(true));
      alert("좋아요 목록에 추가됐습니다.");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  useEffect(() => {
    dispatch(getProductDetail(idx));
  }, []);

  return { handleClick, handleLikeClick, handleShareClick };
}
