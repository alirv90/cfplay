import { Hono } from "hono";
import { streamText } from "hono/streaming";
import { serve } from "@hono/node-server";
const app = new Hono();

app.get("/", (c) => c.text("Hello Node.js!"));

app.get("/vanilla-stream", (c) => {
  return streamText(c, async (stream) => {
    for (let i = 1; i <= 3; i++) {
      await stream.write(`${i}\n`);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  });
});

// Start the server
serve(
  {
    fetch: app.fetch,
    port: 8787,
  },
  () => {
    console.log("Server is running on http://localhost:8787");
  }
);

export default app;
