import styled from "styled-components";

type HomeBannerProps = {
  className?: string;
};

function HomeBanner({ className }: HomeBannerProps) {
  return <div className={className}></div>;
}

export default styled(HomeBanner)`
  width: 100%;
  height: 220px;
  background-color: #f4f4f4;
`;
