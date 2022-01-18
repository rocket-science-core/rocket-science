import React from "react";
import { render } from "@testing-library/react";
import SomeExample from "./SomeExample";

it("SomeExample renders text prop", () => {
    const { getByText } = render(
    <SomeExample text={"Hello World from test"} />
    );
    expect(getByText("Hello World from test")).toBeTruthy();
});

it("SomeExample renders with no prop value provided", () => {
    const { getByText } = render(<SomeExample text={""} />);
    expect(getByText("no prop value provided")).toBeTruthy();
});