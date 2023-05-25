import React from "react";
import Barchart from "../samples/react/barchart";
import { render } from "@testing-library/react";

test("Generates a focusBox element for the legend", () => {
    const {container} = render(<Barchart />);
    const focusBox = container.querySelector("canvas + div");
    expect(focusBox).not.toBeUndefined();
});

test("Confirm focusBox has expected properties", () => {
    const {container} = render(<Barchart />);
    const focusBox = container.querySelector("canvas + div");
    expect(focusBox).toHaveProperty("tabIndex", -1);
    expect(focusBox.getAttribute("data-legend-index")).toBe("0");
    expect(focusBox.getAttribute("role")).toBe("option");
    expect(focusBox.getAttribute("aria-selected")).toBe("true");
});