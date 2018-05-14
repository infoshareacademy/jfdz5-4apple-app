const FILTER = 'searching/FILTER'
const FIND = 'searching/FIND'
const SEARCH = 'searching/SEARCH'

export const filterResults = (searchedProducts, searchedItem) => ({
  type: FILTER,
  searchedProducts,
  searchedItem
});
export const findCategories = (searchedProducts, searchedItem) => ({
  type: FIND,
  searchedProducts,
  searchedItem
});


export const searchResults = (searchedProducts) => ({
  type: SEARCH,
  searchedProducts
});

const initialState = {
  searchedItems: '',
  filteredResults: []
};

export default (state = initialState, action) => {

  switch (action.type) {
    case FILTER:
      return {
        ...state,
        filteredResults: (action.searchedProducts).map(product => product.items)
          .reduce((result, next) => result.concat(next), [])
          .filter(product => [product.brand, product.model, product.title, product.author]
            .some(name => name && name.toUpperCase().includes(action.searchedItem.toUpperCase())
            )
          )
      };
    case FIND:
      return {
        ...state,
        filteredResults: (action.searchedProducts).filter(product => {
          return product.category === action.searchedItem
        }).map(category => category.items).reduce((prevItem, currItem) => prevItem.concat(currItem), [])
      };
    case SEARCH:
      return {
        ...state,
        filteredResults: action.searchedProducts
      };
    default:
      return state
  }
}

