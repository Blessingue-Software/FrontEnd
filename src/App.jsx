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
      <Outlet></Outlet>
    </div>
  );
}

export default App;
