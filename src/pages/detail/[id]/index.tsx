import Rate from "components/Card/Rate";
import Collapse from "components/Collapse";
import ArrowIcon from "components/Icon/ArrowIcon";
import CloseIcon from "components/Icon/CloseIcon";
import HeartIcon from "components/Icon/HeartIcon";
import ShareIcon from "components/Icon/ShareIcon";
import Modal from "components/Modal";
import ProductCounter from "components/ProductCounter";
import { ReviewData } from "components/ReviewCard";
import ReviewItem from "components/ReviewItem";
import Table from "components/Table";
import useProductDetails from "hooks/useProductDetail";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import Slider, { Settings as SliderProps } from "react-slick";
import { useRootState } from "store";
import {
  handleResetReviewModalState,
  handleReviewModalData,
  handleVisibleBuyModal,
  handleVisibleReviewModal,
} from "store/globalSlice";
import {
  handleHideProductImage,
  handleMainImageIndex,
  handleProductCount,
} from "store/productDetailSlice";
import styled from "styled-components";
import { PRODCUT_MEMBERS } from "utils/enum/store";
import { numberWithCommas } from "utils/number";
import media from "utils/styles/mediaQuery";
import { STELLIVE_PALETTE } from "utils/styles/palette";
import { slick, slickTheme } from "utils/styles/slickStyle";

type ProductDetailPageProps = {
  className?: string;
  params: {
    id: number;
  };
};

const settings: SliderProps = {
  dots: true,
  infinite: false,
  speed: 100,
  slidesToShow: 1,
  slidesToScroll: 1,
  cssEase: "linear",
  arrows: true,
  nextArrow: (
    <div>
      <ArrowIcon size={19} />
    </div>
  ),
  prevArrow: (
    <div>
      <ArrowIcon size={19} rotate={180} />
    </div>
  ),
};

function ProductDetailPage({ className }: ProductDetailPageProps) {
  const { handleClick } = useProductDetails();

  const dispatch = useDispatch();
  const {
    data,
    anchorIndex,
    buyGuides,
    hideProductImage,
    reviews,
    mainImageIndex,
    productCount,
  } = useRootState((state) => state.productDetailSlice);

  return (
    <div className={className}>
      <div className="body">
        <div className="productInfo">
          <div className="productInfo__image">
            <div className="productInfo__image__preview">
              {data.images.map((src, i) => (
                <figure
                  className="productInfo__image__preview--item"
                  onClick={() => dispatch(handleMainImageIndex(i))}
                >
                  <Image src={src} fill={true} alt="product_detail" />
                </figure>
              ))}
            </div>
            <figure className="productInfo__image__main">
              <Image
                src={data.images[mainImageIndex]}
                fill={true}
                alt="product_detail"
              />
            </figure>

            <div className="productInfo__image__slider">
              <Slider {...settings}>
                {data.images.map((src, i) => (
                  <div className="productInfo__image__slider__item">
                    <Image fill={true} src={src} alt={`product_image_${i}`} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="productInfo__option productForm">
            <div className="productForm__top">
              <div
                className="productForm__top--badge"
                style={{
                  backgroundColor: STELLIVE_PALETTE[data.tallent][100],
                  color: STELLIVE_PALETTE[data.tallent][500],
                }}
              >
                {PRODCUT_MEMBERS[data.tallent]}
              </div>

              <div className="productForm__top__action"></div>
            </div>

            <p className="productForm__title">{data.title}</p>
            <p className="productForm__category">{data.category}</p>
            <p className="productForm__price">
              ￦ {numberWithCommas(data.price)}
            </p>

            <div className="productForm__review">
              <Rate
                size={19}
                rate={data.rate}
                className="productForm__review--rate"
              />

              <span
                className="productForm__review--label"
                onClick={() => handleClick("review")}
              >
                {reviews.length}개 리뷰 보기
              </span>
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
              data-active={anchorIndex === 0}
              onClick={() => handleClick("productDetail")}
            >
              상품 상세
            </div>
            <div
              className="productInfo__tag__item"
              data-active={anchorIndex === 1}
              onClick={() => handleClick("buyGuide")}
            >
              구매 안내
            </div>
            <div
              className="productInfo__tag__item"
              data-active={anchorIndex === 2}
              onClick={() => handleClick("review")}
            >
              리뷰 ({reviews.length})
            </div>
          </div>

          <div
            id="productDetail"
            className="productInfo__group"
            style={{
              overflow: hideProductImage ? "hidden" : "visible",
              maxHeight: hideProductImage ? "171.42857142857142rem" : "none",
            }}
          >
            <h3 className="productInfo__group--title">상품 소개</h3>

            <div className="box" />

            <button
              className="productInfo__group--button"
              onClick={() => dispatch(handleHideProductImage())}
            >
              상품 상세 {hideProductImage ? "더보기" : "접기"}
            </button>
          </div>

          <div className="productInfo__buyGuide" id="buyGuide">
            <h2 className="productInfo__buyGuide--title">구매 안내</h2>

            {buyGuides.map((buyGuide, i) => (
              <Collapse title={buyGuide.title} desc={buyGuide.desc}>
                <Table data={buyGuide.list} />
              </Collapse>
            ))}
          </div>

          <div className="productInfo__review" id="review">
            <h2 className="productInfo__review--title">
              리뷰 ({reviews.length})
            </h2>

            <div className="productInfo__review__content">
              {reviews.map((review, i) => (
                <ReviewItem
                  data={review}
                  onClick={(data) => {
                    dispatch(handleVisibleReviewModal());
                    dispatch(handleReviewModalData(data));
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="productForm">
          <div className="productForm__top">
            <div
              className="productForm__top--badge"
              style={{
                backgroundColor: STELLIVE_PALETTE[data.tallent][100],
                color: STELLIVE_PALETTE[data.tallent][500],
              }}
            >
              {PRODCUT_MEMBERS[data.tallent]}
            </div>

            <div className="productForm__top__action">
              <button className="productForm__top__action--button share">
                <ShareIcon />
              </button>

              <button className="productForm__top__action--button like">
                <HeartIcon />
              </button>
            </div>
          </div>

          <p className="productForm__title">{data.title}</p>
          <p className="productForm__category">{data.category}</p>
          <p className="productForm__price">
            ￦ {numberWithCommas(data.price)}
          </p>

          <div className="productForm__review">
            <Rate size={19} rate={5} className="productForm__review--rate" />

            <span
              className="productForm__review--label"
              onClick={() => handleClick("review")}
            >
              {reviews.length}개 리뷰 보기
            </span>
          </div>

          <ProductCounter
            count={productCount}
            onCountChange={(count) => dispatch(handleProductCount(count))}
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
            onClick={() => dispatch(handleVisibleBuyModal())}
          >
            구매하기
          </div>
        </div>
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
  ${slick}
  ${slickTheme}
  margin-top: 61px;

  .body {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    display: flex;

    .productInfo {
      width: 100%;

      &__image {
        &__preview {
          display: none;
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
          display: none;
          background-color: gray;
          position: relative;
          position: relative;
          width: 50.042857rem;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          border-radius: 20px;
        }

        &__slider {
          width: 100%;
          height: 42.8571rem;

          .slick-dots {
            bottom: 10px;
          }

          .slick-arrow {
            width: 2.857142857142857rem;
            height: 2.857142857142857rem;
            border-radius: 50%;
            background-color: rgba(20, 20, 20, 0.302);
            display: inline-flex !important;
            justify-content: center;
            align-items: center;
            z-index: 2;
            color: #fff;

            &::before {
              content: none;
            }

            &.slick-prev {
              left: 1.142857142857143rem;
            }

            &.slick-next {
              right: 1.142857142857143rem;
            }

            &.slick-disabled {
              display: none !important;
            }
          }

          .productInfo__image__slider__item {
            position: relative;
            height: 100%;

            img {
              object-fit: contain;
            }
          }
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

          &[data-active="true"] {
            font-weight: bold;
            color: #000;
          }
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
        display: flex;
        justify-content: space-between;
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
          display: flex;
          gap: 1.428571428571429rem;
          align-items: center;

          &--button {
            width: 1.714285714285714rem;
            height: 1.714285714285714rem;
            background-color: transparent;
            padding: 0;
            cursor: pointer;
          }
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
  }

  ${media.small} {
    margin-top: 86px;
  }

  ${media.large} {
    padding-top: 2.285714285714286rem;

    .body {
      .productInfo {
        max-width: 65.14285714285714rem;

        &__image {
          display: flex;
          gap: 1.142857142857143rem;
          margin-bottom: 2.285714285714286rem;

          &__preview {
            display: flex;
          }

          &__main {
            display: flex;
          }

          &__slider {
            display: none !important;
          }
        }

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
