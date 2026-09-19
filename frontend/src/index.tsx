import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {Button} from "./components/ui/button";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <><Button variant="outline">Кнопка</Button></>
  </React.StrictMode>
);
