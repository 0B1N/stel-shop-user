import styled from "styled-components";

type ShareIconProps = {
  className?: string;
};

function ShareIcon({ className }: ShareIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      width="100%"
      height="100%"
    >
      <g clip-path="url(#clip0_3104_438393)">
        <path
          d="M19 16C18.14 16 17.38 16.36 16.83 16.94L7.95 12.5C7.98 12.34 8 12.17 8 12C8 11.83 7.98 11.67 7.95 11.5L16.83 7.06C17.38 7.63 18.14 8 19 8C20.66 8 22 6.66 22 5C22 3.34 20.66 2 19 2C17.34 2 16 3.34 16 5C16 5.17 16.02 5.33 16.05 5.5L7.17 9.94C6.62 9.37 5.86 9 5 9C3.34 9 2 10.34 2 12C2 13.66 3.34 15 5 15C5.86 15 6.62 14.64 7.17 14.06L16.05 18.5C16.02 18.66 16 18.83 16 19C16 20.66 17.34 22 19 22C20.66 22 22 20.66 22 19C22 17.34 20.66 16 19 16Z"
          fill="currentColor"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3104_438393">
          <rect width="24" height="24" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  );
}

export default styled(ShareIcon)`
  cursor: pointer;
`;
