/* eslint-disable */
import "./Calendar.scss";
import { useState } from "react";
import moment from "moment";
import * as S from "../Style";
import { color } from "../style/color";
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
          {[1, 2, 3, 4, 5, 6, 7].map((_data, index) => {
            let days = today
              .clone()
              .startOf("year")
              .week(week)
              .startOf("week")
              .add(index, "day");
            if (moment().format("YYYYMMDD") === days.format("YYYYMMDD")) {
              return (
                // 오늘 날짜
                <S.Today id="date" key={index}>
                  <S.Day>{days.format("D")}</S.Day> <br />
                  {issue[index] === "일" ? (
                    <S.Day style={{ color: color.red }}>{issue[index]}</S.Day>
                  ) : issue[index] === "토" ? (
                    <S.Day style={{ color: color.blue }}>{issue[index]}</S.Day>
                  ) : (
                    <S.Day>{issue[index]}</S.Day>
                  )}
                </S.Today>
              );
            } else if (days.format("MM") !== today.format("MM")) {
              // 저번달 날짜
              return (
                <S.Date key={index} style={{ visibility: "hidden" }}>
                  <S.Day>{days.format("D")}</S.Day>
                </S.Date>
              );
            } else {
              return (
                // 이번달 날짜
                <S.Date id="date" key={index}>
                  <S.Day>{days.format("D")}</S.Day> <br />
                  {issue[index] === "일" ? (
                    <S.Day style={{ color: color.red }}>{issue[index]}</S.Day>
                  ) : issue[index] === "토" ? (
                    <S.Day style={{ color: color.blue }}>{issue[index]}</S.Day>
                  ) : (
                    <S.Day>{issue[index]}</S.Day>
                  )}
                  {/* {issue[index] === "토" ? (
                      <S.Day style={{ color: "blue" }}>{issue[index]}</S.Day>
                    ) : (
                      <S.Day>{issue[index]}</S.Day>
                    )} */}
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
          <div className="wrap">
            <i className="arrow left" role="img" />
          </div>
        </S.calendarBtn>
        <S.Month>{today.format("MM 월")}</S.Month>
        <S.calendarBtn
          onClick={() => {
            setMoment(getMoment.clone().add(1, "month"));
          }}
        >
          <div className="wrap">
            <i className="arrow right" role="img" />
          </div>
        </S.calendarBtn>
        {/* <div className="wrap"></div> */}
      </div>
      <div>{calendarArr()}</div>
    </div>
  );
}
