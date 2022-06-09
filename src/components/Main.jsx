/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import Slider from "./ui/Slider";
import * as S from "./Style";
import Header from "./ui/Header";
import Project from "./ui/Project";
import Post from "./ui/Post";
export default function main() {
  return (
    <div>
      <Header />
      <Slider />
        <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "80%",
          margin: "0 auto",
        }}
      >
        <Project />
        <Post />
      </div>
    </div>
  );
}
