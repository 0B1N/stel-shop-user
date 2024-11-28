import styled from "styled-components";

type HeartIconProps = {
  className?: string;
};

function HeartIcon({ className }: HeartIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M21.5327 7.26C20.6335 5.06 18.6552 4 16.6768 4C14.8783 4 13.0898 4.88 12.1106 6.58C12.0907 6.61 12.0707 6.65 12.0507 6.68C12.0307 6.71 12.0107 6.72 11.9808 6.72C11.9508 6.72 11.9308 6.71 11.9108 6.68C11.8908 6.65 11.8708 6.61 11.8509 6.58C10.8817 4.88 9.08319 4 7.2847 4C5.32634 4 3.348 5.06 2.44876 7.26C1.23977 10.22 2.65858 13.49 4.50703 15.86C8.22391 20.28 11.2514 21.71 11.8808 21.98C11.9608 22.01 12.0407 22.01 12.1206 21.98C12.7501 21.72 15.7676 20.29 19.4944 15.86C21.3329 13.49 22.7617 10.22 21.5527 7.26H21.5327Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default styled(HeartIcon)`
  cursor: pointer;
`;
