import Input from "components/Input";
import { setCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { handleIsLogin } from "store/globalSlice";
import styled from "styled-components";

type LoginPageProps = {
  className?: string;
};

function LoginPage({ className }: LoginPageProps) {
  const router = useRouter();

  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={className}>
      <div className="login__contents">
        <Link href="/" className="login__contents--logo">
          <img src="/logo.png" alt="logo" className="header__logo" />
        </Link>

        <Input
          className="login__contents--id"
          value={id}
          type="id"
          tabIndex={1}
          onChange={(value) => setId(value)}
          placeholder="아이디를 입력해주세요."
        />
        <Input
          className="login__contents--password"
          type="password"
          value={password}
          tabIndex={2}
          onChange={(value) => setPassword(value)}
          placeholder="비밀번호를 입력해주세요."
        />

        <button
          type="button"
          disabled={!(id.length > 0 && password.length > 0)}
          className="login__contents--button"
          onClick={() => {
            if (id === "admin" && password === "admin1234") {
              setCookie("isLogin", "true", {
                maxAge: 60 * 60 * 24 * 7,
              });

              dispatch(handleIsLogin(true));

              toast.success("로그인 성공", {
                position: "bottom-center",
              });

              router.back();
            } else {
              toast.error("아이디 또는 비밀번호가 일치하지 않습니다.", {
                position: "bottom-center",
              });
            }
          }}
        >
          로그인하기
        </button>
      </div>
    </div>
  );
}

export default styled(LoginPage)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 6;
  width: 100%;
  height: calc(100vh - 61px);
  background-color: #fff;

  .login__contents {
    width: 510px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &--logo {
      margin-bottom: 3.7143rem;
    }

    &--password {
      margin-top: 1.1429rem;
    }

    &--button {
      margin-top: 2.2857rem;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4.5714rem;
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
      background: #141414;
      color: #fff;

      &:disabled {
        background-color: #f5f5f5;
        color: #a2a2a2;
      }
    }
  }
`;
