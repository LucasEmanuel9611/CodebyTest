import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { makeServer } from "./services/server";
import { GlobalStyle } from "./global";

// if (process.env.NODE_ENV === "development") {
//   makeServer({ environment: "development" });
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);
