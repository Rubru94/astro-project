/**
 * This a minimal tRPC server
 */
import * as trpcExpress from "@trpc/server/adapters/express";
import "dotenv/config";
import express from "express";
import { createContext } from "./core/context";
import { appRouter as router } from "./core/router";

const port = process.env.APP_PORT;

const app = express();

app.use(
  "/api/trpc",
  trpcExpress.createExpressMiddleware({
    router,
    createContext,
  })
);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
