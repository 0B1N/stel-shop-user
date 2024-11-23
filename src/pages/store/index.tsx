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
import FilterIcon from "components/Icon/FilterIcon";
import media from "utils/styles/mediaQuery";

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

      <div className="wrapper">
        <div className="header">
          <span className="header__title">PRODUCT</span>

          <div className="header__filter">
            <FilterIcon />
          </div>
        </div>

        <div className="body">
          <div className="filter">
            <div className="filter__item">
              <p className="filter__item__title">정렬</p>

              <RadioList
                data={PRODUCT_ORDER}
                selectedCategoryId={`${order}`}
                onChange={(v: ProductOrderType) => setOrder(v)}
              />
            </div>

            <div className="filter__item">
              <p className="filter__item__title">카테고리</p>

              <RadioList
                data={PRODUCT_CATEGORY}
                selectedCategoryId={`${category}`}
                onChange={(v: ProductCategoryType) => setCategory(v)}
              />
            </div>

            <div className="filter__item">
              <p className="filter__item__title">멤버</p>

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
    </div>
  );
}

export default styled(StorePage)`
  .homeSection__header {
    justify-content: center !important;
    display: none;
  }

  .homeSection__contents {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    flex: 1 0;
    display: grid;
    grid-column-gap: 1.1428571429rem;
    grid-row-gap: 2.2857142857rem;
    position: relative;
    min-height: 37.4285714286rem;
    grid-auto-rows: min-content;
  }

  .wrapper {
    padding: 30px 16px 0;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;

    .header {
      margin-bottom: 30px;
      display: flex;
      justify-content: space-between;

      &__title {
        color: #141414;
        font-size: 2.8571rem;
        font-weight: bold;
        font-family: "Roboto", sans-serif;
      }

      &__filter {
        width: 40px;
        height: 40px;
        display: inline-flex;
        padding: 6px;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        background-color: rgba(255, 255, 255, 0.6);
        box-shadow: 0 0 10px rgba(20, 20, 20, 0.15);

        svg {
          width: 24px;
          height: 24px;
        }
      }
    }

    .body {
      display: flex;
      gap: 32px;

      .filter {
        display: none;
        flex: 1 1 270px;

        &__item {
          margin-bottom: 30px;

          &__title {
            font-size: 16px;
            font-weight: 700;
            letter-spacing: -0.2px;
            padding-bottom: 12px;
            margin-bottom: 12px;
            border-bottom: 1px solid #f5f5f5;
          }
        }
      }

      .list {
        padding: 0;
        max-width: 100%;

        .homeSection__contents {
          /* justify-content: space-between; */
          /* justify-content: center; */
          /* gap: 32px 16px; */
        }
      }
    }
  }

  ${media.small} {
    .homeSection__contents {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .wrapper {
      .header {
        &__filter {
          display: none;
        }
      }

      .body {
        .filter {
          display: inline-block;
        }
      }
    }
  }

  ${media.large} {
    .homeSection__contents {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    .wrapper {
      .header {
        &__filter {
          display: none;
        }
      }

      .body {
        .filter {
          display: inline-block;
        }
      }
    }
  }
`;
