import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

/**
 * Instantiated default and mocked clients
 */

const defaultClient = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache(),
});

const mockedClient = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
});

/**
 * Apollo Proprietary gql query to fetch all films
 */

const AllFilmsQuery = gql`
  query AllFilmsQuery {
    allFilms {
      films {
        title
        episode_id: episodeID
        opening_crawl: openingCrawl
      }
    }
  }
`;

/**
 * Exporting default/mocked clients, Apollo handlers and GraphQL query
 */

export { defaultClient, mockedClient, AllFilmsQuery };
