import React from "react";
import axios from "axios";
import dayjs from "dayjs";
import "./Meal.scss";
// import { useState } from "react";
import * as S from "./Style";
export default function SchoolLunch() {
  const $ = document.querySelector.bind(document);
  const SCHOOLCODE: number = 7150658;
  const LOCALCODE: string = "C10";
  const TODAY: string = dayjs().format("YYYYMMDD"); // 20220623
  let date: number = parseInt(TODAY);
  // let date:number = 20220701;
  let URL: string = `https://open.neis.go.kr/hub/mealServiceDietInfo?&Type=json&pIndex=1&pSize=10&ATPT_OFCDC_SC_CODE=${LOCALCODE}&SD_SCHUL_CODE=${SCHOOLCODE}&MLSV_YMD=${date}`;
  let today: number = new Date().getDay();

  function getTodayLabel() {
    let week = ["일", "월", "화", "수", "목", "금", "토"];
    let todayLabel = week[today % 7];
    return todayLabel;
  }
  function removeMenu(menu: string) {
    while (menu.includes("0")) {
      menu = menu.replace("0", "");
    }
    while (menu.includes("1")) {
      menu = menu.replace("1", "");
    }
    while (menu.includes("2")) {
      menu = menu.replace("2", "");
    }
    while (menu.includes("3")) {
      menu = menu.replace("3", "");
    }
    while (menu.includes("4")) {
      menu = menu.replace("4", "");
    }
    while (menu.includes("5")) {
      menu = menu.replace("5", "");
    }
    while (menu.includes("6")) {
      menu = menu.replace("6", "");
    }
    while (menu.includes("7")) {
      menu = menu.replace("7", "");
    }
    while (menu.includes("8")) {
      menu = menu.replace("8", "");
    }
    while (menu.includes("9")) {
      menu = menu.replace("9", "");
    }
    while (menu.includes(".")) {
      menu = menu.replace(".", "");
    }
    while (menu.includes("()")) {
      menu = menu.replace("()", "");
    }
    while (menu.includes("(산고)")) {
      menu = menu.replace("(산고)", "");
    }
    return menu;
  }

  function loadMeal(response: any) {
    if (getTodayLabel() === "금") {
      let breakfastMenu =
        response.data.mealServiceDietInfo[1]?.row[0]?.DDISH_NM;
      let lunchMenu = response.data.mealServiceDietInfo[1]?.row[1]?.DDISH_NM;
      let dinnerMenu = "없어요";
      breakfastMenu = removeMenu(breakfastMenu);
      lunchMenu = removeMenu(lunchMenu);
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
      let breakfastMenu =
        response.data.mealServiceDietInfo[1]?.row[0]?.DDISH_NM;
      let lunchMenu = response.data.mealServiceDietInfo[1]?.row[1]?.DDISH_NM;
      let dinnerMenu = response.data.mealServiceDietInfo[1]?.row[2]?.DDISH_NM;
      breakfastMenu = removeMenu(breakfastMenu);
      lunchMenu = removeMenu(lunchMenu);
      dinnerMenu = removeMenu(dinnerMenu);
      $(".breakfast").innerHTML = breakfastMenu;
      $(".lunch").innerHTML = lunchMenu;
      $(".dinner").innerHTML = dinnerMenu;
    }
  }
  axios.get(URL).then((response) => {
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