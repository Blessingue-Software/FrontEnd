/* eslint-disable */
import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Link } from "react-router-dom";

export default function main() {
  return (
    <div>
      <b>메인페이지입니다</b> <br />
      <Link to="login">로그인</Link> <br />
      <Link to="signup">회원가입</Link>
    </div>
  );
}
