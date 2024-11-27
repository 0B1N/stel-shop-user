import { useRouter } from "next/router";
import { StorePageParams } from "pages/store";
import { useCallback, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useRootState } from "store";
import { handleFilter } from "store/storePageSlice";
import { ProductOrderType } from "utils/enum/store";
import useDidMountEffect from "./useDidMountEffect";

function getURLParameters(url: string): Record<string, string> {
  const params = {};

  url.replace(
    /([^=&]+)=([^&]*)/gi,
    (_, key, value) => (params[key] = decodeURIComponent(value)),
  );

  return params;
}

export default function useStore(params: StorePageParams) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { filter, list, visibleFilterMenu } = useRootState(
    (state) => state.storePageSlice,
  );

  function convertQueryString(object: Object) {
    Object.keys(object).forEach((key) =>
      object[key] === undefined ? delete object[key] : {},
    );

    let result = [];
    Object.keys(object).forEach((key) => {
      result = [...result, `${key}=${object[key]}`];
    });

    return result.join("&");
  }

  const searchParams = useMemo(() => {
    return getURLParameters(router.asPath.split("?")[1]);
  }, [router.asPath]);

  const setURL = useCallback(
    (queryStrings: Record<string, string | number>, url?: string) => {
      const object = url ? getURLParameters(url) : searchParams;
      const changeParams = { ...object, ...queryStrings };

      Object.keys(changeParams).reduce((prev, key) => {
        const value = changeParams[key];
        const encodingValue = Array.isArray(value) ? value.join(",") : value;

        prev[key] = encodingValue;

        return prev;
      }, changeParams);

      return convertQueryString(changeParams);
    },
    [filter.category, filter.member, filter.order],
  );

  useEffect(() => {
    dispatch(
      handleFilter({
        category: +params.category,
        member: +params.member,
        order: params.order,
      }),
    );
  }, []);

  useDidMountEffect(() => {
    router.replace(`/store?${setURL(filter)}`);
  }, [filter.category, filter.member, filter.order]);

  return { filter, list, visibleFilterMenu };
}
