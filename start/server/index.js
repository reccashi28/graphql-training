const { ApolloServer, gql } = require('apollo-server');

const { mainCards, animals, categories}  = require('./db')

const typeDefs = gql`

  type MainCard {
      title: String
      image: String!
  }

  type Animal {
    id: ID!
    image: String!
    title: String!
    rating: Float
    price: String!
    description: [String!]!
    stock: Int!
    onSale: Boolean
    slug: String!
  }

  type Category {
    id: ID!
    image: String
    category: String
    slug: String
  }

  type Query {
    mainCards: [MainCard]
    animals: [Animal!]!
    animal(slug: String!): Animal
    categories: [Category]
    category(slug: String): Category
  }


`;

const resolvers = {
  Query: {
      mainCards: () => mainCards,
      animals: () => animals,
      animal: (parent, args, ctx) => {
          let animalSelected = animals.find( (animal) => {
              return animal.slug === args.slug
          })
          return animalSelected;
      },
      categories: () => categories,
      category: (parent, args, ctx) => {

        let categorySelected =  categories.find( category => {
          return category.slug === args.slug
        }) 

        return categorySelected;
      }
  },
};

  const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});