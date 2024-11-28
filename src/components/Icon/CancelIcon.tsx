import styled from "styled-components";

type CancelIconProps = {
  className?: string;
};

function CancelIcon({ className }: CancelIconProps) {
  return (
    <svg
      className={className}
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 16 16"
    >
      <rect width="100%" height="100%" fill="currentColor" rx="8"></rect>
      <g clipPath="url(#mps_remove)">
        <path
          fill="#fff"
          d="m8.524 8 3.117-3.12a.365.365 0 0 0 0-.522.369.369 0 0 0-.524 0L8 7.475 4.883 4.358a.369.369 0 0 0-.524 0 .365.365 0 0 0 0 .521L7.476 8l-3.117 3.12a.365.365 0 0 0 0 .522.371.371 0 0 0 .524 0L8 8.525l3.117 3.117a.371.371 0 0 0 .524 0 .365.365 0 0 0 0-.521L8.524 8Z"
        />
      </g>

      <defs>
        <clipPath id="mps_remove">
          <path fill="#fff" d="M3 3h10v10H3z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default styled(CancelIcon)``;
