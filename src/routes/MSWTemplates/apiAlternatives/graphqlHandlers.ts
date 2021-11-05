import { graphql } from "msw";
import { films } from "../data";

/**
 * Handlers for mocked requests
 */

const graphqlHandlers = {
  MockedSuccess: graphql.query("AllFilmsQuery", (req, res, ctx) => {
    return res(
      ctx.data({
        allFilms: {
          films,
        },
      })
    );
  }),
  MockedError: graphql.query("AllFilmsQuery", (req, res, ctx) => {
    return res(
      ctx.delay(800),
      ctx.errors([
        {
          message: "Access denied",
        },
      ])
    );
  }),
};

export default graphqlHandlers;
