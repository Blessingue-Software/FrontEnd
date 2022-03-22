import React from "react";
import * as S from "./Style";
import "../index.css";
export default function Signup() {
  return (
    <form action="/라우터" method="post">
      <S.MainText>Way</S.MainText>
      <S.BlueTopBar></S.BlueTopBar>
      <S.SignupLabel htmlFor="username">Username</S.SignupLabel>
      <S.SignupInput type="text" placeholder="ID" id="username" />

      <S.SignupLabel htmlFor="password">Password</S.SignupLabel>
      <S.SignupInput type="password" placeholder="Password" id="password" />

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
