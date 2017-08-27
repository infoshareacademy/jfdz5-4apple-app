import { createStore, combineReducers, compose } from 'redux'
import persistState from 'redux-localstorage'

import auth from './state/auth'
const reducer = combineReducers({
    auth
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(

    persistState([auth]),
)

const store = createStore(
    reducer,
    enhancer
)

export default store