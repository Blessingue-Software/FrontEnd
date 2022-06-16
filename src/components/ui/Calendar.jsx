import "./Calendar.scss";
import { useState } from "react";
import moment from "moment";
import * as S from "../Style";

export default function Calendar() {
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment;
  const firstWeek = today.clone().startOf("month").week();
  const lastWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week();

  const calendarArr = () => {
    let result = [];
    let issue = ["일", "월", "화", "수", "목", "금", "토"];

    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <div id="main" key={week}>
          {[1, 2, 3, 4, 5, 6, 7]
            // eslint-disable-next-line no-loop-func
            .map((data, index) => {
              let days = today
                .clone()
                .startOf("year")
                .week(week)
                .startOf("week")
                .add(index, "day");
              if (moment().format("YYYYMMDD") === days.format("YYYYMMDD")) {
                return (
                  <S.Today id="date" key={index}>
                    <S.Day>{days.format("D")}</S.Day> <br />
                    <S.Day>{issue[index]}</S.Day>
                  </S.Today>
                );
              } else if (days.format("MM") !== today.format("MM")) {
                return (
                  <S.Date key={index} style={{ visibility: "hidden" }}>
                    <S.Day>{days.format("D")}</S.Day>
                  </S.Date>
                );
              } else {
                return (
                  <S.Date id="date" key={index}>
                    <S.Day>{days.format("D")}</S.Day> <br />
                    <S.Day>{issue[index]}</S.Day>
                  </S.Date>
                );
              }
            })}
        </div>
      );
    }
    console.log(result);

    return result;
  };

  return (
    <div className="App">
      <div className="control">
        <S.calendarBtn
          onClick={() => {
            setMoment(getMoment.clone().subtract(1, "month"));
          }}
        >
          {"<"}
        </S.calendarBtn>
        {/* <S.Month>{today.format("YYYY 년 MM 월")}</S.Month> */}
        <S.Month>{today.format("MM 월")}</S.Month>
        <S.calendarBtn
          onClick={() => {
            setMoment(getMoment.clone().add(1, "month"));
          }}
        >
          {">"}
        </S.calendarBtn>
      </div>
      <div>{calendarArr()}</div>
    </div>
  );
}
