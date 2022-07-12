/* eslint-disable */
import React, { useEffect } from "react";
import * as S from "../Style";
import { useState } from "react";
import "./Timetable.scss";
import dayjs from "dayjs";
import axios from "axios";
const hour = 3600;

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

    function saveScheduleTime() {
        let START_TIME = 23400;

        const data = periodList.map((_: string, i: number) => {
            if (i === 4 || i === 10) {
                START_TIME += 3000;
                return {
                    label: i,
                    startTime: START_TIME,
                    endTime: START_TIME + 3000,
                };
            }
            if (i >= 9) {
                START_TIME += 5400;
                return {
                    label: i,
                    startTime: START_TIME,
                    endTime: START_TIME + 5400,
                };
            }
            START_TIME += 3600;
            return {
                label: i,
                startTime: START_TIME,
                endTime: START_TIME + 3600,
            };
        });

        return data;
    }
    console.log(
        saveScheduleTime().map((i) => {
            const [hour, min] = dayjs().format("HH:mm").split(":");
            const second = parseInt(hour) * 3600 + parseInt(min) * 60;

            if (i.startTime <= second && i.endTime >= second) return true;
            return false;
        })
    );

    return (
        <S.Timetable>
            <S.TimetableTitle>
                BSSM {dayjs().format("M월DD일")} {getTodayLabel()}요일 시간표
            </S.TimetableTitle>
            {saveScheduleTime()
                .map((i) => {
                    const [hour, min] = dayjs().format("HH:mm").split(":");
                    const second = parseInt(hour) * 3600 + parseInt(min) * 60;

                    if (i.startTime <= second && i.endTime >= second)
                        return true;
                    return false;
                })
                .map((isActive, ix) => {
                    return (
                        <S.period key={ix}>
                            <S.periodCount
                                style={{
                                    backgroundColor: isActive
                                        ? "black"
                                        : "gray",
                                }}
                            >
                                {periodList[ix]}
                            </S.periodCount>
                            <S.periodName>{periodNameList[i]}</S.periodName>
                        </S.period>
                    );
                })}
        </S.Timetable>
    );
}
