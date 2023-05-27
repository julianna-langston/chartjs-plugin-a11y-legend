# chartjs-plugin-a11y-legend

[NPM](https://www.npmjs.com/package/chartjs-plugin-a11y-legend)

Provide keyboard accessibility to the legends of your chart.js charts. When this plugin is activated, a user can press the TAB key to navigate to the legend. Once focused on a legend item, the user presses the left/right arrow keys to navigate between legend items. Then, they can press spacebar or enter to "click" the item.

Label, position, and selection state are also provided to screen reader users using aria attributes.

## Getting started

Add the plugin to your existing chart.js code like this:

```js
import {Chart} from "chart.js/auto";
import plugin from "chartjs-plugin-a11y-legend";

Chart.register(plugin);
```

That will register the plugin globally. Alternatively, if you want to enable for a given chart, you can do this:

```js
import {Chart} from "chart.js/auto";
import plugin from "chartjs-plugin-a11y-legend";

new Chart(canvasElement, {
    type: "bar",
    data: {
        datasets: [{
            data: [1,4,2,8]
        }]
    },
    plugins: [plugin]
});
```

## Available options

The following pluing options are available:
* `margin` - (pixels) Add some margin to the bounding box that will appear around your legend items. Default: `4`.

Here's an example for adding your own options:
```js
import {Chart} from "chart.js/auto";
import plugin from "chartjs-plugin-a11y-legend";

new Chart(canvasElement, {
    type: "bar",
    data: {
        datasets: [{
            data: [1,4,2,8]
        }]
    },
    options: {
        plugins: {
            a11y_legend: {
                margin: 0
            }
        }
    },
    plugins: [plugin]
});
```

## Using react-chartjs-2

The plugin will also work with [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2).

```jsx
import React from "react";
import {Chart, registerables} from "chart.js";
import {Bar} from "react-chartjs-2";
import a11yLegend from "chartjs-plugin-a11y-legend";

// Register what you want for chart.js
Chart.register(...registerables);e

// Register the a11y legend plugin, so that it can apply to every chart
Chart.register(a11yLegend);

// Here's a sample chart using react-chartjs-2
export default function App(){
    return <>
        <Bar 
            data={{
                labels: ["A","B","C","D"],
                datasets: [
                    {
                        label: "Green",
                        data: [9,3,5,1]
                    },
                    {
                        label: "Red",
                        data: [5,6,2,8]
                    }
                ]
            }}
        />
    </>
}
```

## Supported features

This plugin is currently in beta, so not all of the chart.js features are currently supported.

Chart types supported:
* bar
* line
* pie
* doughnut
* radar


## Screen reader support

This plugin is tested with Windows + Chrome + NVDA. If you find issues with this plugin and any screen reader + browser combination, please [open an issue](https://github.com/julianna-langston/chartjs-plugin-a11y-legend/issues).

## How does it work for end-users?

The legend is added to the "tab order", meaning that when users press the TAB key to navigate a website, they'll be able to "tab" to the legends in your charts. They'll tab to the first item in the legend, and then they can press the left/right arrow keys to navigate between individual items in the legend. Users can also "click" the legend items by pressing enter or spacebar.

## How did we come up with this UX?

This UX is modeled after W3C's WAI-ARIA authoring practices guide for [tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) and [toolbars](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/).

## Example

Check out [this CodePen](https://codepen.io/chart2music/pen/ZEMyLVZ) to see how the plugin works with all of chart.js's built-in chart types.