import React from "react";
import * as S from "./Style";
import "../index.css";
export default function Reservation() {
  return (
    <div>
      <div className="container">
        <form action="/라우터" method="post">
          <S.LoginMainText>베르실 예약</S.LoginMainText>
          <S.BlueTopBar></S.BlueTopBar>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "block", margin: "0 auto" }}>
              <S.LoginLabel htmlFor="username">학번</S.LoginLabel>
              <S.LoginInput type="text" placeholder="1117" id="username" />
            </div>

            <div style={{ display: "block", margin: "0 auto" }}>
              <S.LoginLabel htmlFor="password">이름</S.LoginLabel>
              <S.LoginInput type="text" placeholder="이름" id="password" />
            </div>

            <div style={{ display: "block", margin: "0 auto" }}>
              <S.LoginLabel htmlFor="name">성별</S.LoginLabel>
              <S.LoginInput type="text" placeholder="성별" id="name" />
              <S.LoginButton>신청하기</S.LoginButton>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              padding: "0px 10px",
              justifyContent: "center",
            }}
          ></div>
        </form>
      </div>
    </div>
  );
}
