import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import ContextProvider from "./contexts/ContextProvider";
import "./index.css";
import Router from "./Router";

axios.defaults.baseURL = "http://localhost:4000/";
axios.defaults.withCredentials = true;
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ContextProvider>
      <Router />
    </ContextProvider>
  </React.StrictMode>
);
