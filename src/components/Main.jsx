/* eslint-disable */
import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Link } from "react-router-dom";
import Slider from "./ui/Silder";
import * as S from "./Style";
import Header from "./ui/Header";
export default function main() {
  const Logo = "localhost";
  return (
    <div>
      <Header />
      <Slider />
    </div>
  );
}
