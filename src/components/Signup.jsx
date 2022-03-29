/* eslint-disable */
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Style";
import $ from "jquery";
import "../index.css";
export default function Signup() {
  let [id, setId] = useState();
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }
  function goMain() {
    navigate("/");
  }
  return (
    <form action="/라우터" method="post">
      <S.MainText href="/" style={{ marginTop: "260px" }}>
        localhost
      </S.MainText>
      <S.BlueTopBar></S.BlueTopBar>
      <S.Flex>
        <S.SignupLabel htmlFor="username">ID</S.SignupLabel>
        <S.RedStar>&nbsp;*</S.RedStar>
      </S.Flex>
      <S.SignupInput type="text" placeholder="ID" id="username" required />
      <S.Flex>
        <S.SignupLabel htmlFor="password">Password</S.SignupLabel>
        <S.RedStar>&nbsp;*</S.RedStar>
      </S.Flex>
      <S.SignupInput
        type="password"
        placeholder="Password"
        id="password"
        required
      />
      <S.Flex>
        <S.SignupLabel htmlFor="re-password">Password 재입력</S.SignupLabel>
        <S.RedStar>&nbsp;*</S.RedStar>
      </S.Flex>
      <S.SignupInput
        type="password"
        placeholder="Password 재입력"
        id="re-password"
        required
      />
      <S.SignupLabel htmlFor="email">Email</S.SignupLabel>
      <S.SignupInput type="text" placeholder="Email" id="email" />
      <S.SignupLabel htmlFor="Major">Major</S.SignupLabel>
      <S.SignupInput
        type="Major"
        placeholder="전공분야를 입력해주세요"
        required
        id="Major"
      />

      <S.BtnFlex>
        <S.SignupButton type="submit">회원가입</S.SignupButton>

        {/* <S.SignupCancelButton onClick={goMain()}>취소</S.SignupCancelButton> */}
      </S.BtnFlex>
    </form>
  );
}
