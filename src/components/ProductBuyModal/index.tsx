import styled from "styled-components";

import { useDispatch } from "react-redux";
import { useRootState } from "store";

import ProductCounter from "components/ProductCounter";
import CloseIcon from "components/Icon/CloseIcon";

import { handleVisibleBuyModal } from "store/globalSlice";
import { handleProductCount } from "store/productDetailSlice";
import useProductDetails from "hooks/useProductDetail";

type ProductBuyModalProps = {
  className?: string;
};

function ProductBuyModal({ className }: ProductBuyModalProps) {
  const { buyModal } = useRootState((state) => state.globalSlice);
  const dispatch = useDispatch();
  const { productCount } = useRootState((state) => state.productDetailSlice);

  const { handleCartClick } = useProductDetails();
  if (!buyModal.visible) return null;

  return (
    <div className={className}>
      <div className="content">
        <div
          className="content__close"
          onClick={() => dispatch(handleVisibleBuyModal())}
        >
          <CloseIcon />
        </div>

        <ProductCounter
          count={productCount}
          onCountChange={(count) => dispatch(handleProductCount(count))}
        />

        <div className="content__submit">
          <button
            className="content__submit--button cart"
            onClick={handleCartClick}
          >
            장바구니
          </button>
          <button className="content__submit--button buy">바로 구매하기</button>
        </div>
      </div>
    </div>
  );
}

export default styled(ProductBuyModal)`
  position: fixed;
  z-index: 200;
  inset: 0px;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .content {
    border-top-left-radius: 1.142857142857143rem;
    border-top-right-radius: 1.142857142857143rem;
    height: 45%;
    position: absolute;
    background-color: #fff;
    width: 100%;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: 1.142857142857143rem;
    margin: 0;
    padding: 0 1.142857142857143rem 1.142857142857143rem;
    max-height: calc(90dvh - 6rem - 58px);
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;

    &__close {
      display: flex;
      align-self: center;
      padding: 1.142857142857143rem 0 1.142857142857143rem 1.142857142857143rem;
      margin-left: auto;
      cursor: pointer;
    }

    &__submit {
      margin-top: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 0.5714285714285714rem;

      &--button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 4rem;
        width: 100%;
        font-family: Pretendard;
        font-size: 1.142857142857143rem;
        font-weight: 700;
        line-height: 1.714285714285714rem;
        letter-spacing: -0.014285714285714287rem;
        line-height: normal;
        outline: none;
        border: none;
        border-radius: 0.5714285714285714rem;
        box-sizing: border-box;
        cursor: pointer;

        &.cart {
          border: solid 1px #d9d9d9;
          background: #fff;
          color: #141414;
        }

        &.buy {
          background: #141414;
          color: #fff;
        }
      }
    }
  }
`;
