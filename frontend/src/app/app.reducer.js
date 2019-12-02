// modules
import { combineReducers } from 'redux'
// reducers
import pollListReducer from './components/pollList/pollList.reducer'

const initialState = {
  page: 'polls' // create, polls, meetings
}

const reducers = {
  SET_PAGE: (state, page) => ({ ...state, page })
}

const appReducer = (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state

export default combineReducers({
  app: appReducer,
  pollList: pollListReducer
})
