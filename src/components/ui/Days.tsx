import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

export default function Days() {
    const marks = [
        "15-01-2022",
        "03-01-2022",
        "07-01-2022",
        "12-01-2022",
        "13-01-2022",
        "15-01-2022",
    ];
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <Calendar
                onChange={onChange}
                value={value}
                locale="en-EN"
                tileClassName={({ date, view }:any) => {
                    if (
                        marks.find(
                            (x) => x === moment(date).format("DD-MM-YYYY")
                        )
                    ) {
                        return "highlight";
                    }
                }}
            />
        </div>
    );
}
