import express from "express";
import { connect } from "./database";
import { ApolloServer } from "apollo-server-express";
import 'reflect-metadata'
import {resolvers} from "./modules/resolvers";
import {typeDefs} from "./modules/typeDef";
const app = express();
const port = process.env.PORT || 3000;
connect();

const server = new ApolloServer({resolvers,typeDefs});

server.applyMiddleware({ app });

app.listen({ port }, () =>
  console.log(`server running on ${port}${server.graphqlPath}`)
);

