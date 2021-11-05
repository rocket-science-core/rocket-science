import graphqlHandlers from "./apiAlternatives/graphqlHandlers";
import * as apolloMSW from "./apiAlternatives/apollo";
import * as reactQueryMSW from "./apiAlternatives/react-query";
import * as urqlMSW from "./apiAlternatives/urql";

import { rest } from "msw";
import {
  films,
  filmOne,
  filmTwo,
  people,
  personOne,
  personTwo,
  planetOne,
} from "./data";

/**
 * Mocked REST Success Routes
 */

const MockedSuccessRoutes = {
  films: rest.get("https://swapi.dev/api/films/", (req, res, ctx) => {
    return res(ctx.json({ results: films }));
  }),
  filmOne: rest.get("https://swapi.dev/api/films/1", (req, res, ctx) => {
    return res(ctx.json(filmOne));
  }),
  filmTwo: rest.get("https://swapi.dev/api/films/2", (req, res, ctx) => {
    return res(ctx.json(filmTwo));
  }),
  people: rest.get("https://swapi.dev/api/people/", (req, res, ctx) => {
    return res(ctx.json({ results: people }));
  }),
  personOne: rest.get("https://swapi.dev/api/people/1", (req, res, ctx) => {
    return res(ctx.json(personOne));
  }),
  personTwo: rest.get("https://swapi.dev/api/people/2", (req, res, ctx) => {
    return res(ctx.json(personTwo));
  }),
  planetOne: rest.get("https://swapi.dev/api/planets/1", (req, res, ctx) => {
    return res(ctx.json(planetOne));
  }),
};

/**
 * Mocked REST Error Routes
 */

const MockedErrorRoutes = {
  films: rest.get("https://swapi.dev/api/films/", (req, res, ctx) => {
    return res(ctx.delay(800), ctx.status(403));
  }),
  filmOne: rest.get("https://swapi.dev/api/films/1", (req, res, ctx) => {
    return res(ctx.delay(800), ctx.status(403));
  }),
  planetOne: rest.get("https://swapi.dev/api/planets/1", (req, res, ctx) => {
    return res(ctx.delay(800), ctx.status(403));
  }),
  people: rest.get("https://swapi.dev/api/people/", (req, res, ctx) => {
    return res(ctx.delay(800), ctx.status(403));
  }),
  personOne: rest.get("https://swapi.dev/api/people/1", (req, res, ctx) => {
    return res(ctx.delay(800), ctx.status(403));
  }),
};

/**
 * Mocked Rest Handlers
 */

const restHandlers = {
  MockedSuccess: MockedSuccessRoutes,
  MockedError: MockedErrorRoutes,
};

export default restHandlers;
export { restHandlers, graphqlHandlers, apolloMSW, reactQueryMSW, urqlMSW };
