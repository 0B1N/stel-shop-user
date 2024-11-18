type HamburgerIconProps = { className?: string; size?: number };

export default function HamburgerIcon({ className, size }: HamburgerIconProps) {
  console.log(className);
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? "24px"}
      height={size ?? "24px"}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4 18L20 18"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 12L20 12"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 6L20 6"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
