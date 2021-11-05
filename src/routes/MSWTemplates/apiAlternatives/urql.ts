import { createClient } from "urql";

/**
 * Instantiated default and mocked clients
 */

const defaultClient = createClient({
  url: "https://swapi-graphql.netlify.app/.netlify/functions/index",
});

const mockedClient = createClient({
  url: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  requestPolicy: "network-only",
});

/**
 * URQL query to fetch all films
 */

const AllFilmsQuery = `
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
 * Exporting default/mocked clients and URQL query
 */

export { defaultClient, mockedClient, AllFilmsQuery };
