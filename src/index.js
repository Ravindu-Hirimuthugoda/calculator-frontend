import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

axios.interceptors.request.use((req) => {
  console.log(req);
  if (
    localStorage.getItem("id_token") &&
    localStorage.getItem("id_token") !== "undefined"
  ) {
    req.headers.Authorization = localStorage.getItem("id_token");
  }
  return req;
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
