const initialState = {
    user: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'addNewUser':
            return {
                ...state,
                user: {
                    userName: action.userName
                }
            }
        default:
            return state
    }
}