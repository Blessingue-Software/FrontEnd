/* eslint-disable */
import React from "react";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import * as S from "./Style";
import "../index.css";
import Header from "./ui/Header";
export default function Signup() {
  let [email, setEmail] = useState(null);
  let [password, setPassword] = useState(null);
  let [rePassword, setRePassword] = useState(null);
  let [auth, setAuth] = useState(null);
  let [major, setMajor] = useState("알고리즘");
  useEffect(() => {
    if (email !== null) {
      setAuth(email.substr(10, 23));
    }
  }, [email]);

  // useEffect(() => {
  //   console.log(password);
  // }, [password]);

  // useEffect(() => {
  //   console.log(rePassword);
  // }, [rePassword]);

  // useEffect(() => {
  //   console.log(major);
  // }, [major]);

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
          <S.LoginMainText href="/">Ber 회원가입</S.LoginMainText>
          <S.BlueTopBar></S.BlueTopBar>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            {/* <div style={{ display: "block", margin: "0 auto" }}>
              <S.LoginLabel htmlFor="userid">
                ID
                <S.RedStar>&nbsp;*</S.RedStar>
              </S.LoginLabel>
              <S.LoginInput type="text" placeholder="ID" id="userid" required />
            </div> */}
            <div style={{ display: "block", margin: "0 auto" }}>
              <S.LoginLabel htmlFor="email">
                Email
                <S.RedStar>&nbsp;*</S.RedStar>
              </S.LoginLabel>
              <S.LoginInput
                type="email"
                placeholder="@bssm.hs.kr"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
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
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
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
                onChange={(e) => {
                  setRePassword(e.target.value);
                }}
                required
              />
            </div>
            <div style={{ display: "block", margin: "0 auto" }}>
              <S.LoginLabel htmlFor="major">분야</S.LoginLabel>
              <S.LoginInput
                type="text"
                placeholder="EX) 알고리즘"
                id="major"
                onChange={(e) => {
                  setMajor(e.target.value);
                }}
              />
              {email &&
              password !== null &&
              password === rePassword &&
              auth === "@bssm.hs.kr" ? (
                <S.LoginButton>회원가입</S.LoginButton>
              ) : (
                <S.DisabledLoginButton disabled>
                  입력란을 확인해주세요
                </S.DisabledLoginButton>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
