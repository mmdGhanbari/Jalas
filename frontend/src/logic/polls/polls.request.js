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
  options: R.map(
    option =>
      R.merge(option, {
        id: uidgen.generateSync(),
        startDate: new Date(option.start),
        endDate: new Date(option.end)
      }),
    poll.options
  )
})

export const getPolls = () =>
  get('/poll/api/getAllPolls')
    .then(
      res =>
        console.log(res.data) || dispatchSetPolls(R.map(makePoll, res.data))
    )
    .catch(console.log)

export const updatePoll = (poll, startDate, endDate) =>
  post('/poll/api/updatePoll', { ...poll, _id: poll.id })
    .then(() => dispatchUpdatePoll(poll))
    .then(() => reserveRoom(poll.reservingRoom, startDate, endDate))
    .catch(console.log)
