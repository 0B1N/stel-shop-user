import Rate from "components/Card/Rate";
import CloseIcon from "components/Icon/CloseIcon";
import { ReviewData } from "components/ReviewCard";
import ProductInfo from "components/ReviewCard/ProductInfo";
import Image from "next/image";
import styled from "styled-components";
import media from "utils/styles/mediaQuery";
import { emailMasking } from "utils/text";

type ModalProps = {
  className?: string;
  data: ReviewData;
  onClose(): void;
};

function Modal({ className, data, onClose }: ModalProps) {
  return (
    <div className={className}>
      <div className="modal">
        <div className="modal__photo"></div>
        <div className="modal__detail">
          <header className="modal__detail__header">
            <span className="modal__detail__header--title">리뷰 상세</span>
            <CloseIcon
              className="modal__detail__header--icon"
              onClick={() => onClose()}
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
                  {emailMasking("binnyy01@gmail.com")}
                </p>
                <Rate rate={5} />
              </div>
              <div className="modal__detail__user--date">6일전</div>
            </div>

            <div className="modal__detail--comment">
              {`이건 꼭 사아대! 이건 꼭 사아대!\n이건 꼭 사아대! 이건 꼭 사아대!\n
이건 꼭 사아대! 이건 꼭 사아대!\n이건 꼭 사아대! 이건 꼭 사아대!\n
이건 꼭 사아대! 이건 꼭 사아대!\n이건 꼭 사아대! 이건 꼭 사아대!\n
이건 꼭 사아대! 이건 꼭 사아대!\n이건 꼭 사아대! 이건 꼭 사아대!\n
이건 꼭 사아대! 이건 꼭 사아대!\n이건 꼭 사아대! 이건 꼭 사아대!\n
이건 꼭 사아대! 이건 꼭 사아대!\n이건 꼭 사아대! 이건 꼭 사아대!\n
이건 꼭 사아대! 이건 꼭 사아대!\n이건 꼭 사아대! 이건 꼭 사아대!\n
이건 꼭 사아대! 이건 꼭 사아대!\n이건 꼭 사아대! 이건 꼭 사아대!\n
이건 꼭 사아대! 이건 꼭 사아대!\n이건 꼭 사아대! 이건 꼭 사아대!\n
이건 꼭 사아대! 이건 꼭 사아대! 이건 꼭 사아대! 이건 꼭 사아대!\n
이건 꼭 사아대! 이건 꼭 사아대! 이건 꼭 사아대! 이건 꼭 사아대!\n
이건 꼭 사아대! 이건 꼭 사아대! 이건 꼭 사아대! 이건 꼭 사아대!\n
이건 꼭 사아대! 이건 꼭 사아대! 이건 꼭 사아대! 이건 꼭 사아대!\n
이건 꼭 사아대! 이건 꼭 사아대! 이건 꼭 사아대! 이건 꼭 사아대!\n
이건 꼭 사아대! 이건 꼭 사아대! 이건 꼭 사아대! 이건 꼭 사아대!\n
이건 꼭 사아대! 이건 꼭 사아대! 이건 꼭 사아대! 이건 꼭 사아대!\n
이건 꼭 사아대!`}
            </div>
          </div>

          <ProductInfo
            className="modal__detail--product"
            title="2024 타비 뿡댕이 키링"
            image="/test_image.png"
            price={15000}
          />
        </div>
      </div>
    </div>
  );
}

export default styled(Modal)`
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
      overflow: hidden;
      background-color: rgba(20, 20, 20, 0.302);
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
      }

      &__detail {
        width: 50%;
        height: 100%;
      }
    }
  }
`;
