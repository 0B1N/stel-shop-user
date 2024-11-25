import styled from "styled-components";

type MinusIconProps = { className?: string };

function MinusIcon({ className }: MinusIconProps) {
  return (
    <svg className={className} viewBox="0 0 12 3" fill="none">
      <path d="M0 1.5H12" stroke="currentColor" strokeWidth="1.75"></path>
    </svg>
  );
}

export default styled(MinusIcon)``;
