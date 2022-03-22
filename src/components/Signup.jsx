import React from "react";
import * as S from "./Style";
import "../index.css";
export default function Signup() {
  return (
    <form action="/라우터" method="post">
      <S.MainText id="top_margin">Way</S.MainText>
      <S.BlueTopBar></S.BlueTopBar>
      <S.SignupLabel htmlFor="username">ID</S.SignupLabel>
      <S.SignupInput type="text" placeholder="ID" id="username" />

      <S.SignupLabel htmlFor="password">Password</S.SignupLabel>
      <S.SignupInput type="password" placeholder="Password" id="password" />

      <S.SignupLabel htmlFor="re-password">Password 재입력</S.SignupLabel>
      <S.SignupInput
        type="re-password"
        placeholder="Password 재입력"
        id="re-password"
      />

      <S.SignupLabel htmlFor="email">Email</S.SignupLabel>
      <S.SignupInput type="email" placeholder="Email" id="email" />

      <S.SignupLabel htmlFor="Major">Major</S.SignupLabel>
      <S.SignupInput
        type="Major"
        placeholder="전공분야를 입력해주세요"
        id="Major"
      />

      <S.BtnFlex>
        <S.SignupButton>회원가입</S.SignupButton>
        <S.SignupCancelButton>취소</S.SignupCancelButton>
      </S.BtnFlex>
      {/* <div class="social">
        <div class="go">
          <i class="fab fa-google"></i> Google
        </div>
        <div class="fb">
          <i class="fab fa-facebook"></i> Facebook
        </div>
      </div> */}
    </form>
  );
}
