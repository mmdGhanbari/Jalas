// modules
import * as R from 'ramda'
// redux
import { getState } from '../../setup/redux'

const initialState = [
  {
    id: '111',
    name: 'نظرسنجی ۱',
    status: 'done',
    reservingRoom: null,
    options: [
      {
        id: '111',
        startDate: new Date(),
        endDate: new Date(),
        positive: 10,
        negative: 4
      },
      {
        id: '222',
        startDate: new Date(),
        endDate: new Date(),
        positive: 5,
        negative: 12
      }
    ]
  },
  {
    id: '222',
    name: 'نظرسنجی ۲',
    status: 'pending',
    reservingRoom: null,
    options: [
      {
        id: '333',
        startDate: new Date(),
        endDate: new Date(),
        positive: 10,
        negative: 4
      },
      {
        id: '444',
        startDate: new Date(),
        endDate: new Date(),
        positive: 5,
        negative: 12
      }
    ]
  }
]

// views
export const getPollById = id =>
  R.find(R.propEq('id', id))(getState().main.polls)

const reducers = {
  UPDATE_POLL: (state, updatedPoll) =>
    R.map(
      poll => (poll.id === updatedPoll.id ? { ...poll, ...updatedPoll } : poll),
      state
    ),

  SET_POLLS: (_, polls) => polls
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
