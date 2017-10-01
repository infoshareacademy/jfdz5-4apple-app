const SET_FAVS = 'favs/SET_FAVS'

export const setFavs = favs => ({
    type: SET_FAVS,
    favs
})

const initialState = {
    chosenProducts: []
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_FAVS:
            return {
                chosenProducts: action.favs
            }
        default:
            return state
    }
}