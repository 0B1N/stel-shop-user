import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRootState } from "store";
import { handleAnchorIndex } from "store/productDetailSlice";

export default function useProductDetails() {
  const dispatch = useDispatch();
  //   const { anchorIndex } = useRootState((state) => state.productDetailSlice);

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

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  return { handleClick };
}
