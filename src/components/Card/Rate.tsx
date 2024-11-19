import StarIcon from "components/Icon/StarIcon";
import { useMemo } from "react";
import styled from "styled-components";

type RateProps = { rate: number; className?: string };

function Rate({ rate, className }: RateProps) {
  return (
    <div>
      {Array(5)
        .fill(null)
        .map((_, i) => (
          <StarIcon fill={i + 1 <= rate ? "#000" : "#d7d7d7"} />
        ))}
    </div>
  );
}

export default styled(Rate)``;
