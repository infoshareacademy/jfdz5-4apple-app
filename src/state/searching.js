const FILTER = 'searching/FILTER'

export const filterResults = (searchedProducts, searchedItem) => ({
  type: FILTER,
  searchedProducts,
  searchedItem
})

const initialState = {
  searchedItems: '',
  filteredResults: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER:
      return {
        ...state,
        filteredResults: (action.searchedProducts).map(product => product.items)
          .reduce((result, next) => result.concat(next), [])
          .filter(product => [product.brand, product.model, product.title, product.author]
            .some(name => name && name.includes(action.searchedItem)
            )
          )
      }
    default:
      return state
  }
}

