import Rate from "components/Card/Rate";
import Image from "next/image";
import styled from "styled-components";
import { numberWithCommas } from "utils/number";

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
} & ReviewData;

function ReviewCardProps({
  className,
  rate,
  thumbnail,
  date,
  detail,
}: ReviewCardProps) {
  return (
    <div className={className}>
      <div className="reviewCard__image">
        <Image width={299} height={299} src={thumbnail} alt="photo_review" />
      </div>

      <div className="reviewCard__info">
        <Rate rate={rate} />
        <span className="reviewCard__info--text">
          {date.split("-").join(".")}
        </span>
      </div>

      <div className="reviewCard__productInfo">
        <div className="reviewCard__productInfo--image">
          <Image width={60} height={60} src={detail.img} alt="product_image" />
        </div>

        <div className="reviewCard__productInfo__detail">
          <span className="reviewCard__productInfo__detail--text">
            {detail.title}
          </span>
          <span className="reviewCard__productInfo__detail--text">
            ￦{numberWithCommas(detail.price)}
          </span>
        </div>
      </div>
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

  .reviewCard__productInfo {
    display: flex;
    gap: 16px;
    align-items: center;

    &--image {
      flex: 0 0 60px;
      border-radius: 9px;
      overflow: hidden;
    }

    &__detail {
      display: flex;
      flex-direction: column;
      margin-top: -7px;

      &--text {
        font-size: 1rem;
        letter-spacing: -0.0157rem;
        color: #313131;
      }
    }
  }
`;
