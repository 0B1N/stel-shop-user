import styled from "styled-components";

import HomeSection from "components/HomeSection";
import Card from "components/Card";
import {
  PRODCUT_MEMBERS,
  PRODUCT_CATEGORY,
  PRODUCT_ORDER,
  ProductCategoryType,
  ProductMemberType,
  ProductOrderType,
} from "utils/enum/store";
import RadioList from "components/Radio/RadioList";
import FilterIcon from "components/Icon/FilterIcon";
import media from "utils/styles/mediaQuery";
import useStore from "hooks/useStore";
import { useDispatch } from "react-redux";
import { handleFilter } from "store/storePageSlice";

export type StorePageParams = {
  order: ProductOrderType;
  member: ProductMemberType;
  category: ProductCategoryType;
};

type StorePageProps = {
  className?: string;
  params: StorePageParams;
};

function StorePage({ className, params }: StorePageProps) {
  const { filter, list } = useStore(params);
  const dispatch = useDispatch();

  return (
    <div className={className}>
      <div className="wrapper">
        <div className="header">
          <span className="header__title">PRODUCT</span>

          <div
            className="header__filter"
            onClick={() => dispatch(handleFilter({ menu: !filter.menu }))}
          >
            <FilterIcon />
          </div>

          {filter.menu && (
            <div className="header__filterMenu">
              <div className="header__filterMenu__item">
                <div className="header__filterMenu__item--title">정렬</div>

                <RadioList
                  data={PRODUCT_ORDER}
                  selectedCategoryId={`${filter.order}`}
                  onChange={(order: ProductOrderType) => {
                    dispatch(handleFilter({ order }));
                  }}
                />
              </div>

              <div className="header__filterMenu__item">
                <div className="header__filterMenu__item--title">정렬</div>

                <RadioList
                  data={PRODUCT_CATEGORY}
                  selectedCategoryId={`${filter.category}`}
                  onChange={(category: ProductCategoryType) => {
                    dispatch(handleFilter({ category }));
                  }}
                />
              </div>

              <div className="header__filterMenu__item">
                <div className="header__filterMenu__item--title">정렬</div>

                <RadioList
                  data={PRODCUT_MEMBERS}
                  selectedCategoryId={`${filter.member}`}
                  onChange={(member: ProductMemberType) => {
                    dispatch(handleFilter({ member }));
                  }}
                />
              </div>
            </div>
          )}
        </div>

        <div className="body">
          <div className="filter">
            <div className="filter__item">
              <p className="filter__item__title">정렬</p>

              <RadioList
                data={PRODUCT_ORDER}
                selectedCategoryId={`${filter.order}`}
                onChange={(order: ProductOrderType) => {
                  dispatch(handleFilter({ order }));
                }}
              />
            </div>

            <div className="filter__item">
              <p className="filter__item__title">카테고리</p>

              <RadioList
                data={PRODUCT_CATEGORY}
                selectedCategoryId={`${filter.category}`}
                onChange={(category: ProductCategoryType) => {
                  dispatch(handleFilter({ category }));
                }}
              />
            </div>

            <div className="filter__item">
              <p className="filter__item__title">멤버</p>

              <RadioList
                data={PRODCUT_MEMBERS}
                selectedCategoryId={`${filter.member}`}
                onChange={(member: ProductMemberType) => {
                  dispatch(handleFilter({ member }));
                }}
              />
            </div>
          </div>
          <HomeSection title="POPULAR" className="list">
            {list.map((data, i) => (
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
      order: `${ctx.query.order ?? "popular"}` as ProductOrderType | undefined,
      member: (ctx.query.member ?? 0) as ProductMemberType,
      category: (ctx.query.category ?? 0) as ProductCategoryType,
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
      position: relative;

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
        position: relative;

        svg {
          width: 24px;
          height: 24px;
        }
      }

      &__filterMenu {
        width: calc(100vw - 32px);
        position: absolute;
        padding: 1.1429rem;
        border-radius: 10px;
        border: 1px solid #141414;
        background-color: #fff;
        z-index: 3;
        top: 50px;
        right: 0;

        &__item + .header__filterMenu__item {
          margin-top: 16px;
        }

        &__item {
          &--title {
            font-size: 1.1429rem;
            font-weight: 700;
            letter-spacing: -0.0143rem;
            margin-bottom: 0.8571rem;
          }

          & > div {
            column-gap: 0;
            row-gap: 1.1429rem;

            & > div {
              flex: 1 1 50%;
            }
          }
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
