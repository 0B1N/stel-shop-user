import ArrowIcon from "components/Icon/ArrowIcon";
import CloseIcon from "components/Icon/CloseIcon";
import Counter from "components/ProductCounter/Counter";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import media from "utils/styles/mediaQuery";

type CartPageProps = {
  className?: string;
};

function CartPage({ className }: CartPageProps) {
  const [count, setCount] = useState(1);

  return (
    <div className={className}>
      <header className="header">
        <Link href="/" className="header--icon">
          <ArrowIcon rotate={180} />
        </Link>

        <span className="header--title">장바구니</span>
      </header>

      <div className="contents">
        <div className="order">
          <div className="order__item">
            <div className="order__item__main">
              <div className="order__item__main--image">
                <Image
                  width={100}
                  height={100}
                  src="/test_image.png"
                  alt="order_image"
                />
              </div>
              <div className="order__item__main__info">
                <p className="order__item__main__info--title">
                  2024 타비 뿡댕이 키링
                </p>
                <p className="order__item__main__info--option">키링</p>
                <p className="order__item__main__info--price">21,000원</p>
              </div>

              <CloseIcon className="order__item__main--close" size={16} />

              <Counter
                count={count}
                className="order__item__main--button"
                onCountChange={(count) => setCount(count)}
              />
            </div>
            <div className="order__item__option">
              <span className="order__item__option--title">수량/1개</span>
              <span className="order__item__option--price">17,000원</span>
            </div>
          </div>

          <div className="order__item">
            <div className="order__item__main">
              <div className="order__item__main--image">
                <Image
                  width={100}
                  height={100}
                  src="/test_image.png"
                  alt="order_image"
                />
              </div>
              <div className="order__item__main__info">
                <p className="order__item__main__info--title">
                  2024 타비 뿡댕이 키링
                </p>
                <p className="order__item__main__info--option">키링</p>
                <p className="order__item__main__info--price">21,000원</p>
              </div>

              <CloseIcon className="order__item__main--close" size={16} />

              <Counter
                count={count}
                className="order__item__main--button"
                onCountChange={(count) => setCount(count)}
              />
            </div>
            <div className="order__item__option">
              <span className="order__item__option--title">수량/1개</span>
              <span className="order__item__option--price">17,000원</span>
            </div>
          </div>

          <div className="order__item">
            <div className="order__item__main">
              <div className="order__item__main--image">
                <Image
                  width={100}
                  height={100}
                  src="/test_image.png"
                  alt="order_image"
                />
              </div>
              <div className="order__item__main__info">
                <p className="order__item__main__info--title">
                  2024 타비 뿡댕이 키링
                </p>
                <p className="order__item__main__info--option">키링</p>
                <p className="order__item__main__info--price">21,000원</p>
              </div>

              <CloseIcon className="order__item__main--close" size={16} />

              <Counter
                count={count}
                className="order__item__main--button"
                onCountChange={(count) => setCount(count)}
              />
            </div>
            <div className="order__item__option">
              <span className="order__item__option--title">수량/1개</span>
              <span className="order__item__option--price">17,000원</span>
            </div>
          </div>
        </div>

        <div className="receipt">
          <div className="receipt__content">
            <p className="receipt__content__title">주문정보</p>

            <div className="receipt__content__item">
              <span className="receipt__content__item--title">총 수량</span>
              <span className="receipt__content__item--price">2개</span>
            </div>

            <div className="receipt__content__item">
              <span className="receipt__content__item--title">총 상품금액</span>
              <span className="receipt__content__item--price">38,000원</span>
            </div>

            <div className="receipt__content__item">
              <span className="receipt__content__item--title">총 배송비</span>
              <span className="receipt__content__item--price">3,000원</span>
            </div>

            <div className="receipt__content__total">
              <div className="receipt__content__total--title">총 주문금액</div>
              <div className="receipt__content__total--price">41,000원</div>
            </div>
          </div>

          <button className="receipt__submit">주문서 작성</button>
        </div>
      </div>

      <footer className="footer">
        <button className="footer__button">주문서 작성</button>
      </footer>
    </div>
  );
}

export default styled(CartPage)`
  position: relative;
  padding-bottom: 70px;

  .header {
    background-color: #fff;
    padding: 0 1.1428571429rem;
    height: 4.2857142857rem;
    color: #141414;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;

    &--icon {
      position: absolute;
      left: 1.1428571429rem;
      font-size: 0;

      svg {
        width: 1.7142857143rem;
        height: 1.7142857143rem;
      }
    }

    &--title {
      font-size: 1.1428571429rem;
      font-style: normal;
      font-weight: 700;
      letter-spacing: -0.0142857143rem;
      line-height: 1.5;
    }
  }

  .contents {
    .order {
      padding: 1.714285714285714rem 1.142857142857143rem 0;

      &__item {
        padding: 1.142857142857143rem 0;

        &__main {
          display: flex;
          position: relative;
          margin-bottom: 0.5714285714285714rem;

          &--image {
            margin-right: 1.142857142857143rem;
            flex-shrink: 0;
            width: 7.142857142857143rem;
            height: 7.142857142857143rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #f6f6f6;
            overflow: hidden;
            border-radius: 16px;
          }

          &__info {
            display: flex;
            flex-direction: column;
            align-items: baseline;

            &--title {
              font-size: 1rem;
              font-style: normal;
              font-weight: 500;
              letter-spacing: -0.0142857143rem;
              line-height: 1.5714285714;
              color: #141414;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }

            &--option {
              color: #a2a2a2;
              font-size: 1rem;
              font-style: normal;
              font-weight: 500;
              letter-spacing: -0.0142857143rem;
              line-height: 1.5714285714;
            }

            &--price {
              margin-top: auto;
              color: #141414;
              margin-bottom: 0.35714285714285715rem;
              font-size: 1rem;
            }
          }

          &--close {
            width: 1.1429rem;
            height: 1.1429rem;
            margin-left: auto;
          }

          &--button {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 6.3rem;
            height: 2.5rem;
            padding: 0 0.8571428571428571rem;
          }
        }

        &__option {
          padding: 0.2857142857142857rem 0 0;
          display: flex;
          justify-content: space-between;

          &--title,
          &--price {
            font-size: 0.8571428571rem;
            font-style: normal;
            font-weight: 500;
            letter-spacing: -0.0142857143rem;
            line-height: 1.4166666667;
            color: #6b6b6b;
          }
        }
      }

      &__item + .order__item {
        border-top: 1px solid #f2f2f2;
      }
    }

    .receipt {
      &__submit {
        display: none;
        justify-content: center;
        align-items: center;
        height: 4rem;
        width: 100%;
        font-size: 1.142857142857143rem;
        font-weight: 700;
        line-height: 1.714285714285714rem;
        letter-spacing: -0.014285714285714287rem;
        line-height: normal;
        outline: none;
        border: none;
        border-radius: 0.5714285714285714rem;
        cursor: pointer;
        background: #141414;
        color: #fff;
        margin-top: 1.142857142857143rem;
      }

      &__content {
        margin: 1.714285714285714rem 1.142857142857143rem;
        padding: 1.142857142857143rem;
        border: 1px solid #f2f2f2;
        border-radius: 1.142857142857143rem;
        background: #fff;

        &__title {
          padding-bottom: 1.142857142857143rem;
          border-bottom: 1px solid #141414;
          font-size: 1.1428571429rem;
          font-style: normal;
          font-weight: 700;
          letter-spacing: -0.0142857143rem;
          line-height: 1.5;
          margin-bottom: 1.142857142857143rem;
        }

        &__item {
          display: flex;
          justify-content: space-between;
          align-items: center;

          &--title {
            font-size: 1rem;
            font-style: normal;
            font-weight: 500;
            letter-spacing: -0.0142857143rem;
            line-height: 1.5714285714;
          }

          &--price {
            font-size: 1rem;
            font-style: normal;
            font-weight: 500;
            letter-spacing: -0.0142857143rem;
            line-height: 1.4285714286;
          }
        }

        &__item + .receipt__item {
          margin-top: 1.142857142857143rem;
        }

        &__total {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1.142857142857143rem;
          padding-top: 1.142857142857143rem;
          border-top: 1px dashed #a2a2a2;

          &--title {
            font-size: 1.1428571429rem;
            font-style: normal;
            font-weight: 700;
            letter-spacing: -0.0142857143rem;
            line-height: 1.5;
          }

          &--price {
            font-size: 1.4285714286rem;
            font-style: normal;
            font-weight: 500;
            letter-spacing: -0.0142857143rem;
            line-height: 1.4;
          }
        }
      }
    }
  }

  .footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    padding: 1.142857142857143rem;
    background-color: #fff;

    &__button {
      width: 100%;
      padding: 1rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f5f5f5;
      border: none;
      color: #fff;
      border-radius: 8px;
      background: #141414;
      color: #fff;
    }
  }

  ${media.large} {
    max-width: 1280px;
    width: 100%;
    margin: 86px auto 0;
    padding-top: 2.285714285714286rem;
    padding-bottom: 8.571428571428571rem;

    .header {
      padding: 0;
      justify-content: flex-start;

      &--icon {
        display: none;
      }

      &--title {
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        letter-spacing: -0.0142857143rem;
        line-height: 1.3928571429;
      }
    }

    .contents {
      display: flex;
      column-gap: 2.285714285714286rem;
      align-items: flex-start;
      margin: 0;

      .order {
        flex: 1;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        padding: 0;

        &__item {
          padding: 1.142857142857143rem;

          &__main {
            align-items: center;

            &__info {
              row-gap: 0.2857142857142857rem;

              &--title {
                font-size: 1.1428571429rem;
                font-style: normal;
                font-weight: 500;
                letter-spacing: -0.0142857143rem;
                line-height: 1.5;
              }

              &--price {
                font-size: 1.4285714286rem;
                font-style: normal;
                font-weight: 700;
                letter-spacing: -0.0142857143rem;
                line-height: 1.4;
                margin: 0;
              }
            }

            &--close {
              margin-bottom: auto;
            }
          }
        }
      }

      .receipt {
        flex: 0 0 32rem;

        &__content {
          margin: 0;
        }

        &__submit {
          display: flex;
        }
      }
    }

    .footer {
      display: none;
    }
  }
`;
