/* eslint-disable */
import React, { useEffect } from "react";
import * as S from "../Style";
import { useState } from "react";
import "./Timetable.scss";
import dayjs from "dayjs";
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
    "아",
    "1",
    "2",
    "3",
    "4",
    "점",
    "5",
    "6",
    "7",
    "방",
    "저",
    "방",
    "기",
  ]);

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

  let now = dayjs();
  let nowMonth = now.format("M월DD일");

  let nowjs = new Date(); // 현재 날짜 및 시간
  let hours = nowjs.getHours();
  let minutes = nowjs.getMinutes(); // 분

  // var nowtime = "20:1";
  let nowtime = hours + ":" + minutes; // 이게 지금 시간입니다잉
  if (minutes.length === 1) {
    minutes = "0" + minutes;
  }

  console.log("nowtime : ", nowtime);

  if (
    // 아침
    nowtime >= `07:30` &&
    nowtime <= `08:39`
  ) {
    useEffect(() => {
      document.querySelector("#breakfast").style.background = "#6e92fa";
      document.querySelector("#breakfast").style.color = "#ffffff";
    }, []);
  } else if (
    // 1교시
    nowtime >= `08:40` &&
    nowtime <= `09:39`
  ) {
    useEffect(() => {
      document.querySelector("#1period").style.background = "#6e92fa";
      document.querySelector("#1period").style.color = "#ffffff";
    }, []);
  } else if (
    // 2교시
    nowtime >= `09:40` &&
    nowtime <= `10:39`
  ) {
    useEffect(() => {
      document.querySelector("#2period").style.background = "#6e92fa";
      document.querySelector("#2period").style.color = "#ffffff";
    }, []);
  } else if (
    // 3교시
    nowtime >= `10:40` &&
    nowtime <= `11:39`
  ) {
    useEffect(() => {
      document.querySelector("#3period").style.background = "#6e92fa";
      document.querySelector("#3period").style.color = "#ffffff";
    }, []);
  } else if (
    // 4교시
    nowtime >= `11:40` &&
    nowtime <= `12:29`
  ) {
    useEffect(() => {
      document.querySelector("#4period").style.background = "#6e92fa";
      document.querySelector("#4period").style.color = "#ffffff";
    }, []);
  } else if (
    // 점심
    nowtime >= `12:30` &&
    nowtime <= `13:19`
  ) {
    useEffect(() => {
      document.querySelector("#lunch").style.background = "#6e92fa";
      document.querySelector("#lunch").style.color = "#ffffff";
    }, []);
  } else if (
    // 5교시
    nowtime >= `13:20` &&
    nowtime <= `14:19`
  ) {
    useEffect(() => {
      document.querySelector("#5period").style.background = "#6e92fa";
      document.querySelector("#5period").style.color = "#ffffff";
    }, []);
  } else if (
    // 6교시
    nowtime >= `14:20` &&
    nowtime <= `15:19`
  ) {
    useEffect(() => {
      document.querySelector("#6period").style.background = "#6e92fa";
      document.querySelector("#6period").style.color = "#ffffff";
    }, []);
  } else if (
    // 7교시
    nowtime >= `15:20` &&
    nowtime <= `16:29`
  ) {
    useEffect(() => {
      document.querySelector("#7period").style.background = "#6e92fa";
      document.querySelector("#7period").style.color = "#ffffff";
    }, []);
  } else if (
    // 방과후1
    nowtime >= `16:30` &&
    nowtime <= `18:09`
  ) {
    useEffect(() => {
      document.querySelector("#afterSchool1").style.background = "#6e92fa";
      document.querySelector("#afterSchool1").style.color = "#ffffff";
    }, []);
  } else if (
    // 저녁
    nowtime >= `18:10` &&
    nowtime <= `18:59`
  ) {
    useEffect(() => {
      document.querySelector("#dinner").style.background = "#6e92fa";
      document.querySelector("#dinner").style.color = "#ffffff";
    }, []);
  } else if (
    // 방과후2
    nowtime >= `19:00` &&
    nowtime <= `20:39`
  ) {
    useEffect(() => {
      document.querySelector("#afterSchool2").style.background = "#6e92fa";
      document.querySelector("#afterSchool2").style.color = "#ffffff";
    }, []);
  } else {
    useEffect(() => {
      document.querySelector("#domitory").style.background = "#6e92fa";
      document.querySelector("#domitory").style.color = "#ffffff";
    }, []);
  }
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
              <S.periodCount id={a}>{periodList[i]}</S.periodCount>
              <S.periodName>{periodNameList[i]}</S.periodName>
            </S.period>
          );
        })}
      </S.Timetable>
      <div style={{ height: "100px" }}></div>
    </>
  );
}
