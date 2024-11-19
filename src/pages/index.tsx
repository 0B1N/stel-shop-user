import Card from "components/Card";
import Header from "components/header";
import HomeBanner from "components/HomeBanner";
import HomeSection from "components/HomeSection";
import ArrowIcon from "components/Icon/ArrowIcon";
import ReviewCard from "components/ReviewCard";
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
  return (
    <div className={className}>
      <Header />

      <HomeBanner />

      <HomeSection title="NEW" href="/new">
        {new_mockup_data.map((data, i) => (
          <Card {...data} key={i} />
        ))}
      </HomeSection>

      <HomeSection title="POPULAR" href="/popular">
        {popular_mockup_data.map((data, i) => (
          <Card {...data} key={i} />
        ))}
      </HomeSection>

      <HomeSection title="PHOTO REVIEW" href="/review">
        {photo_review_mockup_data.map((data, i) => (
          <ReviewCard {...data} key={i} />
        ))}
      </HomeSection>
    </div>
  );
}

export default styled(MainPage)``;
