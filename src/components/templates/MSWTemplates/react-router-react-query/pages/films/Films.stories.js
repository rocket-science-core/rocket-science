import React from "react";
import { MemoryRouter as Router, Route } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { restHandlers, reactQueryMSW } from "../../../../../../routes";
import storybookNamespaceConfig from "../../../../../../stories";
import Films from "./Films";

const { defaultQueryClient, mockedQueryClient } = reactQueryMSW;

export default {
  title: `${storybookNamespaceConfig.templatesAndGuides}/Application Examples/REST/React Router + RQ/Page Stories/Films`,
  component: Films,
};

export const DefaultBehavior = () => (
  <QueryClientProvider client={defaultQueryClient}>
    <Router initialEntries={["/films"]}>
      <Route exact path="/films">
        <Films />
      </Route>
    </Router>
  </QueryClientProvider>
);

const MockTemplate = () => (
  <QueryClientProvider client={mockedQueryClient}>
    <Router initialEntries={["/films"]}>
      <Route exact path="/films">
        <Films />
      </Route>
    </Router>
  </QueryClientProvider>
);

export const MockedSuccess = MockTemplate.bind({});
const MockedSuccessRoutes = Object.values(restHandlers.MockedSuccess);
MockedSuccess.parameters = { msw: MockedSuccessRoutes };

export const MockedError = MockTemplate.bind({});
const MockedErrorRoutes = Object.values(restHandlers.MockedError);
MockedError.parameters = { msw: MockedErrorRoutes };
