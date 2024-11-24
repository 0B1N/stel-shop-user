import styled from "styled-components";
import Rate from "./Rate";
import Image from "next/image";
import { numberWithCommas } from "utils/number";
import Figure from "./Figure";
import Link from "next/link";

export type CardData = {
  title: string;
  rate: number;
  price: number;
  img?: string;
  isNew?: boolean;
  sale?: number;
};

type CardProps = {
  className?: string;
} & CardData;

function Card({ className, title, img, rate, price, isNew, sale }: CardProps) {
  return (
    <Link href="/detail/[id]" as="/detail/1">
      <div className={className}>
        <Figure
          className={`card__image ${isNew ? "new" : ""}`}
          src={img}
          alt={title}
        />

        <p className="card__title">{title}</p>
        <Rate rate={rate} />
        <div className="card__price">
          {sale ? (
            <>
              <span className="card__price--sale">
                ￦{numberWithCommas(price * (1 - sale / 100))}
              </span>
              <span className="card__price--discount">
                ￦{numberWithCommas(price)}
              </span>
            </>
          ) : (
            `￦ ${numberWithCommas(price)}`
          )}
        </div>
      </div>
    </Link>
  );
}

export default styled(Card)`
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  .card__image {
    &.new {
      position: relative;

      &::before {
        content: "신상품";
        display: inline-block;
        position: absolute;
        top: 20px;
        left: 0;
        font-size: 1rem;
        padding: 4px 6px;
        border-radius: 0 4px 4px 0;
        background-color: #ff403f;
        color: #fff;
        font-weight: bold;
        z-index: 1;
      }
    }
  }

  .card__title {
    margin: 22px 0 4px;
    letter-spacing: -0.0571rem;
    font-size: 1.0714rem;
  }

  .card__price {
    font-size: 1.2143rem;
    font-weight: bold;
    margin-top: 6px;

    &--discount {
      color: #949494;
      font-size: 1.0714rem;
      margin-left: 5px;
      text-decoration: line-through;
      font-weight: 500;
    }

    &--sale {
      font-size: 1.2857rem;
      font-weight: bold;
    }
  }
`;
