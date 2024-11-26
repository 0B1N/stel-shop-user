import styled from "styled-components";
import media from "utils/styles/mediaQuery";

import { useRef } from "react";

type HomeBannerProps = {
  className?: string;
};

const slideData = [
  {
    id: 1,
    text: "테스트 테스트",
  },
  {
    id: 2,
    text: "테스트 테스트",
  },
  {
    id: 3,
    text: "테스트 테스트",
  },
  {
    id: 4,
    text: "테스트 테스트",
  },
  {
    id: 5,
    text: "테스트 테스트",
  },
];

import Slider from "react-slick";

function HomeBanner({ className }: HomeBannerProps) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={className}>
      <Slider {...settings}>
        {slideData.map((data, i) => (
          <div className={`slide__item slide__item${i}`}></div>
        ))}
      </Slider>
    </div>
  );
}

export default styled(HomeBanner)`
  width: 100%;

  .slide__item {
    height: 220px;
  }

  .slide__item0 {
    background-color: red;
  }
  .slide__item1 {
    background-color: blue;
  }
  .slide__item2 {
    background-color: green;
  }
  .slide__item3 {
    background-color: yellow;
  }
  .slide__item4 {
    background-color: purple;
  }

  ${media.small} {
    .slide__item {
      height: 338px;
    }
  }
`;
