import React from "react";
import { App } from "./App";
import restHandlers from "../../../../routes/MSWTemplates";
import storybookNamespaceConfig from "../../../../stories";

export default {
  title: `${storybookNamespaceConfig.templatesAndGuides}/Application Examples/REST/Fetch`,
  component: App,
};

export const DefaultBehavior = () => <App />;

const MockTemplate = () => <App />;

export const MockedSuccess = MockTemplate.bind({});
const MockedSuccessRoutes = Object.values(restHandlers.MockedSuccess);
MockedSuccess.parameters = {
  msw: MockedSuccessRoutes,
};

export const MockedError = MockTemplate.bind({});
const MockedErrorRoutes = Object.values(restHandlers.MockedError);
MockedError.parameters = {
  msw: MockedErrorRoutes,
};
