import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import "./Days.scss";

export default function Days() {
    const marks = [
        "15-07-2022",
        "03-07-2022",
        "07-07-2022",
        "12-07-2022",
        "13-07-2022",
        "15-07-2022",
    ];
    const [value, onChange] = useState(new Date());

    // class="react-calendar__tile react-calendar__month-view__days__day highlight"

    return (
        <div style={{ display: "flex", justifyContent: "space-around", height:"calc(100vh - 54px)" }}>
            <Calendar
                onChange={onChange}
                value={value}
                locale="ko"
                tileClassName={({ date, view }) => {
                    if (
                        marks.find(
                            (x) => x === moment(date).format("DD-MM-YYYY")
                        )
                    ) {
                        return "highlight";
                    }
                    return null;
                }}
            />
            <div className="days-board">ddwqdqw</div>
        </div>
    );
}
