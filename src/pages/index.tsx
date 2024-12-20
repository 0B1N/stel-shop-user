import styled from "styled-components";

import { useDispatch } from "react-redux";
import { useRootState } from "store";

import HomeSection from "components/HomeSection";
import HomeBanner from "components/HomeBanner";
import ReviewCard from "components/ReviewCard";
import Card from "components/Card";

import {
  handleReviewModalData,
  handleVisibleReviewModal,
} from "store/globalSlice";

import media from "utils/styles/mediaQuery";

type MainPageProps = {
  className?: string;
};

function MainPage({ className }: MainPageProps) {
  const dispatch = useDispatch();
  const { product, reviews } = useRootState((state) => state.mainPageSlice);

  return (
    <div className={className}>
      <HomeBanner />

      <HomeSection title="NEW" href="/store?order=new&category=0&member=0">
        {product.new.map((data, i) => (
          <Card {...data} key={i} />
        ))}
      </HomeSection>

      <HomeSection
        title="POPULAR"
        href="/store?order=popular&category=0&member=0"
      >
        {product.popular.map((data, i) => (
          <Card {...data} key={i} />
        ))}
      </HomeSection>

      <HomeSection title="PHOTO REVIEW" href="/review">
        {reviews.map((v, i) => (
          <ReviewCard
            data={v}
            key={i}
            onClick={(data) => {
              dispatch(handleReviewModalData(data));
              dispatch(handleVisibleReviewModal());
            }}
          />
        ))}
      </HomeSection>
    </div>
  );
}

export default styled(MainPage)`
  margin-top: 61px;
  padding-bottom: 80px;

  .new {
    max-width: 1280px;
    margin: 0 auto;
    padding: 90px 16px 0;
  }

  ${media.small} {
    margin-top: 86px;

    .homeSection__contents {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  ${media.large} {
    .homeSection__contents {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
`;
