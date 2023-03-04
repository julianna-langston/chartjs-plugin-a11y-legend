import {Chart} from "chart.js";
import plugin from "../src/plugin";
import samples from "../samples/charts"

const {simple_bar, grouped_bar} = samples;

Chart.register(plugin);

test("Generates a focusBox element for the legend", () => {
    const mockParent = document.createElement("div");
    const mockElement = document.createElement("canvas");
    mockParent.appendChild(mockElement);
    expect(mockParent.childElementCount).toBe(1);
    new Chart(mockElement, simple_bar);

    expect(mockParent.childElementCount).toBe(2);
});

test("Confirm focusBox has expected properties", () => {
    const mockParent = document.createElement("div");
    const mockElement = document.createElement("canvas");
    mockParent.appendChild(mockElement);
    new Chart(mockElement, grouped_bar);

    const focusBox = mockParent.children[1];
    expect(focusBox).toHaveProperty("tabIndex", -1);
    expect(focusBox.getAttribute("data-legend-index")).toBe("0");
    expect(focusBox.getAttribute("role")).toBe("option");
    expect(focusBox.getAttribute("aria-selected")).toBe("true");
});

test("Hide focusBox if there are no legend items a focusBox element for the legend", () => {
    const mockParent = document.createElement("div");
    const mockElement = document.createElement("canvas");
    mockParent.appendChild(mockElement);
    new Chart(mockElement, simple_bar);

    const focusBox = mockParent.children[1];
    expect(focusBox).toHaveProperty("tabIndex", -1);
});