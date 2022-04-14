/* eslint-disable */
import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Link } from "react-router-dom";
import Slider from "./ui/Slider";
import * as S from "./Style";
import Header from "./ui/Header";
import Test from "./test/NavTest";
import Project from "./ui/Project";
import Post from "./ui/Post";
export default function main() {
  const Logo = "localhost";
  return (
    <div>
      {/* <Test /> */}
      <Header />
      <Slider />
      <div style={{ display: "flex" }}>
        <Project />
        <Post />
      </div>
    </div>
  );
}
