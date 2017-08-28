const ADD_NEW_USER = 'auth/ADD_NEW_USER';

export const add = (userName, userEmail, password) => ({
    type: ADD_NEW_USER,
        userName,
        userEmail,
        password
});
const initialState = {
    user: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_USER:
            return {
                ...state,
                user: {
                    userName: action.userName,
                    userEmail: action.userEmail
                }
            }
        default:
            return state
    }
}