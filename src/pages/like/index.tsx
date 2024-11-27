import Card from "components/Card";
import useLike from "hooks/useLike";
import styled from "styled-components";
import media from "utils/styles/mediaQuery";

type LikdePageProps = {
  className?: string;
};

function LikePage({ className }: LikdePageProps) {
  // TODO: 로컬스토리지로 처리하기
  const { list } = useLike();

  return (
    <div className={className}>
      <div className="wrapper">
        <header className="header">
          <span className="header__title">찜 목록</span>
        </header>

        <div className="contents">
          {list.map((data, i) => (
            <Card {...data} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default styled(LikePage)`
  margin-top: 61px;

  .header {
    &__title {
      font-size: 2rem;
      font-style: normal;
      font-weight: 700;
      line-height: 2.785714285714286rem;
      letter-spacing: -0.014285714285714287rem;
      color: #141414;
      padding: 0;
      margin: 0;
    }
  }

  .wrapper {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 2.571428571428572rem 1.1429rem 0;

    .contents {
      display: grid;
      flex-wrap: wrap;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1.142857142857143rem;
      padding-top: 1.714285714285714rem;
      padding-bottom: 8.571428571428571rem;
    }
  }

  ${media.small} {
    .wrapper {
      .contents {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }
  }

  ${media.large} {
    margin-top: 84px;

    .wrapper {
      padding: 2.571428571428572rem 0 0;

      .contents {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
    }
  }
`;
