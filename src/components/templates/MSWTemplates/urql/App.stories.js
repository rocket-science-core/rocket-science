import React from "react";
import { Provider } from "urql";
import { App } from "./App";
import { urqlMSW, graphqlHandlers } from "../../../../routes";
import storybookNamespaceConfig from "../../../../stories";

export default {
  title: `${storybookNamespaceConfig.templatesAndGuides}/Application Examples/GraphQL/Urql`,
  component: App,
};

export const DefaultBehavior = () => (
  <Provider value={urqlMSW.defaultClient}>
    <App />
  </Provider>
);

const MockTemplate = () => (
  <Provider value={urqlMSW.mockedClient}>
    <App />
  </Provider>
);

export const MockedSuccess = MockTemplate.bind({});
MockedSuccess.parameters = {
  msw: [graphqlHandlers.MockedSuccess],
};

export const MockedError = MockTemplate.bind({});
MockedError.parameters = {
  msw: [graphqlHandlers.MockedError],
};
