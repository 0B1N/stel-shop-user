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
import { useRouter } from "next/router";

type StorePageProps = {
  className?: string;
  params: {
    order: ProductOrderType | undefined;
  };
};

function StorePage({ className, params }: StorePageProps) {
  const router = useRouter();

  const [order, setOrder] = useState<ProductOrderType>(
    (params?.order ?? router.query?.order) as ProductOrderType | undefined,
  );

  const [category, setCategory] = useState<ProductCategoryType>();

  const [member, setMember] = useState<ProductMemberType>();

  return (
    <div className={className}>
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

StorePage.getInitialProps = async (ctx) => {
  return {
    params: {
      order: `${ctx.query.order}` as ProductOrderType | undefined,
    },
  };
};

export default styled(StorePage)`
  margin-top: 61px;

  .homeSection__header {
    display: none !important;
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
        cursor: pointer;

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
      }
    }
  }

  ${media.small} {
    margin-top: 86px;

    .wrapper {
      padding: 30px 0 0;

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
