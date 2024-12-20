type FilterIconProps = {
  className?: string;
};

export default function FilterIcon({ className }: FilterIconProps) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_855_71658)">
        <path
          d="M2.87998 5.88H13.97C14.35 7.11 15.47 8 16.83 8C18.19 8 19.31 7.1 19.69 5.88H21.14C21.62 5.88 22.02 5.49 22.02 5C22.02 4.51 21.63 4.12 21.14 4.12H19.69C19.31 2.89 18.19 2 16.83 2C15.47 2 14.35 2.9 13.97 4.12H2.87998C2.39998 4.12 1.99998 4.51 1.99998 5C1.99998 5.49 2.38998 5.88 2.87998 5.88Z"
          fill="currentColor"
        />
        <path
          d="M21.12 11.12H9.92998C9.54998 9.89 8.42998 9 7.06998 9C5.70998 9 4.58998 9.9 4.20998 11.12H2.85998C2.37998 11.12 1.97998 11.51 1.97998 12C1.97998 12.49 2.36998 12.88 2.85998 12.88H4.20998C4.58998 14.11 5.70998 15 7.06998 15C8.42998 15 9.54998 14.1 9.92998 12.88H21.12C21.6 12.88 22 12.49 22 12C22 11.51 21.61 11.12 21.12 11.12Z"
          fill="currentColor"
        />
        <path
          d="M16.67 18.12C16.29 16.89 15.17 16 13.81 16C12.45 16 11.33 16.9 10.95 18.12H2.87998C2.39998 18.12 1.99998 18.51 1.99998 19C1.99998 19.49 2.38998 19.88 2.87998 19.88H10.97C11.35 21.11 12.47 22 13.83 22C15.19 22 16.31 21.1 16.69 19.88H21.14C21.62 19.88 22.02 19.49 22.02 19C22.02 18.51 21.63 18.12 21.14 18.12H16.67Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_855_71658">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
