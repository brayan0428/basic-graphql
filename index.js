'use strict'
require('dotenv').config()
require('./lib/db')

const { makeExecutableSchema } = require('graphql-tools')
const express = require('express')
const gqlMiddleware = require('express-graphql')
const {readFileSync} = require('fs')
const {join} = require('path')
const app = express()
const port = process.env.port || 3000
const resolvers = require('./lib/resolvers')

// definiendo el esquema
const typeDefs = readFileSync(join(__dirname,'lib','schema.graphql'),'utf-8')
const schema = makeExecutableSchema({typeDefs,resolvers})

// Configurar los resolvers

// Ejecutar el query hello (terminal)
/* graphql(schema,'{saludo}',resolvers).then((data) => {
    console.log(data)
}) */

app.use('/api', gqlMiddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`)
})
