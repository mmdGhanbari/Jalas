import * as R from 'ramda'
import { get, post } from '../../setup/request'
import UIDGenerator from 'uid-generator'
// actions
import { dispatchSetPolls, dispatchUpdatePoll } from './polls.action'

const uidgen = new UIDGenerator()

const makePoll = poll => ({
  ...poll,
  id: poll._id,
  options: R.map(
    option =>
      R.compose(R.omit(['start', 'end']), option =>
        R.merge(option, {
          id: uidgen.generateSync(),
          startDate: option.start,
          endDate: option.end
        })
      )(option),
    poll.options
  )
})

export const getPolls = () =>
  get('/poll/api/getAllPolls')
    .then(res => dispatchSetPolls(R.map(makePoll, res.data)))
    .catch(console.log)

export const getPollById = pollId =>
  get(`/poll/api/getPollById/${pollId}`)
    .then(res => makePoll(res.data))
    .catch(console.log)

export const updatePoll = poll =>
  post('/poll/api/updatePoll', poll)
    .then(() => dispatchUpdatePoll({ ...poll, id: poll._id }))
    .catch(console.log)
