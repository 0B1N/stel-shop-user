import ArrowIcon from "components/Icon/ArrowIcon";
import { ReactNode, useCallback, useMemo, useRef, useState } from "react";
import styled from "styled-components";

type CollapseProps = {
  title: string;
  className?: string;
  desc?: string;
  children?: ReactNode;
};

function Collapse({ title, className, desc, children }: CollapseProps) {
  const [isOpen, setIsOpen] = useState(false);

  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = useCallback(
    (event) => {
      event.stopPropagation();
      if (parentRef.current === null || childRef.current === null) {
        return;
      }
      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = "0";
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight + 16}px`;
        childRef.current.style.paddingBottom = `16px`;
      }
      setIsOpen(!isOpen);
    },
    [isOpen],
  );

  return (
    <div className={`${className} collapse`}>
      <header className="collapse__header" onClick={handleButtonClick}>
        <span className="collapse__header--title">{title}</span>
        <ArrowIcon
          className="collapse__header--icon"
          rotate={isOpen ? 90 : 270}
        />
      </header>

      <div className="collapse__wrapper" ref={parentRef}>
        <div className="collapse__wrapper__content" ref={childRef}>
          {desc && <p className="collapse__wrapper__content--desc">{desc}</p>}

          {children}
        </div>
      </div>
    </div>
  );
}

export default styled(Collapse)`
  .collapse__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.142857142857143rem 0;
    cursor: pointer;

    &--title {
      font-size: 1.142857142857143rem;
      font-weight: 700;
      line-height: 1.714285714285714rem;
      letter-spacing: -0.014285714285714287rem;
      margin: 0;
    }

    &--icon {
    }
  }

  .collapse__wrapper {
    transition: height 0.35s ease;
    overflow: hidden;
    height: 0;

    &__content {
      &--desc {
        margin-bottom: 1.142857142857143rem;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.571428571428571rem;
        letter-spacing: -0.014285714285714287rem;
        white-space: pre;
      }
    }
  }

  &.collapse + &.collapse {
    border-top: 1px solid #e7e7e7;
  }
`;
