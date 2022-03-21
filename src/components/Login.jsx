import React from "react";
import * as S from "./Style";
import "../index.css";
export default function login() {
  return (
    <div>
      <S.MainText id="way_top_margin">Way</S.MainText>
      <S.BlueTopBar id="top_margin"/>
      <S.LoginInput placeholder="ID" />
      <S.LoginInput placeholder="PW" />
      <S.LoginButton>로그인</S.LoginButton>
    </div>
  );
}
