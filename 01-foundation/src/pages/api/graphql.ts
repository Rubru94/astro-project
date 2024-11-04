import type { APIRoute } from "astro";
import { createYoga, createSchema } from "graphql-yoga";
import { Posts } from "../../data/post";

const schema = createSchema({
  typeDefs: `
    type PostItem {
      id: Int!
      title: String!
      description: String!
      author: String!
      published: Boolean!
    }
    type Query {
      post: [PostItem!]
    }    
  `,
  resolvers: {
    Query: {
      post: () => Posts,
    },
  },
});

const { handleRequest } = createYoga({
  schema,
  graphqlEndpoint: "/api/graphql",
  fetchAPI: {
    Request: Request,
    Response: Response,
  },
});

export const POST: APIRoute = async (context) => {
  const { request } = context;
  return handleRequest(request, context as any);
};
