import CloseIcon from "components/Icon/CloseIcon";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

type MenuModalProps = {
  className?: string;
  onClose(): void;
};

function MenuModal({ className, onClose }: MenuModalProps) {
  const router = useRouter();

  return (
    <div className={className}>
      <div className="contents">
        <CloseIcon className="menuModal__close" onClick={onClose} />

        <ul className="menuList">
          <li
            className="menuList__item"
            onClick={() => {
              onClose();
              router.push("/");
            }}
          >
            LOGIN
          </li>
          <li
            className="menuList__item"
            onClick={() => {
              onClose();
              router.push("/like");
            }}
          >
            WISH LIST
          </li>
          <li
            className="menuList__item"
            onClick={() => {
              onClose();
              router.push("/cart");
            }}
          >
            CART
          </li>
        </ul>
      </div>
    </div>
  );
}

export default styled(MenuModal)`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  display: flex;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .menuModal__close {
    margin-bottom: 16px;
  }

  .contents {
    width: 80%;
    height: 100%;
    background-color: #fff;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    position: relative;
    z-index: 2;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    padding: 16px;
    align-items: flex-end;

    .menuList {
      width: 100%;

      &__item {
        padding: 1.2571428571428571rem 0;
        text-align: right;
        border-bottom: 1px solid #ddd;
        font-size: 1.3rem;
        font-style: normal;
        font-weight: 500;
        letter-spacing: -0.0142857143rem;
        line-height: 1.5714285714;
      }
    }
  }
`;
