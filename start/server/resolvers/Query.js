
const Query = {
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
}

module.exports = Query;