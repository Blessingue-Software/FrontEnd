/* eslint-disable */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "../Style";
import "./Header.scss";
import $ from "jquery";
import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
export default function main() {
  const Logo = "localhost";
  $("#toggle").click(function () {
    $(".lists").toggle(400);
    $(".log").toggle(400);
  });
  return (
    <section id="header">
      <div className="wrapper">
        <S.MainText className="title">{Logo}</S.MainText>
        <ul className="lists">
          <S.Nav>
            <Link to="community">커뮤니티</Link>
          </S.Nav>
          <S.Nav>
            <Link to="community">커뮤니티</Link>
          </S.Nav>
          <S.Nav>
            <Link to="community">커뮤니티</Link>
          </S.Nav>
          <S.Nav>
            <Link to="community">커뮤니티</Link>
          </S.Nav>
        </ul>
        <S.Nav className="log">
          <Link to="login">Log In</Link>
        </S.Nav>
      </div>
    </section>
  );
}
