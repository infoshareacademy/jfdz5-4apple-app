import {createStore, combineReducers} from 'redux'

import searching from './state/searching'
import presentationOfResults from './state/presentationOfResults'
import searchingCategories from "./state/searchingCategories";

const reducer = combineReducers({
    searching,
    presentationOfResults,
    searchingCategories
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
})

export default store