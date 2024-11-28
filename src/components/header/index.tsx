import { useEffect } from "react";

import styled from "styled-components";

import { deleteCookie, getCookie } from "cookies-next";

import Link from "next/link";

import { useDispatch } from "react-redux";

import { useRootState } from "store";

import HamburgerIcon from "components/Icon/HamburgerIcon";
import HeartIcon from "components/Icon/HeartIcon";

import media from "utils/styles/mediaQuery";

import {
  handleCartCount,
  handleIsLogin,
  handleLikeCount,
  handleVisibleMenuModal,
} from "store/globalSlice";
import { toast } from "react-toastify";

type HeaderProps = {
  className?: string;
};

function Header({ className }: HeaderProps) {
  const dispatch = useDispatch();
  const { likeCount, cartCount, isLogin } = useRootState(
    (state) => state.globalSlice,
  );

  useEffect(() => {
    if (getCookie("likeList")) {
      const cookieData = JSON.parse(getCookie("likeList") as string);
      dispatch(handleLikeCount(cookieData.length));
    }

    if (getCookie("cartList")) {
      const cookieData = JSON.parse(getCookie("cartList") as string);

      const count = cookieData.reduce((acc, curr) => acc + curr.count, 0);

      dispatch(handleCartCount(count));
    }

    if (getCookie("isLogin")) {
      const cookieData = JSON.parse(getCookie("isLogin") as string);

      dispatch(handleIsLogin(cookieData));
    }
  }, []);

  return (
    <header className={className}>
      <div className="wrapper">
        <div className="header__menu">
          <Link href="/">
            <span className="header__menu--text">HOME</span>
          </Link>
          <Link href="/store?order=popular&category=0&member=0">
            <span className="header__menu--text">STORE</span>
          </Link>
          <Link href="/review">
            <span className="header__menu--text">REVIEW</span>
          </Link>
        </div>

        <Link href="/">
          <img src="/logo.png" alt="logo" className="header__logo" />
        </Link>

        <div className="header__contents">
          {isLogin ? (
            <>
              <span
                className="header__contents--text"
                onClick={() => {
                  deleteCookie("isLogin");

                  dispatch(handleIsLogin(false));

                  toast.info("로그아웃 성공했습니다.", {
                    position: "bottom-center",
                  });
                }}
              >
                LOGOUT
              </span>

              <Link href="/like">
                <span className="header__contents--heart">
                  <HeartIcon />({likeCount})
                </span>
              </Link>

              <Link href="/cart">
                <span className="header__contents--text">
                  CART ({cartCount})
                </span>
              </Link>
            </>
          ) : (
            <Link href="/login">
              <span className="header__contents--text">LOGIN</span>
            </Link>
          )}

          <HamburgerIcon
            className="header__contents--hamburger"
            onClick={() => dispatch(handleVisibleMenuModal())}
          />
        </div>
      </div>
    </header>
  );
}

export default styled(Header)`
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #fff;
  z-index: 5;

  .wrapper {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;

    .header__menu {
      display: none;

      &--text {
        margin: 0 8px;
        font-size: 1rem;
      }
    }

    .header__logo {
      width: 129px;
      object-fit: cover;
    }

    .header__contents {
      display: flex;
      align-items: center;
      margin: 0 -8px;

      &--text,
      &--heart {
        cursor: pointer;
        font-size: 1rem;
      }

      &--heart,
      &--text,
      &--search,
      &--hamburger {
        display: none;
        margin: 0 8px;
      }

      &--search,
      &--hamburger {
        display: inline-block;
      }

      &--heart {
        svg {
          width: 16px;
          height: 16px;
        }
      }
    }
  }

  ${media.large} {
    .wrapper {
      max-width: 1280px;
      width: 100%;
      margin: 0 auto;

      .header__menu {
        width: 33%;
        display: flex;
        margin: 0 -8px;
      }

      .header__logo {
        width: 236px;
      }

      .header__contents {
        width: 33%;
        justify-content: end;

        &--heart {
          display: inline-flex;
          align-items: center;
        }

        &--text {
          display: inline-block;
        }

        &--hamburger {
          display: none;
        }
      }
    }
  }
`;
