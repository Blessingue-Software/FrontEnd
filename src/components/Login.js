import React from "react";
import * as S from "./Style";
import "../index.css";
import { useState, useEffect } from "react";
// import Password from "antd/lib/input/Password";

export default function Login() {
  let [email, setEmail] = useState(null);
  let [password, setPassword] = useState(null);
  let [auth, setAuth] = useState(null);
  useEffect(() => {
    if (email !== null) {
      setAuth(email.substr(9, 23));
    }
  }, [email]);

  return (
    <div>
      <div className="container">
        <form action="/라우터" method="post">
          <S.LoginMainText href="/">로그인</S.LoginMainText>
          <S.BlueTopBar />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "block", margin: "0 auto" }}>
              <S.LoginLabel htmlFor="username">Email</S.LoginLabel>
              <S.LoginInput
                type="email"
                placeholder="@bssm.hs.kr"
                id="username"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div style={{ display: "block", margin: "0 auto" }}>
              <S.LoginLabel htmlFor="password">Password</S.LoginLabel>
              <S.LoginInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              {email !== null &&
              password !== null &&
              auth === "@bssm.hs.kr" &&
              password.length >= 8 ? (
                <S.LoginButton>로그인</S.LoginButton>
              ) : (
                <S.DisabledLoginButton disabled>로그인</S.DisabledLoginButton>
              )}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              padding: "0px 10px",
              justifyContent: "center",
            }}
          >
            <S.LoginBottom href="/signup">회원가입</S.LoginBottom>
            <S.LoginBottom href="/signup">비밀번호 찾기</S.LoginBottom>
            <S.LoginBottom href="/signup">아이디 찾기</S.LoginBottom>
          </div>
        </form>
      </div>
    </div>
  );
}
