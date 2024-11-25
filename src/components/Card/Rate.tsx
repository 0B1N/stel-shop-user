import StarIcon from "components/Icon/StarIcon";
import styled from "styled-components";

type RateProps = { rate: number; size?: number; className?: string };

function Rate({ rate, className, size }: RateProps) {
  return (
    <div className={className}>
      {Array(5)
        .fill(null)
        .map((_, i) => (
          <StarIcon
            size={size}
            key={i}
            fill={i + 1 <= rate ? "#000" : "#d7d7d7"}
          />
        ))}
    </div>
  );
}

export default styled(Rate)`
  font-size: 0;
`;
