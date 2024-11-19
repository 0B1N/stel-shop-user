import styled from "styled-components";

type ArrowIconProps = {
  className?: string;
  rotate?: number;
};

function ArrowIcon({ className }: ArrowIconProps) {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      className={className}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.667 13.5l5-5-5-5"
      />
    </svg>
  );
}

export default styled(ArrowIcon)`
  transform: ${({ rotate }) => `rotate(${rotate ?? 0}deg) `};
`;
