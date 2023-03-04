import Chart from "chart.js/auto";
import plugin from "../src/plugin";
import samples from "./charts";

const charts = Object.values(samples);

Chart.register(plugin);

/*
y2 axis
    https://codepen.io/martin-teamofmine/pen/YzjLxXG
data point labelText
    https://codepen.io/BillSegate/details/oNMbYwz
Matrix
    https://codepen.io/krautgti/pen/mdxNeXQ

Other features
* subtitles
* bubble charts
* matrix (plugin)
* interactions, updating data
* radar plot
* scatter plot
* time axis
* make labels easier to hand to the x axis?
* stacked bar charts

Working with other plugins
    bar-funnel
    boxplot
    error-bars
    financial
    geo
    graph
    matrix
    pcp
    sankey
    smith
    stacked100
    treemap
    venn
    word-cloud
    annotation
    datalabels
    hierarchical
    regression
    waterfall
    zoom
    dragdata
    streaming

Fix typescript issues with Chart2Music output
*/

export const generateCharts = (container: HTMLDivElement) => {
    charts.forEach((c) => {
        const newContainer = document.createElement("div");
        const canvas = document.createElement("canvas");
        newContainer.appendChild(canvas);
        container.appendChild(newContainer);

        // @ts-ignore
        new Chart(canvas, c);
    });

}