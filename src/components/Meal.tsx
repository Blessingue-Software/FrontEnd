import React from "react";
import axios from "axios";
import dayjs from "dayjs";
import "./Meal.scss";
// import { useState } from "react";
import * as S from "./Style";
export default function SchoolLunch() {
    // useRef 고고고고고고ㅗ고고
    // useRef 고고고고고고ㅗ고고
    // useRef 고고고고고고ㅗ고고
    // useRef 고고고고고고ㅗ고고
    // useRef 고고고고고고ㅗ고고
    // useRef 고고고고고고ㅗ고고
    // useRef 고고고고고고ㅗ고고
    // useRef 고고고고고고ㅗ고고
    // useRef 고고고고고고ㅗ고고
    const $ = document.querySelector.bind(document); // useRef 고고고고고고ㅗ고고
    const SCHOOLCODE = 7150658;
    const LOCALCODE = "C10";
    const TODAY = dayjs().format("YYYYMMDD"); // 20220623
    let date = parseInt(TODAY);
    let URL = `https://open.neis.go.kr/hub/mealServiceDietInfo?&Type=json&pIndex=1&pSize=10&ATPT_OFCDC_SC_CODE=${LOCALCODE}&SD_SCHUL_CODE=${SCHOOLCODE}&MLSV_YMD=${date}`;
    let today = new Date().getDay();
    function getTodayLabel() {
        let week = ["일", "월", "화", "수", "목", "금", "토"];
        let todayLabel = week[today % 7];
        return todayLabel;
    }

    // 0131
    // 0228
    // 0331
    // 0430
    // 0531
    // 0630
    // 0731
    // 0831
    // 0930
    // 1031
    // 1130
    // 1231

    return <div className="meal-container">로직 재설정 중입니다</div>;
}
