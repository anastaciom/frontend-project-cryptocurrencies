import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from './GlobalStyles';
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <GlobalStyles/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
