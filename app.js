var express = require('express');

var { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
var { makeExecutableSchema } = require('graphql-tools');

var app = express();

require('./config/mongo.js');
require('./config/kue.js');

//mongodb models
var Prestador = require('./models/prestador');
//Import Schema and Resolver and Routes
//Prestador
var typeDefs_prestadores = require('./models/schema/prestador_schema').default
var resolvers_prestadores = require('./models/resolvers/prestador_resolvers').default

const schema_prestador = makeExecutableSchema({
  typeDefs: typeDefs_prestadores,
  resolvers: resolvers_prestadores
})

app.use('/prestador', express.json(), graphqlExpress({
  schema: schema_prestador,
  context: {
    Prestador
  } 
}))

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/prestador'
}))

app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), () => {
  console.log('server on port 3000')
})