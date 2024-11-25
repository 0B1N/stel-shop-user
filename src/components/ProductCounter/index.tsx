import MinusIcon from "components/Icon/MinusIcon";
import PlusIcon from "components/Icon/PlusIcon";
import styled from "styled-components";
import { numberWithCommas } from "utils/number";

type ProductCounterProps = {
  className?: string;
  count: number;
  onCountChange: (count: number) => void;
};

function ProductCounter({
  className,
  count,
  onCountChange,
}: ProductCounterProps) {
  return (
    <div className={className}>
      <div className="productCounter__wrap">
        <span className="productCounter__wrap--label">수량</span>
        <div className="productCounter__wrap__count">
          <button
            className="productCounter__wrap__count--button"
            disabled={count === 1}
            onClick={() => onCountChange(count - 1)}
          >
            <MinusIcon />
          </button>
          <span className="productCounter__wrap__count--label">{count}</span>
          <button
            className="productCounter__wrap__count--button"
            onClick={() => onCountChange(count + 1)}
          >
            <PlusIcon />
          </button>
        </div>
      </div>

      <div className="productCounter__wrap">
        <span className="productCounter__wrap--label">총 상품 금액</span>
        <div className="productCounter__wrap--total">
          ￦ {numberWithCommas(15000 * count)}
        </div>
      </div>
    </div>
  );
}

export default styled(ProductCounter)`
  .productCounter__wrap + .productCounter__wrap {
    border-top: 1px solid #141414;
    padding-top: 0.5714285714285714rem;
    padding-bottom: 0;
  }

  .productCounter__wrap {
    gap: 1.142857142857143rem;
    width: 100%;
    padding-bottom: 0.5714285714285714rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &--label {
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.571428571428571rem;
      letter-spacing: -0.014285714285714287rem;
    }

    &__count {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 8.142857142857142rem;
      height: 3.142857142857143rem;
      padding: 1rem 0.8571428571428571rem 1.071428571428571rem
        0.8571428571428571rem;
      border-radius: 0.5714285714285714rem;
      background: #f5f5f5;

      &--button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 2.142857142857143rem;
        height: 2.142857142857143rem;
        padding: 0;
        border: none;
        outline: none;
        background: transparent;
        cursor: pointer;

        svg {
          width: 0.8571428571428571rem;
        }

        &:disabled {
          color: #d9d9d9;
        }
      }

      &--label {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 3rem;
        font-size: 1.142857142857143rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.571428571428571rem;
        letter-spacing: -0.014285714285714287rem;
        text-align: center;
        border: none;
        outline: none;
        background: transparent;
        color: #141414;
      }
    }

    &--total {
      font-size: 1.714285714285714rem;
      font-style: normal;
      font-weight: 700;
      line-height: 2.428571428571428rem;
      letter-spacing: -0.014285714285714287rem;
      color: #141414;
    }
  }
`;
