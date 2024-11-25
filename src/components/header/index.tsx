import styled from "styled-components";
import HamburgerIcon from "components/Icon/HamburgerIcon";
import HeartIcon from "components/Icon/HeartIcon";
import Link from "next/link";
import media from "utils/styles/mediaQuery";
import SearchIcon from "components/Icon/SearchIcon";

type HeaderProps = {
  className?: string;
};

function Header({ className }: HeaderProps) {
  return (
    <header className={className}>
      <div className="wrapper">
        <div className="header__menu">
          <Link href="/">
            <span className="header__menu--text">HOME</span>
          </Link>
          <Link href="/store?order=popular">
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
          <a className="header__contents--text" href="">
            LOGIN
          </a>

          <Link href="/like">
            <span className="header__contents--heart">
              <HeartIcon />
              (0)
            </span>
          </Link>

          <Link href="/cart">
            <span className="header__contents--text">CART (0)</span>
          </Link>

          <HamburgerIcon className="header__contents--hamburger" />

          <Link href="/">
            <SearchIcon className="header__contents--search" />
          </Link>
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
  z-index: 2;

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
