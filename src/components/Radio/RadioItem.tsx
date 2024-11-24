import { ReactNode, useContext } from "react";
import styled from "styled-components";

type RadioItemProps = {
  className?: string;
  name: string;
  onChange(value: string): void;
  value: string;
  active: boolean;
};

function RadioItem({
  onChange,
  className,
  name,
  active,
  value,
}: RadioItemProps) {
  return (
    <div
      className={className}
      data-active={active}
      onClick={() => onChange(value)}
    >
      <div className="circle">
        {active && <span className="inner-circle" />}
      </div>
      <span className="name">{name}</span>
    </div>
  );
}

export default styled(RadioItem)`
  position: relative;
  cursor: pointer;
  display: flex;
  flex: 1 1 100%;
  align-items: center;

  .circle {
    position: relative;
    display: block;
    width: 18px;
    height: 18px;
    border: 1px solid #bebebe;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .inner-circle {
      width: 8px;
      height: 8px;
      border-radius: 100%;
      background-color: #141414;
    }
  }

  .name {
    color: #6b6b6b;
    font-size: 14px;
    padding-left: 8px;
  }

  &[data-active="true"] {
    .name {
      color: #141414;
      font-weight: bold;
    }
  }
`;
