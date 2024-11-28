import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useRootState } from "store";
import { handleVisibleNeedLoginModal } from "store/globalSlice";
import styled from "styled-components";

type NeedLoginModal = {
  className?: string;
};

function NeedLoginModal({ className }: NeedLoginModal) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { needLoginModal } = useRootState((state) => state.globalSlice);

  if (!needLoginModal.visible) return null;

  return (
    <div className={className}>
      <div className="contents">
        <p className="title">로그인 안내</p>
        <p className="desc">로그인이 필요합니다.</p>

        <div className="button__wrapper">
          <button onClick={() => dispatch(handleVisibleNeedLoginModal(false))}>
            닫기
          </button>
          <button
            onClick={() => {
              dispatch(handleVisibleNeedLoginModal(false));
              router.push("/login");
            }}
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}

export default styled(NeedLoginModal)`
  width: 100vw;
  height: 100vh;
  content: "";
  position: fixed;
  inset: 0;
  background-color: rgba(20, 20, 20, 0.6);
  z-index: 6;
  display: flex;
  justify-content: center;
  align-items: center;

  .contents {
    width: 330px;
    padding: 2.57rem 1.713rem 1.713rem;
    background-color: #fff;
    max-height: min(610px, 78vh);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1.1428571429rem;
    overflow: hidden;

    .title {
      margin-bottom: 0.8571428571rem;
      font-size: 1.4285714286rem;
      font-style: normal;
      font-weight: 700;
      letter-spacing: -0.0142857143rem;
      line-height: 1.4;
    }
    .desc {
      margin-bottom: 2.2857142857rem;
      font-size: 1rem;
      font-style: normal;
      font-weight: 500;
      letter-spacing: -0.0142857143rem;
      line-height: 1.5714285714;
      color: #6b6b6b;
    }
    .button__wrapper {
      width: 100%;
      display: flex;
      gap: 0.8571428571rem;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 4rem;
        width: 100%;
        font-family: Pretendard;
        font-size: 1.142857142857143rem;
        font-weight: 700;
        line-height: 1.714285714285714rem;
        letter-spacing: -0.014285714285714287rem;
        line-height: normal;
        outline: none;
        border: none;
        border-radius: 0.5714285714285714rem;
        box-sizing: border-box;
        cursor: pointer;

        &:first-child {
          border: solid 1px #d9d9d9;
          background: #fff;
          color: #141414;
        }

        &:last-child {
          background: #141414;
          color: #fff;
        }
      }
    }
  }
`;
