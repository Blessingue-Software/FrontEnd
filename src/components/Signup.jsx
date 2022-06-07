/* eslint-disable */
import React from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import * as S from "./Style";
import $ from "jquery";
import "../index.css";
import Header from "./ui/Header";
export default function Signup() {
  let [id, setId] = useState();
  // const navigate = useNavigate();
  // function goBack() {
  //   navigate(-1);
  // }
  // function goMain() {
  //   navigate("/");
  // }
  return (
    <>
      <Header />
      <div className="container">
        <form action="/라우터" method="post">
          <S.LoginMainText href="/">강서구</S.LoginMainText>
          <S.BlueTopBar></S.BlueTopBar>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "block", margin: "0 auto" }}>
              <S.LoginLabel htmlFor="userid">
                ID
                <S.RedStar>&nbsp;*</S.RedStar>
              </S.LoginLabel>
              <S.LoginInput type="text" placeholder="ID" id="userid" />
            </div>
            <div style={{ display: "block", margin: "0 auto" }}>
              <S.LoginLabel htmlFor="password">
                Password
                <S.RedStar>&nbsp;*</S.RedStar>
              </S.LoginLabel>
              <S.LoginInput
                type="password"
                placeholder="Password"
                id="password"
              />
            </div>
            <div style={{ display: "block", margin: "0 auto" }}>
              <S.LoginLabel htmlFor="re-password">
                Password 재입력
                <S.RedStar>&nbsp;*</S.RedStar>
              </S.LoginLabel>
              <S.LoginInput
                type="password"
                placeholder="Password 재입력"
                id="re-password"
              />
            </div>
            <div style={{ display: "block", margin: "0 auto" }}>
              <S.LoginLabel htmlFor="email">Email</S.LoginLabel>
              <S.LoginInput type="text" placeholder="Email" id="email" />
            </div>
            <div style={{ display: "block", margin: "0 auto" }}>
              <S.LoginLabel htmlFor="major">주소 </S.LoginLabel>
              <S.LoginInput type="text" placeholder="주소" id="major" />
              <S.LoginButton>회원가입</S.LoginButton>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
