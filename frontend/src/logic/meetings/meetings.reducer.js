// modules
import * as R from 'ramda'
// redux
import { getState } from '../../setup/redux'

const initialState = [
  {
    id: '111',
    title: 'جلسه ۱',
    userId: '111222333',
    room: 803,
    startDate: new Date(),
    endDate: new Date()
  }
]

const reducers = {}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
