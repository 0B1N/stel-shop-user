import { css } from "styled-components";

export const slickTheme = css`
  /* Slider */
  .slick-loading .slick-list {
    background: #fff url("./ajax-loader.gif") center center no-repeat;
  }

  /* Icons */
  @font-face {
    font-family: "slick";
    font-weight: normal;
    font-style: normal;

    src: url("./fonts/slick.eot");
    src:
      url("./fonts/slick.eot?#iefix") format("embedded-opentype"),
      url("./fonts/slick.woff") format("woff"),
      url("./fonts/slick.ttf") format("truetype"),
      url("./fonts/slick.svg#slick") format("svg");
  }
  /* Arrows */
  .slick-prev,
  .slick-next {
    font-size: 0;
    line-height: 0;

    position: absolute;
    top: 50%;

    display: block;

    width: 20px;
    height: 20px;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);

    cursor: pointer;

    color: transparent;
    border: none;
    outline: none;
    background: transparent;
  }

  .slick-prev:hover,
  .slick-prev:focus,
  .slick-next:hover,
  .slick-next:focus {
    color: transparent;
    outline: none;
    background: transparent;
  }
  .slick-prev:hover:before,
  .slick-prev:focus:before,
  .slick-next:hover:before,
  .slick-next:focus:before {
    opacity: 1;
  }

  .slick-prev.slick-disabled:before,
  .slick-next.slick-disabled:before {
    opacity: 0.25;
  }

  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 20px;
    line-height: 1;

    opacity: 0.75;
    color: white;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .slick-prev {
    left: -25px;
  }
  [dir="rtl"] .slick-prev {
    right: -25px;
    left: auto;
  }
  .slick-prev:before {
    content: "←";
  }
  [dir="rtl"] .slick-prev:before {
    content: "→";
  }

  .slick-next {
    right: -25px;
  }
  [dir="rtl"] .slick-next {
    right: auto;
    left: -25px;
  }

  .slick-next:before {
    content: "→";
  }
  [dir="rtl"] .slick-next:before {
    content: "←";
  }

  /* Dots */
  .slick-dotted.slick-slider {
    margin-bottom: 30px;
  }

  .slick-dots {
    position: absolute;
    bottom: -19px;

    display: block;

    width: 100%;
    padding: 0;
    margin: 0;

    list-style: none;

    text-align: center;
    font-size: 0;
  }

  .slick-dots li {
    position: relative;

    display: inline-block;

    width: 8px;
    height: 8px;
    margin: 0 5px;
    padding: 0;

    cursor: pointer;
    transition: all 0.3s;
  }

  .slick-dots li button {
    font-size: 0;
    line-height: 0;

    display: block;

    width: 100%;
    height: 100%;
    padding: 0;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
    border: 0;
    outline: none;
    transition: all 0.3s;
  }

  .slick-dots li button:hover,
  .slick-dots li button:focus {
    outline: none;
  }

  .slick-dots li button:hover:before,
  .slick-dots li button:focus:before {
    opacity: 1;
  }

  .slick-dots li.slick-active {
    width: 20px;
  }

  .slick-dots li.slick-active button {
    background-color: rgba(0, 0, 0, 1);
    border-radius: 15px;
  }
`;

export const slick = css`
  /* Slider */
  .slick-slider {
    position: relative;
    height: 100%;
    display: block;
    box-sizing: border-box;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
    height: 100%;
  }
  .slick-list:focus {
    outline: none;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    height: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .slick-track:before,
  .slick-track:after {
    display: table;
    content: "";
  }
  .slick-track:after {
    clear: both;
  }
  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
  }
  [dir="rtl"] .slick-slide {
    float: right;
  }
  .slick-slide > div {
    height: 100%;
    font-size: 0;
  }
  .slick-slide img {
    display: block;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }
  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }
`;
