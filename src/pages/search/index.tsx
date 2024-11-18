import Header from "components/header";
import styled from "styled-components";

type SearchPageProps = {
  className?: string;
};

function SearchPage({ className }: SearchPageProps) {
  return (
    <div>
      <Header />
    </div>
  );
}

export default styled(SearchPage)``;
