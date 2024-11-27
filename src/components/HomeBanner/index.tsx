import styled from "styled-components";

import Image from "next/image";

import Slider, { Settings as SliderProps } from "react-slick";

import media from "utils/styles/mediaQuery";
import { slick, slickTheme } from "utils/styles/slickStyle";

type HomeBannerProps = {
  className?: string;
};

var settings: SliderProps = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  arrows: false,
};

function HomeBanner({ className }: HomeBannerProps) {
  return (
    <div className={className}>
      <Slider {...settings}>
        {["/main_image1.webp", "/main_image2.webp"].map((src, i) => (
          <div className={`slide__item slide__item${i}`} key={i}>
            <Image src={src} fill={true} alt="main_image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default styled(HomeBanner)`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  ${slick}
  ${slickTheme}

  .slide__item {
    height: 220px;
    position: relative;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  ${media.small} {
    .slide__item {
      height: 338px;
    }
  }
`;
