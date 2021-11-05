import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { restHandlers, reactQueryMSW } from "../../../../routes";
import storybookNamespaceConfig from "../../../../stories";

import { App } from "./App";

const {
  defaultQueryClient,
  mockedQueryClient,
} = reactQueryMSW;

export default {
  title: `${storybookNamespaceConfig.templatesAndGuides}/Application Examples/React Query/React Router + RQ`,
  component: App,
};

export const DefaultApp = () => (
  <QueryClientProvider client={defaultQueryClient}>
    <Router>
      <App />
    </Router>
  </QueryClientProvider>
);

export const MockedApp = () => (
  <QueryClientProvider client={mockedQueryClient}>
    <Router>
      <App />
    </Router>
  </QueryClientProvider>
);

const MockedSuccessRoutes = Object.values(restHandlers.MockedSuccess);

MockedApp.parameters = {
  msw: MockedSuccessRoutes,
};

export const MockedFilmSubsection = () => (
  <QueryClientProvider client={mockedQueryClient}>
    <Router initialEntries={["/films/1"]}>
      <App />
    </Router>
  </QueryClientProvider>
);

MockedFilmSubsection.parameters = {
  msw: MockedSuccessRoutes,
};
