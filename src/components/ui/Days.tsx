import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import "./Days.scss";
import dayjs from "dayjs";
import axios from "axios";

const SCHOOLCODE = 7150658;
const LOCALCODE = "C10";
const TODAY = dayjs().format("YYYYMM");

const API = `https://open.neis.go.kr/hub/SchoolSchedule?Type=Json&ATPT_OFCDC_SC_CODE=${LOCALCODE}&SD_SCHUL_CODE=${SCHOOLCODE}&AA_YMD=${TODAY}`;

export default function Days() {
    const marks: string[] = [];
    const content: string[][] = [];

    axios.get(API).then((response) => {
        for (let i = 0; i < response.data.SchoolSchedule[1].row.length; i++) {
            if (
                response.data.SchoolSchedule[1].row[i].EVENT_NM !== "토요휴업일"
            ) {
                content.push([
                    response.data.SchoolSchedule[1].row[i].AA_YMD,
                    response.data.SchoolSchedule[1].row[i].EVENT_NM,
                ]);
                marks.push(response.data.SchoolSchedule[1].row[i].AA_YMD);
            }
        }
        console.log(marks);
        console.log(content);
    });

    const [value, onChange] = useState(new Date());

    // class="react-calendar__tile react-calendar__month-view__days__day highlight"

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-around",
                height: "calc(100vh - 54px)",
            }}
        >
            <Calendar
                onChange={onChange}
                value={value}
                locale="ko"
                tileClassName={({ date, view }) => {
                    if (
                        marks.find((x) => x === moment(date).format("YYYYMMDD"))
                    ) {
                        return "highlight";
                    }
                    return null;
                }}
            />
            <ul className="days-board">
                {marks.map((i, ix) => {
                    return <li key={ix}>{i}</li>;
                })}
            </ul>
        </div>
    );
}
