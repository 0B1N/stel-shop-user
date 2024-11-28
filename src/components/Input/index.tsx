import CancelIcon from "components/Icon/CancelIcon";
import EyeIcon from "components/Icon/EyeIcon";
import { useState } from "react";
import styled from "styled-components";

type InputProps = {
  className?: string;
  value: string;
  placeholder?: string;
  tabIndex?: number;
  type: "id" | "password" | "text";
  onChange(value: string): void;
};

function Input({
  className,
  value,
  onChange,
  placeholder,
  type,
  tabIndex,
}: InputProps) {
  const [focus, setFocus] = useState(false);
  const [inputType, setInputType] = useState(
    type === "password" ? "password" : "text",
  );

  return (
    <div className={className} data-focus={focus}>
      <input
        type={inputType}
        value={value}
        tabIndex={tabIndex ?? -1}
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => onChange(e.target.value)}
      />

      {type === "id" && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onChange("");
          }}
        >
          <CancelIcon />
        </button>
      )}

      {type === "password" && (
        <button
          type="button"
          onClick={() => {
            setInputType(inputType === "text" ? "password" : "text");
          }}
        >
          <EyeIcon open={inputType === "text"} />
        </button>
      )}
    </div>
  );
}

export default styled(Input)`
  width: 100%;
  display: flex;
  width: 100%;
  gap: 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  padding-right: 1.1429rem;
  align-items: center;

  input {
    border: 0;
    padding: 0;
    display: inline-flex;
    align-items: center;
    width: 100%;
    padding-right: 1.1429rem;
    padding-bottom: 1px;
    padding: 1.179rem 0;
    font-size: 1.1429rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.7143rem;

    &:-internal-autofill-selected {
      background-color: transparent !important;
    }
  }

  &[data-focus="true"] {
    border-bottom: 1px solid #000;
  }

  button {
    background-color: transparent;
    padding: 0;
    border: 0;
    cursor: pointer;
    color: #a2a2a2;
    font-size: 0;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;
