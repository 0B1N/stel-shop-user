import Card from "components/Card";
import Header from "components/header";
import HomeBanner from "components/HomeBanner";
import HomeSection from "components/HomeSection";
import Modal from "components/Modal";
import ReviewCard, { ReviewData } from "components/ReviewCard";
import { useState } from "react";
import styled from "styled-components";
import {
  new_mockup_data,
  photo_review_mockup_data,
  popular_mockup_data,
} from "utils/mockup/main";

type MainPageProps = {
  className?: string;
};

function MainPage({ className }: MainPageProps) {
  const [reviewData, setReviewData] = useState<{ data: ReviewData }>();
  const [reviewModalVisible, setReviewModalVisible] = useState(false);

  return (
    <div className={className}>
      <Header />

      <HomeBanner />

      <HomeSection title="NEW" href="/store">
        {new_mockup_data.map((data, i) => (
          <Card {...data} key={i} />
        ))}
      </HomeSection>

      <HomeSection title="POPULAR" href="/store">
        {popular_mockup_data.map((data, i) => (
          <Card {...data} key={i} />
        ))}
      </HomeSection>

      <HomeSection title="PHOTO REVIEW" href="/review">
        {photo_review_mockup_data.map((v, i) => (
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

export default styled(MainPage)``;
