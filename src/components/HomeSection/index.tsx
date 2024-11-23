import ArrowIcon from "components/Icon/ArrowIcon";
import Link from "next/link";
import { ReactNode } from "react";
import styled from "styled-components";
import media from "utils/styles/mediaQuery";

type HomeSectionProps = {
  title: string;
  href?: string;
  className?: string;
  children?: ReactNode;
};

function HomeSection({ title, href, className, children }: HomeSectionProps) {
  return (
    <section className={`${className} new`}>
      <header className="homeSection__header">
        <div className="homeSection__header--title">
          <span>{title}</span>
        </div>

        {href && (
          <Link href={href} className="homeSection__header--more">
            <span>더보기</span>
            <ArrowIcon />
          </Link>
        )}
      </header>

      <div className="homeSection__contents">{children}</div>
    </section>
  );
}

export default styled(HomeSection)`
  /* max-width: 1280px; */
  width: 100%;
  /* margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 100px; */

  &.new {
    padding-top: 90px;
  }

  .homeSection__header {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 44px;
    padding: 0 18px;

    &--title {
      font-family: "Roboto", sans-serif;
      font-weight: 900;
      font-style: normal;
      font-size: 2.8571rem;
      text-align: center;
      position: relative;

      span {
        display: inline-block;
      }

      &::after {
        content: "";
        width: 100%;
        height: 4px;
        background-color: #000;
        position: absolute;
        bottom: -2px;
        left: 0;
      }
    }

    &--more {
      color: #757575;
      font-size: 1.1429rem;
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      letter-spacing: -0.0571rem;

      svg {
        margin-top: -3px;
      }
    }
  }

  .homeSection__contents {
    /* display: flex; */
    /* gap: 28px; */
    /* flex-wrap: wrap; */
    /* justify-content: center; */
  }

  ${media.small} {
    .homeSection__header {
      padding: 0;
    }
  }
`;
