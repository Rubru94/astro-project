/**
 * This a minimal tRPC server
 */
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { appRouter } from "./core/router";

const server = createHTTPServer({
  router: appRouter as any,
});

// TODO: use express adapter & use prefix api/trpc/

server.listen(4321);
