import React from "react";
import * as S from "./Style";
import "../index.css";
export default function Signup() {
  return (
    <div>
      <S.MainText>Way</S.MainText>
      <S.BlueTopBar_Signup></S.BlueTopBar_Signup>
      <S.Signup>
        <S.SignupLabel htmlFor="ID">ID</S.SignupLabel>
        <S.SignupInput
          type="text"
          placeholder="ID"
          name="ID"
          required
        ></S.SignupInput>
      </S.Signup>
      <S.Signup>
        <S.SignupLabel htmlFor="PW">PW</S.SignupLabel>
        <S.SignupInput
          type="text"
          placeholder="PW"
          name="PW"
          required
        ></S.SignupInput>
      </S.Signup>
      <S.Signup>
        <S.SignupLabel htmlFor="PW 2">PW 2</S.SignupLabel>
        <S.SignupInput
          type="text"
          placeholder="PW 2"
          name="PW 2"
          required
        ></S.SignupInput>
      </S.Signup>
      <S.Signup>
        <S.SignupLabel htmlFor="Email">Email</S.SignupLabel>
        <S.SignupInput
          type="text"
          placeholder="Email"
          name="Email"
          required
        ></S.SignupInput>
      </S.Signup>
      <S.BtnFlex>
        <S.SignupButton>회원가입</S.SignupButton>
        <S.SignupCancelButton id="left_margin">취소</S.SignupCancelButton>
      </S.BtnFlex>
    </div>
  );
}
