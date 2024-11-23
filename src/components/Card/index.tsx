import styled from "styled-components";
import Rate from "./Rate";
import Image from "next/image";
import { numberWithCommas } from "utils/number";

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
    <div className={className}>
      <div className="card__image" data-empty={!img}>
        {isNew && <span className="card__image--new">신상품</span>}
        {img && (
          <Image
            src={img}
            fill
            // width={163}
            // height={163}
            alt="Picture of the author"
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            // sizes="(min-width: 768px) 50vw, (min-width: 1280px) 100vw"
            // placeholder="blur"
            style={
              {
                // width: "100%",
                // maxWidth: "100%",
                // maxHeight: "100%",
                // aspectRatio: "1 / 1",
              }
            }
          />

          // <Image
          //   fill={true}
          //   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          //   // width={299}
          //   // height={299}
          //   src={img}
          //   alt={title}
          // />
        )}
      </div>

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
  );
}

export default styled(Card)`
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  .card__image {
    position: relative;
    font-size: 0;
    border-radius: 21px;
    overflow: hidden;
    background-color: #949494;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;

    &[data-empty="true"] {
      width: 299px;
      height: 299px;
    }

    &--new {
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
