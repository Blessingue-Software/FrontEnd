import React from "react";
import * as S from "./Style";
import "../index.css";
import Header from "./ui/Header";
export default function Signup() {
  return (
    <div>
      <Header />
      <div className="container">
        <form action="/라우터" method="post">
          <S.LoginMainText href="/">localhost</S.LoginMainText>

          <S.BlueTopBar></S.BlueTopBar>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "block", margin: "0 auto" }}>
              <S.LoginLabel htmlFor="username">ID</S.LoginLabel>
              <S.LoginInput type="text" placeholder="ID" id="username" />
            </div>
            <div style={{ display: "block", margin: "0 auto" }}>
              <S.LoginLabel htmlFor="password">Password</S.LoginLabel>
              <S.LoginInput
                type="password"
                placeholder="Password"
                id="password"
              />
              <S.LoginButton>로그인</S.LoginButton>
            </div>
          </div>
          <div style={{ display: "flex", padding: "0px 10px", justifyContent:"center" }}>
            <S.LoginBottom href="/signup">회원가입</S.LoginBottom>
            <S.LoginBottom href="/signup">비밀번호 찾기</S.LoginBottom>
            <S.LoginBottom href="/signup">아이디 찾기</S.LoginBottom>
          </div>
        </form>
      </div>
    </div>
  );
}
