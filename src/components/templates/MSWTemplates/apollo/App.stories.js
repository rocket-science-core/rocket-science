import React from "react";
import { App } from "./App";
import { ApolloProvider } from "@apollo/client";
import { apolloMSW, graphqlHandlers } from "../../../../routes";
import storybookNamespaceConfig from "../../../../stories";

export default {
  title: `${storybookNamespaceConfig.templatesAndGuides}/Application Examples/GraphQL/Apollo`,
  component: App,
};

export const DefaultBehavior = () => (
  <ApolloProvider client={apolloMSW.defaultClient}>
    <App />
  </ApolloProvider>
);

const MockTemplate = () => (
  <ApolloProvider client={apolloMSW.mockedClient}>
    <App />
  </ApolloProvider>
);

export const MockedSuccess = MockTemplate.bind({});
MockedSuccess.parameters = {
  msw: [graphqlHandlers.MockedSuccess],
};

export const MockedError = MockTemplate.bind({});
MockedError.parameters = {
  msw: [graphqlHandlers.MockedError],
};
