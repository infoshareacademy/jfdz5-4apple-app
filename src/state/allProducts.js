const SAVE = 'allProducts/SAVE'

export const allProductsPass = (data) => ({
  type: SAVE,
  data
})

const initialState = {
  data: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE:
      return {
        data: action.data
      }
    default:
      return state
  }
}

