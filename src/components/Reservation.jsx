import React from "react";
import * as S from "./Style";
import "../index.css";
export default function Reservation() {
  return (
    <div>
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
              <S.LoginLabel htmlFor="username">학번 (,로 구분)</S.LoginLabel>
              <S.LoginInput type="text" placeholder="EX) 1117" id="username" />
            </div>

            <div style={{ display: "block", margin: "0 auto" }}>
              <S.LoginLabel htmlFor="password">
                팀원 이름 (,로 구분)
              </S.LoginLabel>
              <S.LoginInput
                type="password"
                placeholder="팀이름"
                id="password"
              />
            </div>

            <div style={{ display: "block", margin: "0 auto" }}>
              <S.LoginLabel htmlFor="password">팀이름</S.LoginLabel>
              <S.LoginInput
                type="password"
                placeholder="팀이름"
                id="password"
              />
              <S.LoginButton>신청하기</S.LoginButton>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              padding: "0px 10px",
              justifyContent: "center",
            }}
          >
            {/* <S.LoginBottom href="/signup">회원가입</S.LoginBottom>
            <S.LoginBottom href="/signup">비밀번호 찾기</S.LoginBottom>
            <S.LoginBottom href="/signup">아이디 찾기</S.LoginBottom>
           */}
          </div>
        </form>
      </div>
    </div>
  );
}
