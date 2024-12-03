import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

const publicProcedure = t.procedure;
const router = t.router;

export const appRouter = router({
  hello: publicProcedure.query(() => "Hello World"),
  msgStream: publicProcedure.query(async function* () {
    for (let i = 1; i <= 3; i++) {
      yield i;
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }),
});

export type AppRouter = typeof appRouter;
