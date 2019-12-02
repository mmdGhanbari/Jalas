import { createAction } from 'redux-actions'
import { dispatch } from '../../setup/redux'

export const UPDATE_POLL = 'UPDATE_POLL'
export const dispatchUpdatePoll = (...args) =>
  dispatch(createAction(UPDATE_POLL)(...args))

export const SET_POLLS = 'SET_POLLS'
export const dispatchSetPolls = (...args) =>
  dispatch(createAction(SET_POLLS)(...args))