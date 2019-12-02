import { createAction } from 'redux-actions'
import { dispatch } from '../../setup/redux'

export const UPDATE_POLL = 'UPDATE_POLL'
export const dispatchUpdatePoll = (...args) =>
  dispatch(createAction(UPDATE_POLL)(...args))
