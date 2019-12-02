import * as R from 'ramda'
import { get, post } from '../../setup/request'
import UIDGenerator from 'uid-generator'
// actions
import { dispatchSetPolls, dispatchUpdatePoll } from './polls.action'
// requests
import { reserveRoom } from '../rooms/rooms.request'

const uidgen = new UIDGenerator()

const makePoll = poll => ({
  ...poll,
  id: poll._id,
  options: R.map(R.assoc('id', uidgen.generateSync()), poll.options)
})

export const getPolls = () =>
  get('/poll/api/getAllPolls')
    .then(polls => dispatchSetPolls(R.map(makePoll, polls)))
    .catch(console.log)

export const updatePoll = (poll, startDate, endDate) =>
  post('/poll/api/updatePoll', { ...poll, _id: poll.id })
    .then(() => dispatchUpdatePoll(poll))
    .then(() => reserveRoom(poll.reservingRoom, startDate, endDate))
    .catch(console.log)
