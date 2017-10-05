import { combineReducers } from 'redux'
import { FETCH_USERS_SUCCESS, FETCH_USERS_START, ADD_USERS } from '../actions'

const initialState = { users: [], fetching: false }

function usersList(state = initialState, action) {
  switch(action.type) {
    case FETCH_USERS_START:
    return { ...state, fetching: true }
    case FETCH_USERS_SUCCESS:
    // console.log('user',action.users)
      return {...state, users: action.users, fetching: false}
    case ADD_USERS:
    console.log('user',action.user)
    return { ...state, users: [ ...state.users, action.user]}
    default:
      return state
  }
}

const rootReducer = combineReducers({ usersList })

export default rootReducer