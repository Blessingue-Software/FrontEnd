import React from "react";
import { reset } from "./components/style/global";
import { Global } from "@emotion/react";
import "./index.css";

import { Outlet } from "react-router-dom";
import Header from "./components/ui/Header";

function App() {
  return (
    <div>
      <Global styles={reset} />
      <Header />
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
