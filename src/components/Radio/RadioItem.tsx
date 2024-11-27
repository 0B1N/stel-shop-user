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
    width: 1.2857rem;
    height: 1.2857rem;
    border: 1px solid #bebebe;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .inner-circle {
      width: 0.5714rem;
      height: 0.5714rem;
      border-radius: 100%;
      background-color: #141414;
    }
  }

  .name {
    color: #6b6b6b;
    font-size: 1rem;
    padding-left: 0.5714rem;
  }

  &[data-active="true"] {
    .name {
      color: #141414;
      font-weight: bold;
    }
  }
`;
