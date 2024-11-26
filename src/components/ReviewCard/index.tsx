import Rate from "components/Card/Rate";
import styled from "styled-components";
import ProductInfo from "./ProductInfo";
import Figure from "components/Card/Figure";

export type ReviewData = {
  email: string;
  review: {
    images: string[];
    desc: string;
    rate: number;
    date: string;
  };
  product: {
    image: string;
    title: string;
    price: number;
    option?: string;
  };
};

type ReviewCardProps = {
  className?: string;
  data: ReviewData;
  onClick(data: ReviewData): void;
};

function ReviewCard({ className, data, onClick }: ReviewCardProps) {
  return (
    <div
      className={className}
      onClick={(e) => {
        e.preventDefault();
        e.isPropagationStopped();

        onClick(data);
      }}
    >
      <Figure
        className="reviewCard__image"
        src={data.review.images[0]}
        alt="photo_review"
      />

      <div className="reviewCard__info">
        <Rate rate={data.review.rate} />
        <span className="reviewCard__info--text">
          {data.review.date.split("-").join(".")}
        </span>
      </div>

      <ProductInfo
        title={data.product.title}
        image={data.product.image}
        price={data.product.price}
        option={data.product.option}
      />
    </div>
  );
}

export default styled(ReviewCard)`
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;

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
