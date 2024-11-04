import type { APIRoute } from "astro";
import { createYoga, createSchema } from "graphql-yoga";
import { Post } from "../../server/post/models/post.model";
import { dbConnection } from "../../server/core/db.config";

dbConnection();

const schema = createSchema({
  typeDefs: `
    type Post {
      title: String!
      description: String!
      author: String!
      published: Boolean!
    }
    type Query {
      post: [Post!]
    }    
  `,
  resolvers: {
    Query: {
      post: () => {
        return Post.find({});
      },
    },
    // Mutation: {},
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
