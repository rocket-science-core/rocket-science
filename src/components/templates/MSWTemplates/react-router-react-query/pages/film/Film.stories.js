import React from "react";
import { MemoryRouter as Router, Route } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { restHandlers, reactQueryMSW } from "../../../../../../routes";
import storybookNamespaceConfig from "../../../../../../stories";
import Film from "./Film";

const { defaultQueryClient, mockedQueryClient } = reactQueryMSW;

export default {
  title: `${storybookNamespaceConfig.templatesAndGuides}/Application Examples/React Query/React Router + RQ/Page Stories/Film`,
  component: Film,
};

export const DefaultBehavior = () => (
  <QueryClientProvider client={defaultQueryClient}>
    <Router initialEntries={["/films/1"]}>
      <Route exact path="/films/:filmId">
        <Film />
      </Route>
    </Router>
  </QueryClientProvider>
);

const MockTemplate = () => (
  <QueryClientProvider client={mockedQueryClient}>
    <Router initialEntries={["/films/1"]}>
      <Route exact path="/films/:filmId">
        <Film />
      </Route>
    </Router>
  </QueryClientProvider>
);

export const MockedSuccess = MockTemplate.bind({});
const MockedSuccessRoutes = Object.values(restHandlers.MockedSuccess);
MockedSuccess.parameters = { msw: MockedSuccessRoutes };

export const MockedFilmApiError = MockTemplate.bind({});
const MockedErrorRoutes = Object.values(restHandlers.MockedError);
MockedFilmApiError.parameters = { msw: MockedErrorRoutes };

export const MockedCharacterApiError = MockTemplate.bind({});
MockedCharacterApiError.parameters = {
  msw: [
    restHandlers.MockedSuccess.filmOne,
    restHandlers.MockedError.personOne,
    restHandlers.MockedSuccess.personTwo,
  ],
};
