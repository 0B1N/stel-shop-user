import { useEffect } from "react";

import { toast } from "react-toastify";

import { useAppDispatch, useRootState } from "store";

import { getCookie, setCookie } from "cookies-next";

import { CartItemData } from "components/CartItem";

import {
  handleCartCount,
  handleLikeCount,
  handleVisibleNeedLoginModal,
} from "store/globalSlice";
import {
  handleActiveLike,
  resetProductDetailData,
} from "store/productDetailSlice";

export default function useProductDetails() {
  const dispatch = useAppDispatch();
  const { data, activeLike, productCount } = useRootState(
    (state) => state.productDetailSlice,
  );
  const { cartCount, isLogin } = useRootState((state) => state.globalSlice);

  function handleClick(id: string) {
    const scrollTop = document.getElementById(id).offsetTop;
    const exclusionArea = window.outerWidth < 1280 ? 61 + 41 : 48 + 86;

    window.scrollTo({
      top: scrollTop - exclusionArea,
      behavior: "smooth",
    });
  }

  function handleShareClick() {
    const url = window.location.href;
    navigator.clipboard.writeText(url);

    toast.info("주소가 복사되었습니다.", {
      position: "bottom-center",
    });
  }

  function handleLikeClick() {
    if (!isLogin) {
      return dispatch(handleVisibleNeedLoginModal(true));
    }

    const cookieData = getCookie("likeList")
      ? JSON.parse(getCookie("likeList") as string)
      : "";

    if (activeLike) {
      const removeData = cookieData.filter((item) => item.idx !== data.idx);

      setCookie("likeList", JSON.stringify(removeData));
      dispatch(handleLikeCount(removeData.length));
      dispatch(handleActiveLike(false));

      toast.error("좋아요 목록에서 삭제됐습니다.", {
        position: "bottom-center",
      });
    } else {
      const updateData = cookieData ? [data, ...cookieData] : [data];

      setCookie("likeList", JSON.stringify(updateData), {
        maxAge: 60 * 60 * 24 * 365,
      });

      dispatch(handleLikeCount(updateData.length));
      dispatch(handleActiveLike(true));

      toast.success("좋아요 목록에 추가됐습니다.", {
        position: "bottom-center",
      });
    }
  }

  function handleCartClick() {
    if (!isLogin) {
      return dispatch(handleVisibleNeedLoginModal(true));
    }

    const addData: CartItemData = {
      category: data.category,
      idx: data.idx,
      image: data.images[0],
      title: data.title,
      price: data.price,
      count: productCount,
    };

    let updateData: CartItemData[];
    const parseCookieCartList: CartItemData[] = getCookie("cartList")
      ? JSON.parse(getCookie("cartList") as string)
      : [];

    const hasCartData =
      parseCookieCartList.findIndex((cartItem) => cartItem.idx === data.idx) >=
      0;

    if (parseCookieCartList.length) {
      // 1. 쿠키가 있을 경우
      if (hasCartData) {
        // 1-1. 같은 데이터가 있을 경우 -> count에 +1 하기
        updateData = parseCookieCartList.map((cartItem) =>
          cartItem.idx === data.idx
            ? { ...cartItem, count: cartItem.count + productCount }
            : cartItem,
        );
      } else {
        // 1-2. 데이터가 없을 경우 -> 있는 데이터 앞에 추가하기
        updateData = [addData, ...parseCookieCartList];
      }
    } else {
      // 2. 쿠키가 없을경우 -> 데이터 자체를 넣기
      updateData = [addData];
    }

    setCookie("cartList", JSON.stringify(updateData), {
      maxAge: 60 * 60 * 24 * 365,
    });

    dispatch(handleCartCount(cartCount + productCount));

    toast.success("장바구니에 추가됐습니다.", {
      position: "bottom-center",
    });
  }

  useEffect(() => {
    return () => {
      dispatch(resetProductDetailData());
    };
  }, []);

  return { handleClick, handleLikeClick, handleShareClick, handleCartClick };
}
