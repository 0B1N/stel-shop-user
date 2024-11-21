import styled from "styled-components";

import Header from "components/header";
import HomeSection from "components/HomeSection";
import Card from "components/Card";
import { store_page_mockup } from "utils/mockup/store";
import {
  PRODCUT_MEMBERS,
  PRODUCT_CATEGORY,
  PRODUCT_ORDER,
  ProductCategoryType,
  ProductMemberType,
  ProductOrderType,
} from "utils/enum/store";
import RadioList from "components/Radio/RadioList";
import { useState } from "react";

type StorePageProps = {
  className?: string;
};

function StorePage({ className }: StorePageProps) {
  const [order, setOrder] = useState<ProductOrderType>();
  const [category, setCategory] = useState<ProductCategoryType>();
  const [member, setMember] = useState<ProductMemberType>();

  return (
    <div className={className}>
      <Header />

      <p>PRODUCT</p>

      <div className="body">
        <div className="filter">
          <div>
            <p>정렬</p>

            <RadioList
              data={PRODUCT_ORDER}
              selectedCategoryId={`${order}`}
              onChange={(v: ProductOrderType) => setOrder(v)}
            />
          </div>

          <div>
            <p>카테고리</p>

            <RadioList
              data={PRODUCT_CATEGORY}
              selectedCategoryId={`${category}`}
              onChange={(v: ProductCategoryType) => setCategory(v)}
            />
          </div>

          <div>
            <p>멤버</p>

            <RadioList
              data={PRODCUT_MEMBERS}
              selectedCategoryId={`${member}`}
              onChange={(v: ProductMemberType) => setMember(v)}
            />
          </div>
        </div>

        <HomeSection title="POPULAR" className="list">
          {store_page_mockup.map((data, i) => (
            <Card {...data} key={i} />
          ))}
        </HomeSection>
      </div>
    </div>
  );
}

export default styled(StorePage)`
  /* f8f8f8 */
  .homeSection__header {
    justify-content: center !important;
    display: none;
  }

  .body {
    display: flex;
    padding-top: 90px;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    gap: 32px;

    .filter {
      flex: 0 0 310px;
    }

    .list {
      padding: 0;
      max-width: 100%;

      .homeSection__contents {
        justify-content: space-between;
        gap: 32px 16px;
      }
    }
  }
`;
