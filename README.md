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
* `padding` - (pixels) Add some padding to the bounding box that will appear around your legend items. Default: `4`.

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
            "chartjs-plugin-a11y-legend": {
                padding: 0
            }
        }
    },
    plugins: [plugin]
});
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