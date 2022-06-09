import React from "react";
import * as S from "./Style";
import "../index.css";
import Header from "./ui/Header";
import { useState, useEffect } from "react";

export default function Signup() {
  let [email, setEmail] = useState(null);
  let [password, setPassword] = useState(null);

  useEffect(() => {
    console.log(email);
  }, [email]);

  useEffect(() => {
    console.log(password);
  }, [password]);

  return (
    <div>
      <Header />
      <div className="container">
        <form action="/라우터" method="post">
          <S.LoginMainText href="/">로그인</S.LoginMainText>
          <S.BlueTopBar></S.BlueTopBar>
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
              {email && password !== null ? (
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
