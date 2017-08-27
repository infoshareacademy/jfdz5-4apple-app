import { createStore, combineReducers, compose } from 'redux'
import persistState from 'redux-localstorage'

const reducer = combineReducers({

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(

    persistState([]),
);

const store = createStore(
    reducer,
    enhancer
);

export default store