// @flow
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import rootReducer from './reducers'

let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
 window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(ReduxThunk))

export default store