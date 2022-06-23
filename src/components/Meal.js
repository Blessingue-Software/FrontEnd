import React from "react";
import axios from "axios";
import dayjs from "dayjs";
import "./Meal.scss";
import { useState } from "react";
export default function SchoolLunch() {
  let week = ["일", "월", "화", "수", "목", "금", "토"];
  let today = new Date().getDay();

  function getTodayLabel() {
    let todayLabel = week[today];
    return todayLabel;
  }

  let [dayof, setDayof] = useState(getTodayLabel());

  const SCHOOLCODE = 7150658;
  const LOCALCODE = "C10";
  const TODAY = dayjs().format("YYYYMMDD"); // 20220623

  const $ = document.querySelector.bind(document);
  // let [date,setDate] = useState(parseInt(TODAY))
  let date = parseInt(TODAY)

  let URL = `https://open.neis.go.kr/hub/mealServiceDietInfo?&Type=json&pIndex=1&pSize=10&ATPT_OFCDC_SC_CODE=${LOCALCODE}&SD_SCHUL_CODE=${SCHOOLCODE}&MLSV_YMD=${date}`;

  axios.get(URL).then((response) => {
    console.log(dayof);
    if (dayof === "금") {
      let breakfastMenu =
        response.data.mealServiceDietInfo[1]?.row[0]?.DDISH_NM;
      let lunchMenu = response.data.mealServiceDietInfo[1]?.row[1]?.DDISH_NM;
      let dinnerMenu = "없어요";
      $(".breakfast").innerHTML = breakfastMenu;
      $(".lunch").innerHTML = lunchMenu;
      $(".dinner").innerHTML = dinnerMenu;
    } else if (dayof === "토" || dayof === "일") {
      let breakfastMenu = "없어요";
      let lunchMenu = "없어요";
      let dinnerMenu = "없어요";
      $(".breakfast").innerHTML = breakfastMenu;
      $(".lunch").innerHTML = lunchMenu;
      $(".dinner").innerHTML = dinnerMenu;
    } else {
      let breakfastMenu =
        response.data.mealServiceDietInfo[1]?.row[0]?.DDISH_NM;
      let lunchMenu = response.data.mealServiceDietInfo[1]?.row[1]?.DDISH_NM;
      let dinnerMenu = response.data.mealServiceDietInfo[1]?.row[2]?.DDISH_NM;
      $(".breakfast").innerHTML = breakfastMenu;
      $(".lunch").innerHTML = lunchMenu;
      $(".dinner").innerHTML = dinnerMenu;
    }
  });

  function upDate() {
    date++;
    today++;
    setDayof(getTodayLabel());
    console.log(date);
    console.log(dayof);

    URL = `https://open.neis.go.kr/hub/mealServiceDietInfo?&Type=json&pIndex=1&pSize=10&ATPT_OFCDC_SC_CODE=${LOCALCODE}&SD_SCHUL_CODE=${SCHOOLCODE}&MLSV_YMD=${date}`;
    axios.get(URL).then((response) => {
      if (dayof === "금") {
        let breakfastMenu =
          response.data.mealServiceDietInfo[1]?.row[0]?.DDISH_NM;
        let lunchMenu = response.data.mealServiceDietInfo[1]?.row[1]?.DDISH_NM;
        let dinnerMenu = "없어요";
        $(".breakfast").innerHTML = breakfastMenu;
        $(".lunch").innerHTML = lunchMenu;
        $(".dinner").innerHTML = dinnerMenu;
      } else if (dayof === "토" || dayof === "일") {
        let breakfastMenu = "없어요";
        let lunchMenu = "없어요";
        let dinnerMenu = "없어요";
        $(".breakfast").innerHTML = breakfastMenu;
        $(".lunch").innerHTML = lunchMenu;
        $(".dinner").innerHTML = dinnerMenu;
      } else {
        let breakfastMenu =
          response.data.mealServiceDietInfo[1]?.row[0]?.DDISH_NM;
        let lunchMenu = response.data.mealServiceDietInfo[1]?.row[1]?.DDISH_NM;
        let dinnerMenu = response.data.mealServiceDietInfo[1]?.row[2]?.DDISH_NM;
        $(".breakfast").innerHTML = breakfastMenu;
        $(".lunch").innerHTML = lunchMenu;
        $(".dinner").innerHTML = dinnerMenu;
      }
    });
  }
  return (
    <div className="meal-container">
      {dayof}
      {date}
      <button onClick={upDate}>+</button>
      <div className="breakfast-container">
        <div className="breakfast-title">조식</div>
        <div className="breakfast"></div>
      </div>
      <div className="lunch-container">
        <div className="lunch-title">중식</div>
        <div className="lunch"></div>
      </div>
      <div className="dinner-container">
        <div className="dinner-title">석식</div>
        <div className="dinner"></div>
      </div>
    </div>
  );
}
