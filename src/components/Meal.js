import React from "react";
import axios from "axios";
import dayjs from "dayjs";
import "./Meal.scss";
// import { useState } from "react";
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
  function loadMeal(response) {
    if (getTodayLabel() === "금") {
      let breakfastMenu =
        response.data.mealServiceDietInfo[1]?.row[0]?.DDISH_NM;
      let lunchMenu = response.data.mealServiceDietInfo[1]?.row[1]?.DDISH_NM;
      let dinnerMenu = "없어요";

      console.log(lunchMenu.replace("(산고)", ""));
      while (breakfastMenu.includes("0")) {
        breakfastMenu = breakfastMenu.replace("0", "");
      }
      while (breakfastMenu.includes("1")) {
        breakfastMenu = breakfastMenu.replace("1", "");
      }
      while (breakfastMenu.includes("2")) {
        breakfastMenu = breakfastMenu.replace("2", "");
      }
      while (breakfastMenu.includes("3")) {
        breakfastMenu = breakfastMenu.replace("3", "");
      }
      while (breakfastMenu.includes("4")) {
        breakfastMenu = breakfastMenu.replace("4", "");
      }
      while (breakfastMenu.includes("5")) {
        breakfastMenu = breakfastMenu.replace("5", "");
      }
      while (breakfastMenu.includes("6")) {
        breakfastMenu = breakfastMenu.replace("6", "");
      }
      while (breakfastMenu.includes("7")) {
        breakfastMenu = breakfastMenu.replace("7", "");
      }
      while (breakfastMenu.includes("8")) {
        breakfastMenu = breakfastMenu.replace("8", "");
      }
      while (breakfastMenu.includes("9")) {
        breakfastMenu = breakfastMenu.replace("9", "");
      }
      while (breakfastMenu.includes("10")) {
        breakfastMenu = breakfastMenu.replace("10", "");
      }
      while (breakfastMenu.includes("11")) {
        breakfastMenu = breakfastMenu.replace("11", "");
      }
      while (breakfastMenu.includes("12")) {
        breakfastMenu = breakfastMenu.replace("12", "");
      }
      while (breakfastMenu.includes("13")) {
        breakfastMenu = breakfastMenu.replace("13", "");
      }
      while (breakfastMenu.includes("14")) {
        breakfastMenu = breakfastMenu.replace("14", "");
      }
      while (breakfastMenu.includes("15")) {
        breakfastMenu = breakfastMenu.replace("15", "");
      }
      while (breakfastMenu.includes("16")) {
        breakfastMenu = breakfastMenu.replace("16", "");
      }
      while (breakfastMenu.includes("17")) {
        breakfastMenu = breakfastMenu.replace("17", "");
      }
      while (breakfastMenu.includes("18")) {
        breakfastMenu = breakfastMenu.replace("18", "");
      }
      while (breakfastMenu.includes(".")) {
        breakfastMenu = breakfastMenu.replace(".", "");
      }
      while (breakfastMenu.includes("()")) {
        breakfastMenu = breakfastMenu.replace("()", "");
      }
      while (breakfastMenu.includes("(산고)")) {
        breakfastMenu = breakfastMenu.replace("(산고)", "");
      }
      while (lunchMenu.includes("0")) {
        lunchMenu = lunchMenu.replace("0", "");
      }
      while (lunchMenu.includes("1")) {
        lunchMenu = lunchMenu.replace("1", "");
      }
      while (lunchMenu.includes("2")) {
        lunchMenu = lunchMenu.replace("2", "");
      }
      while (lunchMenu.includes("3")) {
        lunchMenu = lunchMenu.replace("3", "");
      }
      while (lunchMenu.includes("4")) {
        lunchMenu = lunchMenu.replace("4", "");
      }
      while (lunchMenu.includes("5")) {
        lunchMenu = lunchMenu.replace("5", "");
      }
      while (lunchMenu.includes("6")) {
        lunchMenu = lunchMenu.replace("6", "");
      }
      while (lunchMenu.includes("7")) {
        lunchMenu = lunchMenu.replace("7", "");
      }
      while (lunchMenu.includes("8")) {
        lunchMenu = lunchMenu.replace("8", "");
      }
      while (lunchMenu.includes("9")) {
        lunchMenu = lunchMenu.replace("9", "");
      }
      while (lunchMenu.includes("10")) {
        lunchMenu = lunchMenu.replace("10", "");
      }
      while (lunchMenu.includes("11")) {
        lunchMenu = lunchMenu.replace("11", "");
      }
      while (lunchMenu.includes("12")) {
        lunchMenu = lunchMenu.replace("12", "");
      }
      while (lunchMenu.includes("13")) {
        lunchMenu = lunchMenu.replace("13", "");
      }
      while (lunchMenu.includes("14")) {
        lunchMenu = lunchMenu.replace("14", "");
      }
      while (lunchMenu.includes("15")) {
        lunchMenu = lunchMenu.replace("15", "");
      }
      while (lunchMenu.includes("16")) {
        lunchMenu = lunchMenu.replace("16", "");
      }
      while (lunchMenu.includes("17")) {
        lunchMenu = lunchMenu.replace("17", "");
      }
      while (lunchMenu.includes("18")) {
        lunchMenu = lunchMenu.replace("18", "");
      }
      while (lunchMenu.includes(".")) {
        lunchMenu = lunchMenu.replace(".", "");
      }
      while (lunchMenu.includes("()")) {
        lunchMenu = lunchMenu.replace("()", "");
      }
      while (lunchMenu.includes("(산고)")) {
        lunchMenu = lunchMenu.replace("(산고)", "");
      }

      lunchMenu.replace("(", "");

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
