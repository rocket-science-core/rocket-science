import { QueryClient } from "react-query";
import { rest } from "msw";
import { films } from "../data";

/**
 * Instantiated default and mocked clients
 */
const defaultQueryClient = new QueryClient();
const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

/**
 * Exporting default/mocked clients
 */

export { defaultQueryClient, mockedQueryClient };
