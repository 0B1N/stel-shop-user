import styled from "styled-components";
import media from "utils/styles/mediaQuery";

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

  ${media.small} {
    height: 338px;
  }
`;
