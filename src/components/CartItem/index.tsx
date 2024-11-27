import styled from "styled-components";

import { useRouter } from "next/router";
import Image from "next/image";

import Counter from "components/ProductCounter/Counter";
import CloseIcon from "components/Icon/CloseIcon";

import { PRODUCT_CATEGORY, ProductCategoryType } from "utils/enum/store";

import { numberWithCommas } from "utils/number";

export type CartItemData = {
  idx: number;
  image: string;
  title: string;
  category: ProductCategoryType;
  price: number;
  count: number;
};

type CartItemProps = {
  className?: string;
  onDelete(idx: number): void;
  onCountChange(idx: number, count: number): void;
} & CartItemData;

function CartItem({
  className,
  idx,
  image,
  title,
  category,
  price,
  count,
  onCountChange,
  onDelete,
}: CartItemProps) {
  const router = useRouter();

  return (
    <div
      className={`${className} orderItem`}
      onClick={() => {
        router.push("/detail/[id]", `/detail/${idx}`);
      }}
    >
      <div className="orderItem__main">
        <div className="orderItem__main--image">
          <Image width={100} height={100} src={image} alt="order_image" />
        </div>
        <div className="orderItem__main__info">
          <p className="orderItem__main__info--title">{title}</p>
          <p className="orderItem__main__info--option">
            {PRODUCT_CATEGORY[category]}
          </p>
          <p className="orderItem__main__info--price">
            ￦ {numberWithCommas(price * count)}
          </p>
        </div>

        <CloseIcon
          className="orderItem__main--close"
          size={16}
          onClick={(e) => {
            e.stopPropagation();
            onDelete(idx);
          }}
        />

        <Counter
          count={count}
          className="orderItem__main--button"
          onCountChange={(count) => {
            onCountChange(idx, count);
          }}
        />
      </div>
    </div>
  );
}

export default styled(CartItem)`
  padding: 1.142857142857143rem 0;
  cursor: pointer;

  .orderItem__main {
    display: flex;
    position: relative;
    margin-bottom: 0.5714285714285714rem;

    &--image {
      margin-right: 1.142857142857143rem;
      flex-shrink: 0;
      width: 7.142857142857143rem;
      height: 7.142857142857143rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f6f6f6;
      overflow: hidden;
      border-radius: 16px;
    }

    &__info {
      display: flex;
      flex-direction: column;
      align-items: baseline;

      &--title {
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        letter-spacing: -0.0142857143rem;
        line-height: 1.5714285714;
        color: #141414;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }

      &--option {
        color: #a2a2a2;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        letter-spacing: -0.0142857143rem;
        line-height: 1.5714285714;
      }

      &--price {
        margin-top: auto;
        color: #141414;
        margin-bottom: 0.35714285714285715rem;
        font-size: 1rem;
      }
    }

    &--close {
      width: 1.1429rem;
      height: 1.1429rem;
      margin-left: auto;
      cursor: pointer;
    }

    &--button {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 6.3rem;
      height: 2.5rem;
      padding: 0 0.8571428571428571rem;
    }
  }

  .orderItem__option {
    padding: 0.2857142857142857rem 0 0;
    display: flex;
    justify-content: space-between;

    &--title,
    &--price {
      font-size: 0.8571428571rem;
      font-style: normal;
      font-weight: 500;
      letter-spacing: -0.0142857143rem;
      line-height: 1.4166666667;
      color: #6b6b6b;
    }
  }

  &.orderItem + &.orderItem {
    border-top: 1px solid #f2f2f2;
  }
`;
