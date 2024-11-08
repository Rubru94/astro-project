import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../../../trpc-server/src/server/core/router";

const serverUrl =
  import.meta.env.SERVER_URL ??
  import.meta.env.PUBLIC_SERVER_URL ??
  "http://localhost:3000";
console.log({ serverUrl });

const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${serverUrl}/api/trpc`,
    }),
  ],
});

export { trpcClient };
