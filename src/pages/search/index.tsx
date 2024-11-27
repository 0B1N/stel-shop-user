import styled from "styled-components";

import Header from "components/header";

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
