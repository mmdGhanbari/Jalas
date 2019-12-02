// modules
import { combineReducers } from 'redux'
// reducers
import pollListReducer from './components/pollList/pollList.reducer'

export default combineReducers({
  pollList: pollListReducer
})
