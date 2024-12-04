import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "./router";

export default {
  async fetch(request: Request) {
    const url = new URL(request.url);
    if (url.pathname === "/vanilla-stream") {
      const stream = new ReadableStream({
        async start(controller) {
          for (let i = 1; i <= 3; i++) {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const encoder = new TextEncoder();
            controller.enqueue(encoder.encode(`${i}\n`));
          }
          controller.close();
        },
      });

      return new Response(stream, {
        headers: { "Content-Type": "text/plain" },
      });
    }

    return fetchRequestHandler({
      endpoint: "",
      req: request,
      router: appRouter,
      createContext: () => ({}),
    });
  },
};
