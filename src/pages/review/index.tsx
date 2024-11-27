import styled from "styled-components";

import { useDispatch } from "react-redux";
import { useRootState } from "store";
import {
  handleReviewModalData,
  handleVisibleReviewModal,
} from "store/globalSlice";

import HomeSection from "components/HomeSection";
import ReviewCard from "components/ReviewCard";

import media from "utils/styles/mediaQuery";

type ReviewPageProps = {
  className?: string;
};

function ReviewPage({ className }: ReviewPageProps) {
  const dispatch = useDispatch();
  const { list } = useRootState((state) => state.reviewPageSlice);

  return (
    <div className={className}>
      <HomeSection title="PHOTO REVIEW">
        {list.map((v, i) => (
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

export default styled(ReviewPage)`
  margin-top: 61px;
  min-height: calc(100vh - 121px);
  padding-bottom: 80px;

  section.new {
    padding: 20px 16px 0;
  }

  .homeSection__header {
    justify-content: center;
  }

  ${media.small} {
    margin-top: 86px;
  }

  ${media.large} {
    max-width: 1280px;
    width: 100%;
    margin: 86px auto 0;
    min-height: calc(100vh - 147px);

    .homeSection__header {
      justify-content: flex-start;
    }

    .new {
      padding: 90px 0 0 !important;
    }
  }
`;
