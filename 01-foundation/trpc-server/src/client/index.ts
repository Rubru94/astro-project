import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server/core/router";
import "dotenv/config";

const trpcAstro = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://0.0.0.0:3000/api/trpc",
    }),
  ],
});

export { trpcAstro };
