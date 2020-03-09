"use strict";
require("dotenv").config();
require("./lib/db");

const { makeExecutableSchema } = require("graphql-tools");
const express = require("express");
const gqlMiddleware = require("express-graphql");
const { readFileSync } = require("fs");
const { join } = require("path");
const app = express();
const cors = require("cors");
const port = process.env.port || 3000;
const isDev = process.env.NODE_ENV !== "production";
console.log(isDev);
const resolvers = require("./lib/resolvers");

// definiendo el esquema
const typeDefs = readFileSync(
  join(__dirname, "lib", "schema.graphql"),
  "utf-8"
);
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Configurar los resolvers

// Ejecutar el query hello (terminal)
/* graphql(schema,'{saludo}',resolvers).then((data) => {
    console.log(data)
}) */

app.use(cors());

app.use(
  "/api",
  gqlMiddleware({
    schema: schema,
    rootValue: resolvers,
    graphiql: false
  })
);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`);
});
