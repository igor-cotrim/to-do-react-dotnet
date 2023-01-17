import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/lumen/bootstrap.min.css";

import { Menu } from "./components";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Menu />
    <div className="container">
      <App />
    </div>
  </React.StrictMode>
);
