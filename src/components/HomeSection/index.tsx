import { ReactNode } from "react";

import Link from "next/link";

import styled from "styled-components";

import ArrowIcon from "components/Icon/ArrowIcon";

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
  width: 100%;

  &.new {
    padding: 90px 16px 0;
  }

  .homeSection__header {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 44px;

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
    grid-template-columns: repeat(2, minmax(0, 1fr));
    flex: 1 0;
    display: grid;
    grid-column-gap: 1.1428571429rem;
    grid-row-gap: 2.2857142857rem;
    position: relative;
    grid-auto-rows: min-content;
  }

  ${media.small} {
    .homeSection__header {
      padding: 0;
    }

    .homeSection__contents {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  ${media.large} {
    .homeSection__contents {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
`;
