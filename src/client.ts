import { createTRPCClient, unstable_httpBatchStreamLink } from "@trpc/client";
import type { AppRouter } from "./router";

const client = createTRPCClient<AppRouter>({
  links: [
    unstable_httpBatchStreamLink({
      url: "http://localhost:8787",
    }),
  ],
});

async function main() {
  const result = await client.hello.query();
  console.log(result);

  const stream = await client.msgStream.query();
  for await (const msg of stream) {
    console.log(msg);
  }
}

main();
