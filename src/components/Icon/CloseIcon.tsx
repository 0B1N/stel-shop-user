import { MouseEventHandler } from "react";

type CloseIconProps = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

export default function CloseIcon({ className, onClick }: CloseIconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      onClick={onClick}
    >
      <path
        d="M11.0485 10.0021L17.2816 3.76042C17.5728 3.46875 17.5728 3.00208 17.2816 2.71875C16.9903 2.42708 16.5243 2.42708 16.233 2.71875L10 8.95208L3.76699 2.71875C3.47573 2.42708 3.00971 2.42708 2.71845 2.71875C2.42718 3.01042 2.42718 3.47708 2.71845 3.76042L8.95146 10.0021L2.71845 16.2437C2.42718 16.5354 2.42718 17.0021 2.71845 17.2854C2.85992 17.4271 3.05132 17.5021 3.24272 17.5021C3.43412 17.5021 3.6172 17.4271 3.76699 17.2854L10 11.0521L16.233 17.2854C16.3745 17.4271 16.5659 17.5021 16.7573 17.5021C16.9487 17.5021 17.1318 17.4271 17.2816 17.2854C17.5728 16.9937 17.5728 16.5271 17.2816 16.2437L11.0485 10.0021Z"
        fill="#141414"
      />
    </svg>
  );
}
