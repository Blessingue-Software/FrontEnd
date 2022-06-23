import React from "react";
import axios from "axios";
import dayjs from "dayjs";
import "./Meal.scss";
import { useState } from "react";
import * as S from "./Style";
export default function SchoolLunch() {
  const $ = document.querySelector.bind(document);
  const SCHOOLCODE = 7150658;
  const LOCALCODE = "C10";
  const TODAY = dayjs().format("YYYYMMDD"); // 20220623
  let date = parseInt(TODAY);
  // let date = 20220701;
  let URL = `https://open.neis.go.kr/hub/mealServiceDietInfo?&Type=json&pIndex=1&pSize=10&ATPT_OFCDC_SC_CODE=${LOCALCODE}&SD_SCHUL_CODE=${SCHOOLCODE}&MLSV_YMD=${date}`;
  let today = new Date().getDay();
  function getTodayLabel() {
    let week = ["일", "월", "화", "수", "목", "금", "토"];
    let todayLabel = week[today % 7];
    return todayLabel;
  }
  let [showDate, setShowDate] = useState(getTodayLabel());
  function loadMeal(response) {
    if (getTodayLabel() === "금") {
      const breakfastMenu =
        response.data.mealServiceDietInfo[1]?.row[0]?.DDISH_NM;
      const lunchMenu = response.data.mealServiceDietInfo[1]?.row[1]?.DDISH_NM;
      const dinnerMenu = "없어요";
      $(".breakfast").innerHTML = breakfastMenu;
      $(".lunch").innerHTML = lunchMenu;
      $(".dinner").innerHTML = dinnerMenu;
    } else if (getTodayLabel() === "토" || getTodayLabel() === "일") {
      const breakfastMenu = "없어요";
      const lunchMenu = "없어요";
      const dinnerMenu = "없어요";
      $(".breakfast").innerHTML = breakfastMenu;
      $(".lunch").innerHTML = lunchMenu;
      $(".dinner").innerHTML = dinnerMenu;
    } else {
      const breakfastMenu =
        response.data.mealServiceDietInfo[1]?.row[0]?.DDISH_NM;
      const lunchMenu = response.data.mealServiceDietInfo[1]?.row[1]?.DDISH_NM;
      const dinnerMenu = response.data.mealServiceDietInfo[1]?.row[2]?.DDISH_NM;
      $(".breakfast").innerHTML = breakfastMenu;
      $(".lunch").innerHTML = lunchMenu;
      $(".dinner").innerHTML = dinnerMenu;
    }
  }
  axios.get(URL).then((response) => {
    // console.log(getTodayLabel());
    loadMeal(response);
  });

  function upDate() {
    date++;
    today++;
    getTodayLabel();
    URL = `https://open.neis.go.kr/hub/mealServiceDietInfo?&Type=json&pIndex=1&pSize=10&ATPT_OFCDC_SC_CODE=${LOCALCODE}&SD_SCHUL_CODE=${SCHOOLCODE}&MLSV_YMD=${date}`;
    axios.get(URL).then((response) => {
      loadMeal(response);
    });
  }
  return (
    <div className="meal-container">
      날짜 : {showDate}
      <S.calendarBtn onClick={upDate}>+</S.calendarBtn>
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
