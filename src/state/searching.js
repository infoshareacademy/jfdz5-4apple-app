const SEARCH = 'searching/SEARCH'

export const search = searchedItem => ({
  type: SEARCH,
  searchedItem
})

const initialState = {
  searchedItems: ''
}


export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        searchedItems: action.searchedItem
      }
    default:
      return state
  }
};
