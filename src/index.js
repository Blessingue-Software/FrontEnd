import React from "react";
import "./index.css";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Main from "./components/Main";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Reservation from "./components/Reservation";
import Board from "./components/Board";
import NotFound from "./components/error/NotFound";
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
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
