import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "./router";

export default {
  async fetch(request: Request) {
    return fetchRequestHandler({
      endpoint: "",
      req: request,
      router: appRouter,
      createContext: () => ({}),
    });
  },
};
