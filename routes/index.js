const { router, get, post, options } = require('microrouter');
const { ApolloServer, gql } = require('apollo-server-micro');
const cors = require('micro-cors')()
const schema = require('../gql')
const resolver = require('../resolvers')
console.log(resolver)
console.log(schema)
const typeDefs = gql`${schema}`
const resolvers = resolver

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({req}) => {return {params: req.headers}},
	introspection: true,
  	playground: true,
})
const graphqlPath = '/init'
const graphqlHandler = apolloServer.createHandler({ path: graphqlPath })

module.exports = cors(router(
  get('/hello', (req, res) => 'Welcome!'),
  post(graphqlPath, graphqlHandler),
  get(graphqlPath, graphqlHandler),
))
