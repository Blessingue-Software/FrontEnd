import React from "react";
import axios from "axios";
import dayjs from "dayjs";
import "./Meal.scss";
export default function SchoolLunch() {
  const SCHOOLCODE = 7150658;
  const LOCALCODE = "C10";
  const TODAY = dayjs().format("YYYYMMDD"); // 20220623
  const $ = document.querySelector.bind(document);
  let date = parseInt(TODAY);
  console.log(date);
  let URL = `https://open.neis.go.kr/hub/mealServiceDietInfo?&Type=json&pIndex=1&pSize=10&ATPT_OFCDC_SC_CODE=${LOCALCODE}&SD_SCHUL_CODE=${SCHOOLCODE}&MLSV_YMD=${date}`;

  axios.get(URL).then((response) => {
    $(".breakfast").innerHTML =
      response.data.mealServiceDietInfo[1].row[0].DDISH_NM;
    $(".lunch").innerHTML =
      response.data.mealServiceDietInfo[1].row[1].DDISH_NM;
    $(".dinner").innerHTML =
      response.data.mealServiceDietInfo[1].row[2].DDISH_NM;
  });
  function upDate() {
    date++;
    console.log(date);
    URL = `https://open.neis.go.kr/hub/mealServiceDietInfo?&Type=json&pIndex=1&pSize=10&ATPT_OFCDC_SC_CODE=${LOCALCODE}&SD_SCHUL_CODE=${SCHOOLCODE}&MLSV_YMD=${date}`;
    axios.get(URL).then((response) => {
      let breakfastMenu = response.data.mealServiceDietInfo[1].row[0].DDISH_NM;
      let lunchMenu = response.data.mealServiceDietInfo[1].row[1].DDISH_NM;
      let dinnerMenu = response.data.mealServiceDietInfo[1].row[2].DDISH_NM;
      if (breakfastMenu && lunchMenu && dinnerMenu) {
        $(".breakfast").innerHTML = breakfastMenu;
        $(".lunch").innerHTML = lunchMenu;
        $(".dinner").innerHTML = dinnerMenu;
        console.log("메뉴있");
      } else if (breakfastMenu && lunchMenu && dinnerMenu === undefined) {
        // 금요일
        console.log("저녁메뉴없");
        $(".breakfast").innerHTML = breakfastMenu;
        $(".lunch").innerHTML = lunchMenu;
        dinnerMenu = "undefined";
        $(".dinner").innerHTML = dinnerMenu;
      } else {
        console.log("주말");
        $(".breakfast").innerHTML = "breakfastMenu";
        $(".lunch").innerHTML = "lunchMenu";
        $(".dinner").innerHTML = "dinnerMenu";
      }
    });
  }
  return (
    <div className="meal-container">
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
