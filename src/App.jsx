import React from "react";
import { reset } from "./components/style/global";
import { Global } from "@emotion/react";
import "./index.css";

import Slider from "./components/ui/Slider";
import Header from "./components/ui/Header";
import Project from "./components/ui/Project";
import Post from "./components/ui/Post";

function App() {
  return (
    <div>
      <Global styles={reset} />
      <div>
        <Header />
        <Slider />
        <div id="section">
          <Project />
          <Post />
        </div>
      </div>
    </div>
  );
}

export default App;
