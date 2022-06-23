import React from "react";
import axios from "axios";
import dayjs from "dayjs";
import "./Meal.scss";
export default function SchoolLunch() {
  const SCHOOLCODE = 7150658;
  const LOCALCODE = "C10";
  const DATE = dayjs().format("YYYYMMDD"); // 20220623
  const URL = `https://open.neis.go.kr/hub/mealServiceDietInfo?&Type=json&pIndex=1&pSize=10&ATPT_OFCDC_SC_CODE=${LOCALCODE}&SD_SCHUL_CODE=${SCHOOLCODE}&MLSV_YMD=${DATE}`;

  // `https://open.neis.go.kr/hub/mealServiceDietInfo?ATPT_OFCDC_SC_CODE=${LOCALCODE}&SD_SCHUL_CODE=${SCHOOLCODE}&MLSV_YMD=${DATE}`;
  axios.get(URL).then((response) => {
    console.log(response.data);
    document.querySelector(".meal-container").innerHTML = response.data;
  });
  return <div className="meal-container">SchoolLunch</div>;
}
