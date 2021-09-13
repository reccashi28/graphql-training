
const Query = {
    mainCards: (parent, args, { mainCards }) => mainCards,
    animals: (parent, args, { animals }) => animals,
    animal: (parent, args, { animals}) => {
        let animalSelected = animals.find( (animal) => {
            return animal.slug === args.slug
        })
        return animalSelected;
    },
    categories: (parent, args, { categories }) => categories,
    category: (parent, args, { categories}) => {

      let categorySelected =  categories.find( category => {
        return category.slug === args.slug
      }) 

      return categorySelected;
    }
}

module.exports = Query;