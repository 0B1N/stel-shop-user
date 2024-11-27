import MinusIcon from "components/Icon/MinusIcon";
import PlusIcon from "components/Icon/PlusIcon";
import styled from "styled-components";

type CounterProps = {
  className?: string;
  count: number;
  onCountChange: (count: number) => void;
};

function Counter({ className, count, onCountChange }: CounterProps) {
  return (
    <div className={className}>
      <button
        disabled={count === 1}
        onClick={(e) => {
          e.stopPropagation();
          onCountChange(count - 1);
        }}
      >
        <MinusIcon />
      </button>
      <span>{count}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onCountChange(count + 1);
        }}
      >
        <PlusIcon />
      </button>
    </div>
  );
}

export default styled(Counter)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 8.142857142857142rem;
  height: 3.142857142857143rem;
  padding: 1rem 0.8571428571428571rem 1.071428571428571rem 0.8571428571428571rem;
  border-radius: 0.5714285714285714rem;
  background: #f5f5f5;

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 2.142857142857143rem;
    height: 2.142857142857143rem;
    padding: 0;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;

    svg {
      width: 0.8571428571428571rem;
    }

    &:disabled {
      color: #d9d9d9;
    }
  }

  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 3rem;
    font-size: 1.142857142857143rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.571428571428571rem;
    letter-spacing: -0.014285714285714287rem;
    text-align: center;
    border: none;
    outline: none;
    background: transparent;
    color: #141414;
  }
`;
