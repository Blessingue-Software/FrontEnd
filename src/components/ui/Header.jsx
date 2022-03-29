/* eslint-disable */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "../Style";
import "./Header.scss";
export default function main() {
  const Logo = "localhost";
  let [open, setOpen] = useState(false);

  let active = () => {
    console.log("ok");
    setOpen(!open);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <i className="fab fa-amazon"></i>
        <a href="">{Logo}</a>
      </div>
      <ul className="navbar__menu">
        <li>
          <a href="">home</a>
        </li>
        <li>
          <a href="">Gallery</a>
        </li>
        <li>
          <a href="">Service</a>
        </li>
        <li>
          <a href="">FAQ</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <ul className="navbar__icons">
        <li>
          <a className="fab fa-facebook">로그인</a>
        </li>
        <li>
          <a className="fab fa-google">회원가입</a>
        </li>
      </ul>
      {/* navbar__toogleBtn*/}
      <a href="#" className={open ? "active" : ""} onClick={active}>
        <i className="fas fa-bars">햄버거</i>
      </a>
    </nav>
  );
}
