const CHECK_USER_LOGIN = 'check/USER_DETAILS'

export const check = (userName, password) => ({
    type:   CHECK_USER_LOGIN,
            userName,
            password
});

const initialState = {
    user: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHECK_USER_LOGIN:
            return {
                ...state,
                user: {
                    userName: action.userName,
                    password: action.password
                }
            }
        default:
            return state
    }
}