import { createGlobalStyle, css } from "styled-components";
import media from "./mediaQuery";

const resetCSS = css`
  * {
    outline: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: none;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    border: 0;
    vertical-align: baseline;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    font-family: "Spoqa Han Sans Neo", "sans-serif";
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
    display: inline-block;
    font-size: 0;
  }

  input[type="text"]::-ms-clear {
    display: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  input[type="email"],
  input[type="text"],
  input[type="password"] {
    user-select: initial;
  }

  button {
    border: 0;
  }

  /* select,
  input[type="checkbox"],
  input[type="checkbox"]:checked,
  input[type="radio"],
  input[type="radio"]:checked {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  } */

  html {
    font-size: 12px;

    ${media.small} {
      font-size: 14px;
    }
  }
`;

const GlobalStyles = createGlobalStyle`
  ${resetCSS};
`;

export default GlobalStyles;
