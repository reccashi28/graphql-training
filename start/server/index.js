const { ApolloServer } = require('apollo-server');

const { mainCards, animals, categories}  = require('./db');
const { category } = require('../../final/server/resolvers/Query');
const typeDefs  = require('./schema')
const Query = require('./resolvers/Query')
const Animal = require('./resolvers/Animals')
const Category = require('./resolvers/Category')

const server = new ApolloServer({ typeDefs, resolvers: {
  Query,
  Animal,
  Category
} });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});