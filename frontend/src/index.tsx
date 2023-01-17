import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/lumen/bootstrap.min.css";

import { Menu } from "./components";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <div className="container">
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
