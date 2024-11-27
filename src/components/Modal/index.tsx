import Rate from "components/Card/Rate";
import CloseIcon from "components/Icon/CloseIcon";
import { ReviewData } from "components/ReviewCard";
import ProductInfo from "components/ReviewCard/ProductInfo";
import Image from "next/image";
import styled from "styled-components";
import media from "utils/styles/mediaQuery";
import { emailMasking } from "utils/text";
import Slider, { Settings as SliderProps } from "react-slick";
import { slick, slickTheme } from "utils/styles/slickStyle";
import ArrowIcon from "components/Icon/ArrowIcon";
import { useDispatch } from "react-redux";
import { useRootState } from "store";
import { handleResetReviewModalState } from "store/globalSlice";

type ModalProps = {
  className?: string;
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

function Modal({ className }: ModalProps) {
  const dispatch = useDispatch();
  const { reviewModal } = useRootState((state) => state.globalSlice);

  if (!reviewModal.visible) return null;

  return (
    <div className={className}>
      <div className="modal">
        <div className="modal__photo">
          <Slider {...settings}>
            {reviewModal.data.review.images.map((src, i) => (
              <div className="modal__photo__item">
                <Image fill={true} src={src} alt={`review_image_${i}`} />
              </div>
            ))}
          </Slider>
        </div>

        <div className="modal__detail">
          <header className="modal__detail__header">
            <span className="modal__detail__header--title">리뷰 상세</span>
            <CloseIcon
              className="modal__detail__header--icon"
              onClick={() => dispatch(handleResetReviewModalState())}
            />
          </header>

          <div className="modal__detail--body">
            <div className="modal__detail__user">
              <div className="modal__detail__user--profile">
                <Image
                  src="/profile_mockup_image.webp"
                  alt="profile"
                  width={36}
                  height={37}
                />
              </div>
              <div className="modal__detail__user__body">
                <p className="modal__detail__user__body--email">
                  {emailMasking(reviewModal.data.email)}
                </p>
                <Rate rate={reviewModal.data.review.rate} />
              </div>
              <div className="modal__detail__user--date">
                {reviewModal.data.review.date}
              </div>
            </div>

            <div className="modal__detail--comment">
              {reviewModal.data.review.desc}
            </div>
          </div>

          <ProductInfo
            className="modal__detail--product"
            title={reviewModal.data.product.title}
            image={reviewModal.data.product.image}
            price={reviewModal.data.product.price}
            option={reviewModal.data.product.option}
          />
        </div>
      </div>
    </div>
  );
}

export default styled(Modal)`
  ${slick}
  ${slickTheme}

  position: fixed;
  z-index: 200;
  inset: 0px;

  .modal {
    display: flex;
    max-width: 920px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    margin: 0;
    position: absolute;
    background-color: #fff;
    flex-direction: column;

    &__photo {
      width: 100%;
      height: 280px;
      display: flex;
      align-items: center;
      overflow: hidden;
      background-color: rgba(20, 20, 20, 0.302);

      .slick-slider {
        width: 100%;

        .slick-dots {
          display: none !important;
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
      }

      &__item {
        width: 100%;
        height: 100%;
        position: relative;

        img {
          object-fit: contain;
        }
      }
    }

    &__detail {
      width: 100%;
      height: 100%;
      overflow: hidden;
      padding: 16px;

      &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 12px;
        border-bottom: 1px solid #f5f5f5;
        margin-bottom: 12px;

        &--title {
          font-size: 18px;
          line-height: 1.5;
          font-weight: 700;
        }

        &--icon {
          cursor: pointer;
        }
      }

      &--body {
        overflow-y: auto;
        height: calc(100% - 149px);

        .modal__detail__user {
          display: flex;
          margin-bottom: 16px;

          &--profile {
            font-size: 0;
            border-radius: 50%;
            overflow: hidden;
            margin-right: 12px;
          }

          &__body {
            &--email {
              font-size: 14px;
              line-height: 1.5;
            }
          }

          &--date {
            margin-left: auto;
          }
        }

        .modal__detail--comment {
          white-space: pre-wrap;
        }
      }

      .modal__detail--product {
        padding-top: 16px;
        margin-top: 16px;
        border-top: 1px solid #f5f5f5;
      }
    }
  }

  ${media.small} {
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }

    .modal {
      flex-direction: row;
      border-radius: 16px;
      max-height: 614px;
      box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.1);
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      &__photo {
        width: 50%;
        height: 100%;

        &__item {
          height: 100%;
          aspect-ratio: 1 / 1;
        }

        .slick-slider {
          width: 100%;
          height: auto;

          .slick-list {
            height: auto;

            .slick-track {
              height: auto;

              .slick-slide > div {
                height: auto;
              }
            }
          }

          .slick-dots {
            display: block !important;
          }
        }
      }

      &__detail {
        width: 50%;
        height: 100%;
      }
    }
  }
`;
