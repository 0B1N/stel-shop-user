import Image from "next/image";

import styled from "styled-components";
import { numberWithCommas } from "utils/number";

type ProductInfoProps = {
  title: string;
  image: string;
  price: number;
  option?: string;
  className?: string;
};

function ProductInfo({
  className,
  title,
  price,
  image,
  option,
}: ProductInfoProps) {
  return (
    <div className={className}>
      <div className="productInfo--image">
        <Image width={60} height={60} src={image} alt="product_image" />
      </div>

      <div className="productInfo__detail">
        <span className="productInfo__detail--text title">{title}</span>
        <span className="productInfo__detail--text option">
          옵션 : L (66 x 34 cm)
        </span>
        <span className="productInfo__detail--text price">
          ￦{numberWithCommas(price)}
        </span>
      </div>
    </div>
  );
}

export default styled(ProductInfo)`
  display: flex;
  gap: 1.1429rem;
  align-items: center;

  .productInfo--image {
    flex: 0 0 60px;
    border-radius: 9px;
    overflow: hidden;
  }

  .productInfo__detail {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin-top: -7px;
    width: calc(100% - 76px);

    &--text {
      font-size: 1rem;
      letter-spacing: -0.0157rem;
      color: #313131;
      line-height: 1.3;
      text-align: left;

      width: 100%;
      display: inline-block;
      /* padding: 0 5px; */
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      &.title {
        font-weight: 500;
      }

      &.option {
        font-size: 0.8571428571rem;
        color: #a2a2a2;
      }

      &.price {
        font-size: 0.95rem;
      }
    }
  }
`;
