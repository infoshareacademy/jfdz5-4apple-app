import {createStore, combineReducers} from 'redux'

import searching from './state/searching'
import presentationOfResults from './state/presentationOfResults'

const reducer = combineReducers({
  searching,
  presentationOfResults
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
})

export default store