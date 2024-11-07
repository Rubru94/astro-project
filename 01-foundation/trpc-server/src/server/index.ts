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

app.get("/", (req, res) => {
  const htmlResponse = `
    <html>
      <head>
        <title>NodeJs & Express in Vercel</title>
      </head>
      <body>
        <h1>Backend running ...</h1>
      </body>
    </html>
  `;
  res.send(htmlResponse);
});

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
