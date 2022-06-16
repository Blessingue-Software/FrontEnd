/* eslint-disable */
import React, { useEffect } from "react";
import * as S from "../Style";
import { useState } from "react";
import "./Timetable.scss";
import dayjs from "dayjs";
import $ from "jquery";
import axios from "axios";
export default function TimeTable() {
  let exjson = [
    {
      id: 1,
      title: "프로그래밍",
    },
    {
      id: 2,
      title: "디지털 논리 회로",
    },
    {
      id: 3,
      title: "국어",
    },
    {
      id: 4,
      title: "수학",
    },
    {
      id: 5,
      title: "창업일반",
    },
    {
      id: 6,
      title: "영어",
    },
    {
      id: 7,
      title: "과학",
    },
  ];

  function getTodayLabel() {
    let week = ["일", "월", "화", "수", "목", "금", "토"];
    let today = new Date().getDay();
    let todayLabel = week[today];
    return todayLabel;
  }

  let [dayof, setdayof] = useState(getTodayLabel());
  let period = [];

  // 이 리스트에 교시들이 다 들어있어요
  for (var i = 0; i < 7; i++) {
    period.push(exjson[i].title);
  }

  let now = dayjs();
  let nowMonth = now.format("M월DD일");

  let nowjs = new Date(); // 현재 날짜 및 시간
  let hours = nowjs.getHours();
  let minutes = nowjs.getMinutes(); // 분

  let nowtime = hours + ":" + minutes; // 이게 지금 시간입니다잉
  // let nowtime = "18:31";

  console.log("nowtime : ", nowtime);
  if (
    // 아침
    nowtime >= `07:30` &&
    nowtime <= `08:39`
  ) {
    $(".1period").css("color", "#ffffff").css("background-color", "#ae6fff");
  } else if (
    // 1교시
    nowtime >= `08:40` &&
    nowtime <= `09:39`
  ) {
    $(".1period").css("color", "#ffffff").css("background-color", "#ae6fff");
  } else if (
    // 2교시
    nowtime >= `09:40` &&
    nowtime <= `10:39`
  ) {
    $(".2period").css("color", "#ffffff").css("background-color", "#ae6fff");
  } else if (
    // 3교시
    nowtime >= `10:40` &&
    nowtime <= `11:39`
  ) {
    $(".3period").css("color", "#ffffff").css("background-color", "#ae6fff");
  } else if (
    // 4교시
    nowtime >= `11:40` &&
    nowtime <= `12:29`
  ) {
    $(".4period").css("color", "#ffffff").css("background-color", "#ae6fff");
  } else if (
    // 점심
    nowtime >= `12:30` &&
    nowtime <= `13:19`
  ) {
    $(".lunch").css("color", "#ffffff").css("background-color", "#ae6fff");
  } else if (
    // 5교시
    nowtime >= `13:20` &&
    nowtime <= `14:19`
  ) {
    $(".5period").css("color", "#ffffff").css("background-color", "#ae6fff");
  } else if (
    // 6교시
    nowtime >= `14:20` &&
    nowtime <= `15:19`
  ) {
    $(".6period").css("color", "#ffffff").css("background-color", "#ae6fff");
  } else if (
    // 7교시
    nowtime >= `15:20` &&
    nowtime <= `16:29`
  ) {
    $(".7period").css("color", "#ffffff").css("background-color", "#ae6fff");
  } else if (
    // 방과후1
    nowtime >= `16:30` &&
    nowtime <= `18:09`
  ) {
    $(".afterSchool1")
      .css("color", "#ffffff")
      .css("background-color", "#ae6fff");
  } else if (
    // 저녁
    nowtime >= `18:10` &&
    nowtime <= `18:59`
  ) {
    $(".dinner").css("color", "#ffffff").css("background-color", "#ae6fff");
  } else if (
    // 방과후2
    nowtime >= `19:00` &&
    nowtime <= `20:39`
  ) {
    $(".afterSchool2")
      .css("color", "#ffffff")
      .css("background-color", "#ae6fff");
  } else {
    $(".domitory").css("color", "#ffffff").css("background-color", "#ae6fff");
    console.log("엄준식");
  }

  const [classList, setClassList] = useState([
    "breakfast",
    "1period",
    "2period",
    "3period",
    "4period",
    "lunch",
    "5period",
    "6period",
    "7period",
    "afterSchool1",
    "dinner",
    "afterSchool2",
    "domitory",
  ]);

  const [periodList, setPeriodList] = useState([
    "아침",
    "1",
    "2",
    "3",
    "4",
    "점심",
    "5",
    "6",
    "7",
    "방과후",
    "저녁",
    "방과후",
    "기숙사",
  ]);

  const [periodNameList, setPeriodNameList] = useState([
    "아침",
    period[0],
    period[1],
    period[2],
    period[3],
    "점심",
    period[4],
    period[5],
    period[6],
    "방과후",
    "저녁",
    "방과후",
    "기숙사",
  ]);
  console.log("준식:", classList, periodList, periodNameList);
  return (
    <>
      <S.Timetable>
        <S.TimetableTitle>
          BSSM {nowMonth} &nbsp;
          {dayof}요일 시간표
        </S.TimetableTitle>
        {classList.map((a, i) => {
          return (
            <S.period key={i}>
              <S.periodCount className={a}>{periodList[i]}</S.periodCount>
              <S.periodName>{periodNameList[i]}</S.periodName>
            </S.period>
          );
        })}
      </S.Timetable>
      <div style={{ height: "100px" }}></div>
    </>
  );
}
