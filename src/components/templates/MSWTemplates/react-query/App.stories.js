import React from "react";
import { QueryClientProvider } from "react-query";
import { App } from "./App";
import { restHandlers, reactQueryMSW } from "../../../../routes";
import storybookNamespaceConfig from "../../../../stories";

const { defaultQueryClient, mockedQueryClient } = reactQueryMSW;

export default {
  title: `${storybookNamespaceConfig.templatesAndGuides}/Application Examples/REST/React Query`,
  component: App,
};

export const DefaultBehavior = () => (
  <QueryClientProvider client={defaultQueryClient}>
    <App />
  </QueryClientProvider>
);

const MockTemplate = () => (
  <QueryClientProvider client={mockedQueryClient}>
    <App />
  </QueryClientProvider>
);

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
