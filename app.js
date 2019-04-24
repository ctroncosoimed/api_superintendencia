import express from 'express';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
const app = express();

//Mongo Connect
import mongoose from 'mongoose';
mongoose.connect('mongodb://db/graphql',{ useNewUrlParser: true })
.then(() => console.log('mongo connect'))
.catch(err => console.log(err));

//mongodb models
import Prestador from './model/prestador';


//Import Schema and Resolver and Routes

//Prestador
import typeDefs_prestadores from './model/schema/prestador_schema';
import resolvers_prestadores from './model/resolvers/prestador_resolvers';
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