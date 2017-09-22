const SHOW = 'presentationOfResults/SHOW'

export const presentationOfResults = (chosenView) => ({
     type: SHOW,
    chosenView
    })

const initialState = {
    chosenView: 1
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW:
            return {
                ...state,
                chosenView: state.chosenView
            }
        default:
            return state
    }
}