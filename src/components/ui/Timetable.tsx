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
            title: "한국사",
        },
        {
            id: 2,
            title: "DB",
        },
        {
            id: 3,
            title: "DB",
        },
        {
            id: 4,
            title: "DB",
        },
        {
            id: 5,
            title: "JAVA",
        },
        {
            id: 6,
            title: "JAVA",
        },
        {
            id: 7,
            title: "JAVA",
        },
    ];

    const [classList, setClassList] = useState([
        "breakfast",
        "period1",
        "period2",
        "period3",
        "period4",
        "lunch",
        "period5",
        "period6",
        "period7",
        "afterSchool1",
        "dinner",
        "afterSchool2",
        "domitory",
    ]);

    const [periodList, sePeriodtList] = useState([
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
    const [periodNameList, sePeriodtNameList] = useState([
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
    var nowjs = new Date(); // 현재 날짜 및 시간
    var hours = nowjs.getHours();
    var minutes = nowjs.getMinutes(); // 분
    // var hours = "5";
    // var minutes = "9"; // 분

    var getHours = hours.toString();
    var getMinutes = minutes.toString();

    switch (hours) {
        case 0:
            getHours = "24";
            break;
        case 1:
            getHours = "01";
            break;
        case 2:
            getHours = "02";
            break;
        case 3:
            getHours = "03";
            break;
        case 4:
            getHours = "04";
            break;
        case 5:
            getHours = "05";
            break;
        case 6:
            getHours = "06";
            break;
        case 7:
            getHours = "07";
            break;
        case 8:
            getHours = "08";
            break;
        case 9:
            getHours = "09";
            break;
        default:
            break;
    }

    switch (minutes) {
        case 1:
            getMinutes = "01";
            break;
        case 2:
            getMinutes = "02";
            break;
        case 3:
            getMinutes = "03";
            break;
        case 4:
            getMinutes = "04";
            break;
        case 5:
            getMinutes = "05";
            break;
        case 6:
            getMinutes = "06";
            break;
        case 7:
            getMinutes = "07";
            break;
        case 8:
            getMinutes = "08";
            break;
        case 9:
            getMinutes = "09";
            break;
        default:
            break;
    }

    var nowtime = getHours + ":" + getMinutes; // 이게 지금 시간입니다잉

    console.log(nowtime);

    const breakfast = document.querySelector(
        "#breakfast"
    ) as HTMLElement | null;
    const lunch = document.querySelector("#lunch") as HTMLElement | null;
    const dinner = document.querySelector("#dinner") as HTMLElement | null;
    const period1 = document.querySelector("#period1") as HTMLElement | null;
    const period2 = document.querySelector("#period2") as HTMLElement | null;
    const period3 = document.querySelector("#period3") as HTMLElement | null;
    const period4 = document.querySelector("#period4") as HTMLElement | null;
    const period5 = document.querySelector("#period5") as HTMLElement | null;
    const period6 = document.querySelector("#period6") as HTMLElement | null;
    const period7 = document.querySelector("#period7") as HTMLElement | null;
    const afterSchool1 = document.querySelector(
        "#afterSchool1"
    ) as HTMLElement | null;
    const afterSchool2 = document.querySelector(
        "#afterSchool2"
    ) as HTMLElement | null;
    const domitory = document.querySelector("#domitory") as HTMLElement | null;
    if (
        // 아침
        nowtime >= `07:30` &&
        nowtime <= `08:39` &&
        breakfast != null
    ) {
        useEffect(() => {
            breakfast.style.backgroundColor = "#000000";
            breakfast.style.color = "#ffffff";
        }, []);
    } else if (
        // 1교시
        nowtime >= `08:40` &&
        nowtime <= `09:39` &&
        period1 != null
    ) {
        useEffect(() => {
            period1.style.backgroundColor = "#000000";
            period1.style.color = "#ffffff";
        }, []);
    } else if (
        // 2교시
        nowtime >= `09:40` &&
        nowtime <= `10:39` &&
        period2 != null
    ) {
        useEffect(() => {
            period2.style.backgroundColor = "#000000";
            period2.style.color = "#ffffff";
        }, []);
    } else if (
        // 3교시
        nowtime >= `10:40` &&
        nowtime <= `11:39` &&
        period3 != null
    ) {
        useEffect(() => {
            period3.style.backgroundColor = "#000000";
            period3.style.color = "#ffffff";
        }, []);
    } else if (
        // 4교시
        nowtime >= `11:40` &&
        nowtime <= `12:29` &&
        period4 != null
    ) {
        useEffect(() => {
            period4.style.backgroundColor = "#000000";
            period4.style.color = "#ffffff";
        }, []);
    } else if (
        // 점심
        nowtime >= `12:30` &&
        nowtime <= `13:19` &&
        lunch != null
    ) {
        useEffect(() => {
            lunch.style.backgroundColor = "#000000";
            lunch.style.color = "#ffffff";
        }, []);
    } else if (
        // 5교시
        nowtime >= `13:20` &&
        nowtime <= `14:19` &&
        period5 != null
    ) {
        useEffect(() => {
            period5.style.backgroundColor = "#000000";
            period5.style.color = "#ffffff";
        }, []);
    } else if (
        // 6교시
        nowtime >= `14:20` &&
        nowtime <= `15:19` &&
        period6 != null
    ) {
        useEffect(() => {
            period6.style.backgroundColor = "#000000";
            period6.style.color = "#ffffff";
        }, []);
    } else if (
        // 7교시
        nowtime >= `15:20` &&
        nowtime <= `16:29` &&
        period7 != null
    ) {
        useEffect(() => {
            period7.style.backgroundColor = "#000000";
            period7.style.color = "#ffffff";
        }, []);
    } else if (
        // 방과후1
        nowtime >= `16:30` &&
        nowtime <= `18:09` &&
        afterSchool1 != null
    ) {
        useEffect(() => {
            afterSchool1.style.backgroundColor = "#000000";
            afterSchool1.style.color = "#ffffff";
        }, []);
    } else if (
        // 저녁
        nowtime >= `18:10` &&
        nowtime <= `18:59` &&
        dinner != null
    ) {
        useEffect(() => {
            dinner.style.backgroundColor = "#000000";
            dinner.style.color = "#ffffff";
        }, []);
    } else if (
        // 방과후2
        nowtime >= `19:00` &&
        nowtime <= `20:39` &&
        afterSchool2 != null
    ) {
        useEffect(() => {
            afterSchool2.style.backgroundColor = "#000000";
            afterSchool2.style.color = "#ffffff";
        }, []);
    } else if (domitory != null) {
        useEffect(() => {
            domitory.style.backgroundColor = "#000000";
            domitory.style.color = "#ffffff";
        }, []);
    }
    return (
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
    );
}
