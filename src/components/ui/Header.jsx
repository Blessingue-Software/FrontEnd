/* eslint-disable */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "../Style";
import "./Header.scss";
import $ from "jquery";
export default function Header() {
  const Logo = "localhost";
  let status = 0;
  let eStatus = 0;
  let click = () => {
    if (!status) {
      $(".navbar__menu").addClass("active");
      $(".navbar__links").addClass("active");
      status = 1;
    } else {
      $(".navbar__menu").removeClass("active");
      $(".navbar__links").removeClass("active");
      status = 0;
    }
  };

  let eClick = () => {
    if (status) {
      $("#btn").removeClass("on");
      eStatus = 1;
    } else {
      $("#btn").addClass("on");
      eStatus = 0;
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <i className="fab fa-apple"></i>
        <S.MainText>{Logo}</S.MainText>
      </div>
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
    </nav>
  );
}
