import styled from "styled-components";

import RadioItem from "./RadioItem";

type RadioListProps = {
  className?: string;
  selectedCategoryId: string;
  data: Record<string, string>;
  onChange(value: any): void;
};

function RadioList({
  className,
  selectedCategoryId,
  data,
  onChange,
}: RadioListProps) {
  return (
    <div className={className}>
      {Object.keys(data).map((v) => (
        <RadioItem
          key={v}
          active={selectedCategoryId === v}
          value={v}
          name={data[v]}
          onChange={(value) => onChange(value)}
        />
      ))}
    </div>
  );
}

export default styled(RadioList)`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;