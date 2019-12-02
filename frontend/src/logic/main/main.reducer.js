// modules
import { combineReducers } from 'redux'
// reducers
import pollsReducer from '../polls/polls.reducer'
import roomsReducer from '../rooms/rooms.reducer'

export default combineReducers({
  polls: pollsReducer,
  rooms: roomsReducer
})
