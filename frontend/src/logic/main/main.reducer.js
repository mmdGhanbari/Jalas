// modules
import { combineReducers } from 'redux'
// reducers
import pollsReducer from '../polls/polls.reducer'
import roomsReducer from '../rooms/rooms.reducer'
import meetingsReducer from '../meetings/meetings.reducer'

export default combineReducers({
  polls: pollsReducer,
  rooms: roomsReducer,
  meetings: meetingsReducer
})
