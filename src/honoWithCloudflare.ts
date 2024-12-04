import { Hono } from "hono";
import { streamText } from "hono/streaming";
const app = new Hono();

app.get("/", (c) => c.text("Hello Cloudflare Workers!"));

app.get("/vanilla-stream", (c) => {
  return streamText(c, async (stream) => {
    for (let i = 1; i <= 3; i++) {
      await stream.write(`${i}\n`);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  });
});

export default app;
