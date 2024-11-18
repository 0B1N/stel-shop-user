const mediaQuery = (minWdith: number) => `
  @media (min-width: ${minWdith}px)
` as const;

const media = {
  large: mediaQuery(1200),
  small: mediaQuery(768),
  xsmall: mediaQuery(375),
  custom: mediaQuery,
};

export default media;