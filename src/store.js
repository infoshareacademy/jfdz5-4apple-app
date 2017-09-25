import {createStore, combineReducers, compose} from 'redux'
import persistState from 'redux-localstorage'
import firebase from 'firebase'

import auth, {addUNewUser} from './state/auth'
import searching from './state/searching'
import presentationOfResults from './state/presentationOfResults'

const config = {
    apiKey: "AIzaSyBfMc_ewDjLN4mtSbeufm9IiKtIxg9peHM",
    authDomain: "react-app-e2827.firebaseapp.com",
    databaseURL: "https://react-app-e2827.firebaseio.com",
    projectId: "react-app-e2827",
    storageBucket: "react-app-e2827.appspot.com",
    messagingSenderId: "5478590020"
};
firebase.initializeApp(config);


const reducer = combineReducers({
    searching,
    presentationOfResults,
    auth,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
    persistState(['auth']),
)

const store = createStore(
    reducer,
    enhancer
)
firebase.auth().onAuthStateChanged(user => {
    store.dispatch(addUNewUser(user))
})

export default store