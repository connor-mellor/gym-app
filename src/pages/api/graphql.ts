import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";
import cors from "cors";

import type { NextApiRequest, NextApiResponse } from "next";

// let apolloServer: ApolloServer;

// async function createApolloServer() {
//   if (!apolloServer) {
//     apolloServer = new ApolloServer({ typeDefs, resolvers });
//     await apolloServer.start();
//   }
//   return apolloServer.createHandler({ path: "/api/graphql" });
// }

// const corsHandler = cors({
//   origin: "*", // Set the allowed origin or specify specific domains
//   methods: ["POST"], // Specify the allowed methods
// });

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const apolloHandler = await createApolloServer();
//   return corsHandler(req, res, () => apolloHandler(req, res));
// }

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});
export default startServerAndCreateNextHandler(apolloServer);
