import React from "react";
import { render } from "@testing-library/react";
import MyComponent from "./MyComponent";

it("MyComponent renders text prop", () => {
    const { getByText } = render(
    <MyComponent text={"Hello World from test"} />
    );
    expect(getByText("Hello World from test")).toBeTruthy();
});

it("MyComponent renders with no prop value provided", () => {
    const { getByText } = render(<MyComponent text={""} />);
    expect(getByText("no prop value provided")).toBeTruthy();
});