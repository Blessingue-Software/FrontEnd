import React from "react";
import * as S from "./Style";
import "../index.css";
export default function login() {
  return (
    <div>
      <form action="/라우터" method="post">
        <S.MainText id="way_top_margin">Way</S.MainText>
        <S.BlueTopBar id="top_margin" />
        <S.LoginInput placeholder="ID" />
        <S.LoginInput placeholder="비밀번호" />
        <S.LoginButton type="submit">로그인</S.LoginButton>
      </form>
    </div>
  );
}
