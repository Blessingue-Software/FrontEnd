/* eslint-disable */
import "./Days.scss";
import React, { useState } from "react";
import * as S from "../Style";
import 'react-calendar/dist/Calendar.css'; // css import
import Calendar from 'react-calendar';

export default function Days() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}