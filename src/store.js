import { createStore, combineReducers, compose } from 'redux'
import persistState from 'redux-localstorage'

import auth from './state/auth'
import searching from './state/searching'
const reducer = combineReducers({
    auth,
    searching
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(

    persistState(['auth']),
)

const store = createStore(
    reducer,
    enhancer
)

export default store