import styled from "styled-components";

import Header from "components/header";
import HomeSection from "components/HomeSection";
import { review_page_data } from "utils/mockup/review";
import ReviewCard, { ReviewData } from "components/ReviewCard";
import Modal from "components/Modal";
import { useState } from "react";

type ReviewPageProps = {
  className?: string;
};

function ReviewPage({ className }: ReviewPageProps) {
  const [reviewData, setReviewData] = useState<{ data: ReviewData }>();
  const [reviewModalVisible, setReviewModalVisible] = useState(false);

  return (
    <div className={className}>
      <Header />

      <HomeSection title="PHOTO REVIEW">
        {review_page_data.map((v, i) => (
          <ReviewCard
            data={v}
            key={i}
            onClick={(data) => {
              setReviewData({ data });
              setReviewModalVisible(true);
            }}
          />
        ))}
      </HomeSection>

      {reviewModalVisible && (
        <Modal
          data={reviewData.data}
          onClose={() => {
            setReviewModalVisible(false);
            setReviewData({ data: {} as ReviewData });
          }}
        />
      )}
    </div>
  );
}

export default styled(ReviewPage)`
  .homeSection__header {
    justify-content: center;
  }
`;
