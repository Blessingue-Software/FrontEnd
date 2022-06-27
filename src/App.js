import React from "react";
import { reset } from "./components/style/global";
import { Global } from "@emotion/react";
import "./index.css";

import { Outlet } from "react-router-dom";
import Header from "./components/ui/Header";

function App() {
  return (
    <div className="main">
      <Global styles={reset} />
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
