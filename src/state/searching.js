const SEARCH = 'searching/SEARCH'
const FILTER = 'searching/FILTER'

export const search = searchedItem => ({
  type: SEARCH,
  searchedItem
})
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
    case SEARCH:
      return {
        ...state,
        searchedItems: action.searchedItem
      }
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

