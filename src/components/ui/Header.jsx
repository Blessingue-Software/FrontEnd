/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import * as S from "../Style";
export default function main() {
  const Logo = "127.0.0.1";
  return (
    <div>
      <S.Flex>
        <S.MainText href="/" style={{ margin: "0 auto" }}>
          {Logo}
        </S.MainText>
        <br />
        <S.LoginMenu>
          <Link to="login" className="flo">로그인</Link> <br />
          <Link to="signup" className="flo">회원가입</Link> <br />
        </S.LoginMenu>
      </S.Flex>
    </div>
  );
}
