import { z } from "zod";
import { publicProcedure, router } from "./init";
import { postRouter } from "../post/router";

/**
 * https://trpc.io/docs/server/merging-routers
 */
export const appRouter = router({
  getHello: publicProcedure.input(z.string()).query(async ({ input }) => {
    return `Hello ${input}!`;
  }),
  post: postRouter,
});

export type AppRouter = typeof appRouter;
