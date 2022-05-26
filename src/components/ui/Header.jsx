/* eslint-disable */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./Style";
import "./Header.scss";
// import $ from "jquery";
const $ = "document.querySelector";
export default function Header() {
  const Logo = "localhost";
  let status = 0;
  let eStatus = 0;
  let click = () => {
    if (!status) {
      console.log($(".navbar__menu"));
      // $(".navbar__menu").classList.add("active");
      // $(".navbar__links").classList.add("active");
      status = 1;
    } else {
      // $(".navbar__menu").classList.remove("active");
      // $(".navbar__links").classList.remove("active");
      status = 0;
    }
  };

  let eClick = () => {
    if (status) {
      // $("#btn").classList.remove("on");
      eStatus = 1;
    } else {
      // $("#btn").classList.add("on");
      eStatus = 0;
    }
  };

  return (
    <div className="navbar">
      <S.HeaderLogo>{Logo}</S.HeaderLogo>
      <ul className="navbar__menu">
        <li>
          <Link to="#">홈</Link>
        </li>
        <li>
          <Link to="#">핫딜</Link>
        </li>
        <li>
          <Link to="#">포럼</Link>
        </li>
        <li>
          <Link to="#">FAQ</Link>
        </li>
        <li>
          <Link to="#">채용</Link>
        </li>
      </ul>
      <ul className="navbar__links">
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="/signup">회원가입</Link>
        </li>
      </ul>

      <Link to="#" className="navbar__toggleBtn" onClick={click}>
        <button id="btn" onClick={eClick}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </Link>
    </div>
  );
}
