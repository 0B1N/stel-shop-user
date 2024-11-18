type MediaQueryType = {
  large: "@media (min-width: 1280px)";
  small: "@media (min-width: 768px)";
  xsmall: "@media (min-width: 375px)";
};

const mediaQuery = (minWdith: 1280 | 768 | 375) =>
  `@media (min-width: ${minWdith}px)` as const;

const media = {
  large: mediaQuery(1280),
  small: mediaQuery(768),
  xsmall: mediaQuery(375),
} as MediaQueryType;

export default media;
