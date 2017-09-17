const ADD_NEW_USER = 'auth/ADD_NEW_USER';
const SET_USER = 'auth/SET_USER';

export const add = (userName, userEmail, password) => ({
    type:   ADD_NEW_USER,
            userName,
            userEmail,
            password
});

export const set = user => ({
    type: SET_USER,
    user
})

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
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}