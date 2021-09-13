const { v4 } = require('uuid')
const Mutation = {
    addAnimal: (parent, {
        image,
        title,
        rating,
        price,
        description,
        stock,
        onSale,
        slug,
        category,
    }, {animals}) => {

        let newAnimal = {
            id: v4(),
            image,
            title,
            rating,
            price,
            description,
            stock,
            onSale,
            slug,
            category,
        }

        animals.push(newAnimal)
        return newAnimal;
    },
    // removeAnimal( parent, {
    //     id
    // }, )
}

module.exports = Mutation;

// id: ID!
//     image: String!
//     title: String!
//     rating: Float
//     price: String!
//     description: [String!]!
//     stock: Int!
//     onSale: Boolean
//     slug: String!
//     category: Category!