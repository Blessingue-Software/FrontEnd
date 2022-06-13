import React from "react";
import Slider from "./ui/Slider";
import Project from "./ui/Project";
import Post from "./ui/Post";
import "../index.css";
export default function Main() {
  return (
    <div>
      <Slider />
      <div id="section">
        <Project />
        <Post />
      </div>
    </div>
  );
}
