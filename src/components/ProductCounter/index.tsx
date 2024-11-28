import styled from "styled-components";

import Counter from "components/ProductCounter/Counter";

import { numberWithCommas } from "utils/number";

type ProductCounterProps = {
  className?: string;
  price: number;
  count: number;
  onCountChange: (count: number) => void;
};

function ProductCounter({
  className,
  price,
  count,
  onCountChange,
}: ProductCounterProps) {
  return (
    <div className={className}>
      <div className="productCounter__wrap">
        <span className="productCounter__wrap--label">수량</span>

        <Counter
          count={count}
          onCountChange={(count) => onCountChange(count)}
        />
      </div>

      <div className="productCounter__wrap">
        <span className="productCounter__wrap--label">총 상품 금액</span>
        <div className="productCounter__wrap--total">
          ￦ {numberWithCommas(price * count)}
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
