# chartjs-plugin-a11y-legend
Provide keyboard navigation for the legends in a chart.js chart.

## Who is this for?

Out of the box, Chart.js doesn't provide keyboard access to individual items in the legend. This means that legend functionality (like toggling datasets) is unavailable to keyboard-only users.

When you add this plugin, your chart.js charts' legends will be accessible to keyboard-only users.

## Getting started

Simply register the plugin. With ESM modules:

```js
import Chart from "chart.js/auto";
import plugin from "chartjs-plugin-a11y-legend";

// Register the plugin globally
Chart.register(plugin);
```

## How does it work for end-users?

The legend is added to the "tab order", meaning that when users press the TAB key to navigate a website, they'll be able to "tab" to the legends in your charts. They'll tab to the first item in the legend, and then they can press the left/right arrow keys to navigate between individual items in the legend. Users can also "click" the legend items by pressing enter or spacebar.

## How did we come up with this UX?

This UX is modeled after W3C's WAI-ARIA authoring practices guide for [tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) and [toolbars](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/).

## Example

Check out [this CodePen](https://codepen.io/chart2music/pen/ZEMyLVZ) to see how the plugin works with all of chart.js's built-in chart types.
