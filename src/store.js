import {createStore, combineReducers} from 'redux'
import firebase from 'firebase'

import auth, {addNewUser} from './state/auth'
import searching from './state/searching'
import presentationOfResults from './state/presentationOfResults'
import allProducts from "./state/allProducts";

import {setFavs} from './state/favs'
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
  auth,
  searching,
  presentationOfResults,
  allProducts,
})


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

firebase.auth().onAuthStateChanged(user => {
    store.dispatch(addNewUser(user))
    if(user !==null) {
        const userId = firebase.auth().currentUser.uid
        firebase.database().ref('/listOfFavs/' + userId).on('value', snapshot => {
            store.dispatch(setFavs(snapshot.val()))
        })
    }
})



export default store