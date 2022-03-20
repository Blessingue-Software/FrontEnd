import React from "react";
import * as S from "./Style";
import "../index.css";
export default function login() {
  return (
    <div>
      <S.MainText>로그인</S.MainText>
      <S.BlueTopBar />
      <S.LoginInput placeholder="ID" />
      <S.LoginInput placeholder="PW" />
      <S.LoginButton>로그인</S.LoginButton>
    </div>
  );
}
