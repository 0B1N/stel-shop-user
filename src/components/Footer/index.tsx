import styled from "styled-components";

import media from "utils/styles/mediaQuery";

type FooterProps = {
  className?: string;
};

function Footer({ className }: FooterProps) {
  return (
    <footer className={className}>
      <div className="footer__wrapper">
        <span className="footer--text">© 2024 0be4n Corporation.</span>
      </div>
    </footer>
  );
}

export default styled(Footer)`
  padding: 0.8571428571rem 1.1428571429rem;
  border-top: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
  height: 61px;
  display: flex;
  align-items: center;

  .footer__wrapper {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    text-align: center;

    .footer--text {
      font-size: 0.8571428571rem;
      font-style: normal;
      font-weight: 400;
      letter-spacing: -0.0142857143rem;
      line-height: 1.4166666667;
    }
  }

  ${media.large} {
    padding: 0.8571428571rem 0;
    border-bottom: 0;
  }
`;
