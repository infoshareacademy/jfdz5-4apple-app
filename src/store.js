import {createStore, combineReducers} from 'redux'

import searching from './state/searching'

const reducer = combineReducers({
  searching,
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
})

export default store