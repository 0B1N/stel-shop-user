import styled from "styled-components";
import UserInfo from "./UserInfo";
import Image from "next/image";
import { ReviewData } from "components/ReviewCard";
import { PRODUCT_CATEGORY } from "utils/enum/store";
import media from "utils/styles/mediaQuery";

type ReviewItemProps = {
  className?: string;
  data: ReviewData;
  onClick(data: ReviewData): void;
};

function ReviewItem({ className, data, onClick }: ReviewItemProps) {
  return (
    <div className={`${className} reviewItem`} onClick={() => onClick(data)}>
      <UserInfo
        email={data.email}
        rate={data.review.rate}
        date={data.review.date}
      />

      <div className="reviewItem__content">
        <div className="reviewItem__content__body">
          <p className="reviewItem__content__body--option">
            {PRODUCT_CATEGORY[data.product.category]}
          </p>
          <p className="reviewItem__content__body--desc">{data.review.desc}</p>
        </div>

        <div className="reviewItem__content__images">
          {data.review.images.length > 1 && (
            <div className="reviewItem__content__images--more">
              +{data.review.images.length - 1}
            </div>
          )}

          <Image fill={true} src={data.review.images[0]} alt="reviewPhoto" />
        </div>
      </div>
    </div>
  );
}

export default styled(ReviewItem)`
  cursor: pointer;
  width: 100%;
  position: relative;
  padding: 1.714285714285714rem 0;

  &.reviewItem + &.reviewItem {
    border-top: 1px solid #e7e7e7;
  }

  .reviewItem__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding-left: 4.371429rem;

    &__body {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: stretch;

      &--option {
        margin: 0 0 0.2857142857142857rem;
        font-size: 0.8571428571428571rem;
        font-weight: 700;
        line-height: 1.214285714285714rem;
        letter-spacing: -0.014285714285714287rem;
        color: #a2a2a2;
      }

      &--desc {
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.571428571428571rem;
        letter-spacing: -0.014285714285714287rem;
        color: #141414;
        word-break: keep-all;
        word-wrap: break-word;
      }
    }

    &__images {
      position: relative;
      flex-shrink: 0;
      width: 7.714285714285714rem;
      height: 7.714285714285714rem;
      margin-left: 1.142857142857143rem;
      border-radius: 0.5714285714285714rem;
      overflow: hidden;

      &--more {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: absolute;
        inset: 0;
        background: rgba(20, 20, 20, 0.302);
        border-radius: 0.5714285714285714rem;
        font-family: "Neue Haas Unica Pro";
        font-size: 1.142857142857143rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.571428571428571rem;
        letter-spacing: -0.014285714285714287rem;
        color: #fff;
        z-index: 2;
      }
    }
  }

  ${media.large} {
    .reviewItem__content {
      padding-left: 3.57142857142857rem;
    }
  }
`;
