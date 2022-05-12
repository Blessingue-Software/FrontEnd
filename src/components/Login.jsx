import React from "react";
import * as S from "./Style";
import "../index.css";
import Header from "./ui/Header";
export default function Signup() {
  return (
    <div>
      <Header />
      <form action="/라우터" method="post">
        <S.LoginMainText href="/">localhost</S.LoginMainText>

        <S.BlueTopBar></S.BlueTopBar>
        <S.SignupLabel htmlFor="username">ID</S.SignupLabel>
        <S.LoginInput type="text" placeholder="ID" id="username" />

        <S.SignupLabel htmlFor="password">Password</S.SignupLabel>
        <S.LoginInput type="password" placeholder="Password" id="password" />

        <S.LoginButton>로그인</S.LoginButton>
        <S.Flex>
          <S.LoginBottom href="/signup" style={{ marginLeft: "70px" }}>
            회원가입
          </S.LoginBottom>
          <S.LoginBottom href="/signup">비밀번호 찾기</S.LoginBottom>
          <S.LoginBottom href="/signup">아이디 찾기</S.LoginBottom>
        </S.Flex>
      </form>
    </div>
  );
}
