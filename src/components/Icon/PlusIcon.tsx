import styled from "styled-components";

type PlusIconProps = { className?: string };

function PlusIcon({ className }: PlusIconProps) {
  return (
    <svg className={className} viewBox="0 0 12 13" fill="none">
      <path d="M0 6.5H12M6 12.5V0.5" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export default styled(PlusIcon)``;
