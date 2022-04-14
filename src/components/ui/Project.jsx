/*eslint-disable*/
import React from "react";
import * as S from "./Style";

export default function Page() {
  return (
    <S.Squre>
      <S.Text>
        진행 중인
        <br /> 프로젝트
      </S.Text>
      <S.Num>
        <span>0</span>개
      </S.Num>
    </S.Squre>
  );
}
