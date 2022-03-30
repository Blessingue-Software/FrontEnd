/* eslint-disable */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "../Style";
import "./Header.scss";
import $ from "jquery";
import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
export default function main() {
  const Logo = "localhost";

  const toggleBtn = document.querySelector(".navbar__toggleBtn");
  const menu = document.querySelector(".navbar__menu");
  const links = document.querySelector(".navbar__links");
  let status = 0;
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

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <i className="fab fa-apple"></i>
        <a href="">민브로 코딩</a>
      </div>
      <ul className="navbar__menu">
        <li>
          <a href="">홈</a>
        </li>
        <li>
          <a href="">핫딜</a>
        </li>
        <li>
          <a href="">포럼</a>
        </li>
        <li>
          <a href="">FAQ</a>
        </li>
        <li>
          <a href="">채용</a>
        </li>
      </ul>
      <ul className="navbar__links">
        <li>
          <i className="fab fa-facebook-square">페북</i>
        </li>
        <li>
          <i className="fab fa-instagram">인스타</i>
        </li>
      </ul>

      <a href="#" className="navbar__toggleBtn" onClick={click}>
        <i className="fas fa-bars">함박</i>
      </a>
    </nav>
  );
}
