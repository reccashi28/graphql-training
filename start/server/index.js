const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type MainCard {
      title: String
      image: String!
  }

  type Query {
    books: [Book]
    mainCards: [MainCard]
  }
`;

const books = [
{
    title: 'The Awakening',
    author: 'Kate Chopin',
},
{
    title: 'City of Glass',
    author: 'Paul Auster',
},
];

const mainCards = [
{
    title: 'Recently Reviewed',
    image: 'giraffe',
},
{
    title: 'Favorites',
    image: 'cat',
},
{
    title: 'Best Seller',
    image: 'dog',
},
];



const resolvers = {
Query: {
    books: () => books,
    mainCards: () => mainCards,
},
};

  const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});