import { createServer } from "@graphql-yoga/node";
import { resolvers, typeDefs } from "./schema";

const server = createServer({
  schema: { typeDefs, resolvers },
  endpoint: "/api/db",
});

export default server;
