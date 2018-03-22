import { combineReducers } from 'redux'
import messages from './messages'
import users from './users'
import chatrooms from './chatrooms'

const rootReducer = combineReducers({
  messages,
  users,
  chatrooms
})

export default rootReducer;
