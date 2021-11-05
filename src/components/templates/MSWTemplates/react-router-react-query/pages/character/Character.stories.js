import React from "react";
import { MemoryRouter as Router, Route } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { restHandlers, reactQueryMSW } from "../../../../../../routes";
import storybookNamespaceConfig from "../../../../../../stories";

import Character from "./Character";

const {
  defaultQueryClient,
  mockedQueryClient,
  reactQueryHandlers,
} = reactQueryMSW;

export default {
  title:
  `${storybookNamespaceConfig.templatesAndGuides}/Application Examples/React Query/React Router + RQ/Page Stories/Character`,
  component: Character,
};

export const DefaultBehavior = () => (
  <QueryClientProvider client={defaultQueryClient}>
    <Router initialEntries={["/characters/1"]}>
      <Route exact path="/characters/:characterId">
        <Character />
      </Route>
    </Router>
  </QueryClientProvider>
);

const MockTemplate = () => (
  <QueryClientProvider client={mockedQueryClient}>
    <Router initialEntries={["/characters/1"]}>
      <Route exact path="/characters/:characterId">
        <Character />
      </Route>
    </Router>
  </QueryClientProvider>
);

export const MockedSuccess = MockTemplate.bind({});
const MockedSuccessRoutes = Object.values(restHandlers.MockedSuccess);
MockedSuccess.parameters = { msw: MockedSuccessRoutes };

export const MockedPlanetsApiError = MockTemplate.bind({});
MockedPlanetsApiError.parameters = {
  msw: [
    restHandlers.MockedSuccess.personOne,
    restHandlers.MockedSuccess.filmOne,
    restHandlers.MockedSuccess.filmTwo,
    restHandlers.MockedError.planetOne
  ],
};
