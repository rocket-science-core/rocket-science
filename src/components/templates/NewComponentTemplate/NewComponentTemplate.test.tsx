import React from "react";
import { render } from "@testing-library/react";
import NewComponentTemplate from "./NewComponentTemplate";

it("NewComponentTemplate renders text prop", () => {
  const { getByText } = render(
    <NewComponentTemplate text={"Hello World from test"} />
  );
  expect(getByText("Hello World from test")).toBeTruthy();
});

it("NewComponentTemplate renders with no prop value provided", () => {
  const { getByText } = render(<NewComponentTemplate text={""} />);
  expect(getByText("no prop value provided")).toBeTruthy();
});
