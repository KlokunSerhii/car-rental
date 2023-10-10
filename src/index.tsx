import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import {
  HashRouter,
  // BrowserRouter,
} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <HashRouter basename="/">
      {/* <BrowserRouter basename="car-rental"> */}
      <App />
      {/* </BrowserRouter> */}
    </HashRouter>
  </StrictMode>
);
