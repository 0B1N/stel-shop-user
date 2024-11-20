import Rate from "components/Card/Rate";
import Image from "next/image";
import styled from "styled-components";
import { numberWithCommas } from "utils/number";
import ProductInfo from "./ProductInfo";

export type ReviewData = {
  rate: number;
  date: string;
  thumbnail: string;
  detail: {
    img: string;
    title: string;
    price: number;
  };
};

type ReviewCardProps = {
  className?: string;
  data: ReviewData;
  onClick(data: ReviewData): void;
};

function ReviewCardProps({ className, data, onClick }: ReviewCardProps) {
  return (
    <div
      className={className}
      onClick={(e) => {
        e.preventDefault();
        e.isPropagationStopped();

        onClick(data);
      }}
    >
      <div className="reviewCard__image">
        <Image
          width={299}
          height={299}
          src={data.thumbnail}
          alt="photo_review"
        />
      </div>

      <div className="reviewCard__info">
        <Rate rate={data.rate} />
        <span className="reviewCard__info--text">
          {data.date.split("-").join(".")}
        </span>
      </div>

      <ProductInfo
        title={data.detail.title}
        image={data.detail.img}
        price={data.detail.price}
      />
    </div>
  );
}

export default styled(ReviewCardProps)`
  cursor: pointer;

  .reviewCard__image {
    overflow: hidden;
    border-radius: 21px;
    font-size: 0;
  }

  .reviewCard__info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 12px 0 8px;

    &--text {
      font-size: 1rem;
      color: #565656;
    }
  }
`;
