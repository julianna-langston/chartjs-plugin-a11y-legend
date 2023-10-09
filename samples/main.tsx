import React from "react";
import ReactDOM from "react-dom/client";
import Charts from "./react/index";
import {generateCharts} from "./makeChart";

generateCharts(document.querySelector('#app') as HTMLDivElement);
generateCharts(document.querySelector('#position') as HTMLDivElement);

const root = ReactDOM.createRoot(document.getElementById("react-root") as HTMLDivElement);
root.render(
    <Charts />
);