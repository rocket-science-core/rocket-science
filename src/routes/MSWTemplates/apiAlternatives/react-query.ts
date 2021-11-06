import { QueryClient } from "react-query";

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
