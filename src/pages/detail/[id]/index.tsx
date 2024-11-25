import Rate from "components/Card/Rate";
import Collapse from "components/Collapse";
import Header from "components/header";
import CloseIcon from "components/Icon/CloseIcon";
import HeartIcon from "components/Icon/HeartIcon";
import MinusIcon from "components/Icon/MinusIcon";
import PlusIcon from "components/Icon/PlusIcon";
import ProductCounter from "components/ProductCounter";
import ReviewItem from "components/ReviewItem";
import Table from "components/Table";
import Image from "next/image";
import { useMemo, useState } from "react";
import styled from "styled-components";
import { PRODCUT_MEMBERS } from "utils/enum/store";
import { numberWithCommas } from "utils/number";
import media from "utils/styles/mediaQuery";
import { STELLIVE_PALETTE } from "utils/styles/palette";

type ProductDetailPageProps = {
  className?: string;
  params: {
    id: number;
  };
};

function ProductDetailPage({ className }: ProductDetailPageProps) {
  const [count, setCount] = useState(1);
  const [anchorIndex, setAnchorIndex] = useState(0);
  const [hideProductInfo, setHideProductInfo] = useState(true);
  const [visibleBuyModal, setVisibleBuyModal] = useState(false);

  const tallent = useMemo(() => 7, []);

  return (
    <div className={className}>
      <div className="body">
        <div className="productInfo">
          <div className="productInfo__image">
            <div className="productInfo__image__preview">
              <figure className="productInfo__image__preview--item">
                <Image
                  src="/product_detail_test_image.png"
                  fill={true}
                  alt="product_detail"
                />
              </figure>
            </div>
            <figure className="productInfo__image__main">
              <Image
                src="/product_detail_test_image.png"
                fill={true}
                alt="product_detail"
              />
            </figure>
          </div>

          <div className="productInfo__option productForm">
            <div className="productForm__top">
              <div
                className="productForm__top--badge"
                style={{
                  backgroundColor: STELLIVE_PALETTE[tallent][100],
                  color: STELLIVE_PALETTE[tallent][500],
                }}
              >
                {PRODCUT_MEMBERS[tallent]}
              </div>

              <div className="productForm__top__action"></div>
            </div>

            <p className="productForm__title">2024 타비 뿡댕이 키링</p>
            <p className="productForm__category">키링</p>
            <p className="productForm__price">￦ 15,000</p>

            <div className="productForm__review">
              <Rate size={19} rate={5} className="productForm__review--rate" />

              <span className="productForm__review--label">00개 리뷰 보기</span>
            </div>

            <div className="productForm__delivery">
              <p className="productForm__delivery--title">기본 배송료 : 무료</p>
              <p className="productForm__delivery--text">
                국내 도서 산간/해외는 추가 비용이 발생할 수 있으며, 정확한
                배송비는 결제 화면에서 확인할 수 있습니다.
              </p>
            </div>
          </div>

          <div className="productInfo__tag">
            <div
              className="productInfo__tag--line"
              style={{ left: `${anchorIndex * 33.333333}%` }}
            />

            <div
              className="productInfo__tag__item"
              onClick={() => setAnchorIndex(0)}
            >
              상품 상세
            </div>
            <div
              className="productInfo__tag__item"
              onClick={() => setAnchorIndex(1)}
            >
              구매 안내
            </div>
            <div
              className="productInfo__tag__item"
              onClick={() => setAnchorIndex(2)}
            >
              리뷰 00
            </div>
          </div>

          <div
            className="productInfo__group"
            style={{
              overflow: hideProductInfo ? "hidden" : "visible",
              maxHeight: hideProductInfo ? "171.42857142857142rem" : "none",
            }}
          >
            <h3 className="productInfo__group--title">상품 소개</h3>

            <div className="box" />

            <button
              className="productInfo__group--button"
              onClick={() => setHideProductInfo(!hideProductInfo)}
            >
              상품 상세 {hideProductInfo ? "더보기" : "접기"}
            </button>
          </div>

          <div className="productInfo__buyGuide">
            <h2 className="productInfo__buyGuide--title">구매 안내</h2>

            <Collapse title="배송 정보">
              <Table
                data={{
                  "배송 정보": "일반택배(CJ대한통운)",
                  "배송 지역": "한국",
                  "배송 기간":
                    "상품 출고 후 영업일 기준 1~3일 이내 수령이 가능하며 도서 산간 지역이거나 택배사의 물량이 많은 경우 기간이 조금 더 소요될 수 있습니다.",
                }}
              />
            </Collapse>

            <Collapse
              title="교환/환불 정보"
              desc={`주문제작 상품은 단순 변심, 주문 착오 등 고객 사유에 따른 교환/환불이 어렵습니다.\n상품에 이상이 있을 경우, 1:1문의하기를 통해 마플샵에 문의 해주세요`}
            >
              <Table
                data={{
                  고객센터: "일반택배(CJ대한통운)",
                  이메일: "asdf123@naver.com",
                }}
              />
            </Collapse>
          </div>

          <div className="productInfo__review">
            <h2 className="productInfo__review--title">리뷰 (00)</h2>

            <div className="productInfo__review__content">
              <ReviewItem
                email="binnyy01@gmail.com"
                rate={5}
                date="6일전"
                imgs={[
                  "/test_image.png",
                  "/test_image.png",
                  "/test_image.png",
                  "/test_image.png",
                ]}
                option="옵션 : L (66 x 34 cm)"
                desc={`이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!\n이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!\n이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!`}
              />

              <ReviewItem
                email="binnyy01@gmail.com"
                rate={5}
                date="6일전"
                imgs={[
                  "/test_image.png",
                  "/test_image.png",
                  "/test_image.png",
                  "/test_image.png",
                ]}
                option="옵션 : L (66 x 34 cm)"
                desc={`이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!\n이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!\n이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!\n이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!\n이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!\n이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!\n이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!`}
              />

              <ReviewItem
                email="binnyy01@gmail.com"
                rate={5}
                date="6일전"
                imgs={[
                  "/test_image.png",
                  "/test_image.png",
                  "/test_image.png",
                  "/test_image.png",
                ]}
                option="옵션 : L (66 x 34 cm)"
                desc={`이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!\n이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!\n이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!\n이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!\n이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!`}
              />

              <ReviewItem
                email="binnyy01@gmail.com"
                rate={5}
                date="6일전"
                imgs={[
                  "/test_image.png",
                  "/test_image.png",
                  "/test_image.png",
                  "/test_image.png",
                ]}
                option="옵션 : L (66 x 34 cm)"
                desc={`이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!\n이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!\n이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!`}
              />

              <ReviewItem
                email="binnyy01@gmail.com"
                rate={5}
                date="1일전"
                imgs={["/test_image.png"]}
                option="옵션 : L (66 x 34 cm)"
                desc={`이건꼭사야대!이건꼭사야대!!!이건꼭사야대!이건꼭사야대!!!`}
              />
            </div>
          </div>
        </div>

        <div className="productForm">
          <div className="productForm__top">
            <div
              className="productForm__top--badge"
              style={{
                backgroundColor: STELLIVE_PALETTE[tallent][100],
                color: STELLIVE_PALETTE[tallent][500],
              }}
            >
              {PRODCUT_MEMBERS[tallent]}
            </div>

            <div className="productForm__top__action"></div>
          </div>

          <p className="productForm__title">2024 타비 뿡댕이 키링</p>
          <p className="productForm__category">키링</p>
          <p className="productForm__price">￦ 15,000</p>

          <div className="productForm__review">
            <Rate size={19} rate={5} className="productForm__review--rate" />

            <span className="productForm__review--label">00개 리뷰 보기</span>
          </div>

          <ProductCounter
            count={count}
            onCountChange={(count) => setCount(count)}
          />

          <div className="productForm__submit">
            <div className="productForm__submit--button cart">장바구니</div>
            <div className="productForm__submit--button buy">바로 구매하기</div>
          </div>

          <div className="productForm__delivery">
            <p className="productForm__delivery--title">기본 배송료 : 무료</p>
            <p className="productForm__delivery--text">
              국내 도서 산간/해외는 추가 비용이 발생할 수 있으며, 정확한
              배송비는 결제 화면에서 확인할 수 있습니다.
            </p>
          </div>
        </div>

        <div className="productFooter">
          <div className="productFooter--heart">
            <HeartIcon />
          </div>
          <div
            className="productFooter--buy"
            onClick={() => setVisibleBuyModal(!visibleBuyModal)}
          >
            구매하기
          </div>
        </div>

        {visibleBuyModal && (
          <div className="productModal">
            <div className="productModal__content">
              <div
                className="productModal__content__close"
                onClick={() => setVisibleBuyModal(!visibleBuyModal)}
              >
                <CloseIcon />
              </div>

              <ProductCounter
                count={count}
                onCountChange={(count) => setCount(count)}
              />

              <div className="productModal__content__submit">
                <button className="productModal__content__submit--button cart">
                  장바구니
                </button>
                <button className="productModal__content__submit--button buy">
                  바로 구매하기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

ProductDetailPage.getInitialProps = async (ctx) => {
  return {
    params: {
      order: +ctx.query.id,
    },
  };
};

export default styled(ProductDetailPage)`
  margin-top: 61px;

  .body {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    display: flex;

    .productInfo {
      width: 100%;

      &__image {
        display: flex;
        gap: 1.142857142857143rem;
        margin-bottom: 2.285714285714286rem;

        &__preview {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          flex-shrink: 0;
          gap: 0.5714285714285714rem;

          &--item {
            position: relative;
            width: 7.142857142857143rem;
            height: 7.142857142857143rem;
            aspect-ratio: 1 / 1;
            border-radius: 0.5714285714285714rem;
            overflow: hidden;
          }
        }

        &__main {
          background-color: gray;
          position: relative;
          position: relative;
          width: 50.042857rem;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          border-radius: 20px;
        }
      }

      &__option.productForm {
        display: inline-block;
        min-width: auto;
        width: 100%;
        padding: 1.142857142857143rem 1.142857142857143rem 1.714285714285714rem;
        margin-left: 0;
      }

      &__tag {
        width: 100%;
        display: flex;
        border-bottom: 1px solid #828282;
        position: sticky;
        top: 61px;
        background-color: #fff;
        z-index: 3;
        margin-bottom: 1.714285714285714rem;

        &--line {
          width: 33.33333333%;
          position: absolute;
          bottom: 0px;
          left: 0;
          height: 2px;
          background-color: #000;
          transition: all 0.3s ease-in-out;
        }

        &__item {
          width: 33.33333333%;
          padding: 0.7857142857142857rem 0 0.7142857142857143rem;
          margin-bottom: -1px;
          font-size: 1.285714285714286rem;
          line-height: 1.928571428571429rem;
          letter-spacing: -0.02142857142857143rem;
          color: #a2a2a2;
          text-align: center;
          cursor: pointer;
        }
      }

      &__group {
        position: relative;
        padding: 0 1.142857142857143rem 5rem;
        margin-bottom: 5.142857142857143rem;

        & > .box {
          width: 100%;
          height: 4512px;
          background-color: gray;
        }

        &--title {
          font-size: 1.428571428571429rem;
          font-weight: 700;
          line-height: 2rem;
          letter-spacing: -0.014285714285714287rem;
          margin: 0 0 0.5714285714285714rem;
        }

        &--button {
          font-size: 1.142857142857143rem;
          font-weight: 700;
          line-height: 1.714285714285714rem;
          letter-spacing: -0.014285714285714287rem;
          width: calc(100% - 2.285714285714286rem);
          padding: 1.142857142857143rem 1.714285714285714rem;
          color: #6b6b6b;
          border-radius: 0.5714285714285714rem;
          border: 1px solid #d9d9d9;
          background: #fff;
          cursor: pointer;
          position: absolute;
          bottom: 0;
        }
      }

      &__buyGuide {
        padding: 0 1.142857142857143rem;
        margin-bottom: 5.142857142857143rem;

        &--title {
          font-size: 1.428571428571429rem;
          font-weight: 700;
          line-height: 2rem;
          letter-spacing: -0.014285714285714287rem;
          margin-bottom: 0.5714285714285714rem;
        }
      }

      &__review {
        padding: 0 1.142857142857143rem;

        &--title {
          font-size: 1.428571428571429rem;
          font-weight: 700;
          line-height: 2rem;
          letter-spacing: -0.014285714285714287rem;
          margin: 0 0 0.5714285714285714rem;
        }
      }
    }

    .productForm {
      display: none;
      min-width: 32rem;
      padding-left: 1.142857142857143rem;
      margin-left: 1.142857142857143rem;

      &__top {
        margin-bottom: 0.5714rem;

        &--badge {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          font-family: Pretendard;
          font-size: 1rem;
          font-weight: bold;
          line-height: 1.571428571428571rem;
          letter-spacing: -0.014285714285714287rem;
          width: fit-content;
          height: 1.714285714285714rem;
          padding: 0 0.5714285714285714rem;
          border-radius: 0.2857142857142857rem;
        }

        &__action {
        }
      }

      &__title {
        font-size: 2rem;
        font-style: normal;
        font-weight: 500;
        line-height: 2.785714285714286rem;
        letter-spacing: -0.014285714285714287rem;
        margin-bottom: 0.5714rem;
      }

      &__category {
        font-size: 1.142857142857143rem;
        font-weight: 500;
        line-height: 1.714285714285714rem;
        letter-spacing: -0.014285714285714287rem;
        color: #6b6b6b;
        margin: 0;
      }

      &__price {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        font-size: 1.714285714285714rem;
        font-style: normal;
        font-weight: 700;
        line-height: 2.428571428571428rem;
        letter-spacing: -0.014285714285714287rem;
        margin: 1.1429rem 0;
      }

      &__review {
        display: flex;
        align-items: center;
        margin-bottom: 2.8571rem;

        &--label {
          margin-left: 0.5714rem;
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.571428571428571rem;
          letter-spacing: -0.014285714285714287rem;
          color: #a2a2a2;
          height: 1.571428571428571rem;
          cursor: pointer;
          border-bottom: 1px solid #a2a2a2;
        }
      }

      &__delivery {
        &--title {
          font-size: 1rem;
          letter-spacing: -0.03rem;
          line-height: 2rem;
        }

        &--text {
          color: #9797ae;
          font-size: 0.8571428571428571rem;
          letter-spacing: 0;
          line-height: 1.2857rem;
        }
      }

      &__countPrice {
        &--wrap + .productForm__countPrice--wrap {
          border-top: 1px solid #141414;
          padding-top: 0.5714285714285714rem;
          padding-bottom: 0;
        }

        &--wrap {
          gap: 1.142857142857143rem;
          width: 100%;
          padding-bottom: 0.5714285714285714rem;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

          .productForm__countPrice--label {
            font-size: 1rem;
            font-weight: 700;
            line-height: 1.571428571428571rem;
            letter-spacing: -0.014285714285714287rem;
          }

          .productForm__countPrice__count {
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

          .productForm__countPrice__total {
            font-size: 1.714285714285714rem;
            font-style: normal;
            font-weight: 700;
            line-height: 2.428571428571428rem;
            letter-spacing: -0.014285714285714287rem;
            color: #141414;
          }
        }
      }

      &__submit {
        display: flex;
        gap: 1.142857142857143rem;
        margin: 2.285714285714286rem 0;

        &--button {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 4rem;
          width: 100%;
          font-family: Pretendard;
          font-size: 1.142857142857143rem;
          font-weight: 700;
          line-height: 1.714285714285714rem;
          letter-spacing: -0.014285714285714287rem;
          line-height: normal;
          outline: none;
          border: none;
          border-radius: 0.5714285714285714rem;
          box-sizing: border-box;
          cursor: pointer;

          &.cart {
            border: solid 1px #d9d9d9;
            background: #fff;
            color: #141414;
          }

          &.buy {
            background: #141414;
            color: #fff;
          }
        }
      }
    }

    .productFooter {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 0.5714285714285714rem;
      padding: 1.142857142857143rem;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 15;

      &--heart {
        border: none;
        outline: none;
        background: #f8f8f8;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 52px !important;
        height: 52px !important;
        padding: 0;
        color: #d9d9d9;
        background: #fff;
        box-sizing: content-box;
        border-radius: 50%;

        svg {
          width: 2.285714285714286rem;
          height: 2.285714285714286rem;
        }
      }

      &--buy {
        background: rgb(28, 117, 255);
        color: rgb(255, 255, 255);
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 3.714285714285714rem;
        font-family: Pretendard;
        font-size: 1.142857142857143rem;
        font-weight: 700;
        line-height: 1.714285714285714rem;
        letter-spacing: -0.014285714285714287rem;
        text-align: center;
        color: $whtie;
        outline: none;
        border: none;
        border-radius: 0.5714285714285714rem;
        background-color: #1c75ff;
        padding: 0;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        margin: 0;
      }
    }

    .productModal {
      position: fixed;
      z-index: 200;
      inset: 0px;

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
      }

      &__content {
        border-top-left-radius: 1.142857142857143rem;
        border-top-right-radius: 1.142857142857143rem;
        height: 45%;
        position: absolute;
        background-color: #fff;
        width: 100%;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        gap: 1.142857142857143rem;
        margin: 0;
        padding: 0 1.142857142857143rem 1.142857142857143rem;
        max-height: calc(90dvh - 6rem - 58px);
        overflow-x: hidden;
        overflow-y: auto;
        box-sizing: border-box;

        &__close {
          display: flex;
          align-self: center;
          padding: 1.142857142857143rem 0 1.142857142857143rem
            1.142857142857143rem;
          margin-left: auto;
          cursor: pointer;
        }

        &__submit {
          margin-top: auto;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          gap: 0.5714285714285714rem;

          &--button {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 4rem;
            width: 100%;
            font-family: Pretendard;
            font-size: 1.142857142857143rem;
            font-weight: 700;
            line-height: 1.714285714285714rem;
            letter-spacing: -0.014285714285714287rem;
            line-height: normal;
            outline: none;
            border: none;
            border-radius: 0.5714285714285714rem;
            box-sizing: border-box;
            cursor: pointer;

            &.cart {
              border: solid 1px #d9d9d9;
              background: #fff;
              color: #141414;
            }

            &.buy {
              background: #141414;
              color: #fff;
            }
          }
        }
      }
    }
  }

  ${media.small} {
    margin-top: 86px;
  }

  ${media.large} {
    .body {
      .productInfo {
        max-width: 65.14285714285714rem;

        &__option.productForm {
          display: none;
        }

        &__tag {
          top: 86px;
        }

        &__group {
          padding: 0 0 5rem;

          &--button {
            width: 100%;
          }
        }

        &__buyGuide {
          padding: 0;
        }

        &__review {
          padding: 0;
        }
      }

      .productForm {
        display: inline-block;
      }

      .productFooter {
        display: none;
      }
    }
  }
`;
