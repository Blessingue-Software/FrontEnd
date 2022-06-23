import React from "react";
import "./index.css";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import NotFound from "./components/error/NotFound";
import Main from "./components/Main";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Reservation from "./components/Reservation";
import Board from "./components/Board";
import Calendar from "./components/ui/Calendar";
import Timetable from "./components/ui/Timetable";
import Meal from "./components/Meal";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="reservation" element={<Reservation />} />
        <Route path="board" element={<Board />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="timetable" element={<Timetable />} />
        <Route path="meal" element={<Meal />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
