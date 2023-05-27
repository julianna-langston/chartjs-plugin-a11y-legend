import React from "react";
import Barchart from "./barchart";
import Adjustable from "./adjustable";
import Horizontal from "./horizontal_bar_chart";
import Stacked from "./stacked_bar_chart";
import Linechart from "./line_chart";
import Piechart from "./pie_chart";
import UsingOptions from "./using_options";

const App = () => {
    return (<div>
        <Barchart />
        <Adjustable />
        <Horizontal />
        <Stacked />
        <Linechart />
        <UsingOptions />
        <Piechart />
    </div>)
}

export default App;