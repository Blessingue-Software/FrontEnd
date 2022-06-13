/* eslint-disable */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "../Style";
import "./Header.scss";
export default function Header() {
  const Logo = "Ber";
  let status = 0;
  const $ = document.querySelector.bind(document);

  let click = () => {
    if (!status) {
      $(".navbar__menu").classList.add("active");
      $(".navbar__links").classList.add("active");
      status = 1;
    } else {
      $(".navbar__menu").classList.remove("active");
      $(".navbar__links").classList.remove("active");
      status = 0;
    }
  };

  let eClick = () => {
    if (status) {
      $("#btn").classList.remove("on");
    } else {
      $("#btn").classList.add("on");
    }
  };

  return (
    <nav className="navbar">
      <S.MainText href="/" style={{ paddingLeft: "15px" }}>
        {Logo}
      </S.MainText>
      <ul className="navbar__menu">
        <li>
          <Link to="/">관광지</Link>
        </li>
        <li>
          <Link to="/board">게시판</Link>
        </li>
        <li>
          <Link to="/reservation">베르실 예약</Link>
        </li>
        <li>
          <Link to="#">리뷰</Link>
        </li>
        <li>
          <Link to="#">일자리</Link>
        </li>
      </ul>

      <ul className="navbar__links">
        <li>
          <Link to="/login">로그인</Link>
        </li>
        {/* <li>
          <Link to="/signup">회원가입</Link>
        </li> */}
      </ul>

      <Link to="#" className="navbar__toggleBtn" onClick={click}>
        <button id="btn" onClick={eClick}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </Link>
    </nav>
  );
}
