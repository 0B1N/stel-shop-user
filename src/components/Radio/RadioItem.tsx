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
    <div className={`${className} radio-item`} onClick={() => onChange(value)}>
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
  flex: 1 1 50%;
  align-items: center;

  &:hover .label:after {
    transform: scale(3);
  }

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
      background-color: #142a69;
    }
  }

  .name {
    color: rgb(76, 76, 76);
    font-size: 15px;
    font-weight: 400;
    padding-left: 8px;
  }
`;
