import { addDecorator } from "@storybook/react"; // <- or your view layer
import { withTests } from "@storybook/addon-jest";
import { addReadme } from "storybook-readme";
import { withPerformance } from 'storybook-addon-performance';

import results from "../.jest-test-results.json";

addDecorator(
  withTests({
    results,
  })
);
addDecorator(addReadme);
addDecorator(withPerformance);


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
