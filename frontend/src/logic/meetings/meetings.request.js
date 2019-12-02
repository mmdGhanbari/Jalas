import { get, post } from '../../setup/request'
// actions
import { dispatchInsertMeeting, dispatchSetMeetings } from './meetings.action'

export const getMeetings = () =>
  get('/meeting/api/getAllMeetings')
    .then(dispatchSetMeetings)
    .catch(console.log)

export const createMeeting = meeting =>
  post('/meeting/api/createMeeting', meeting)
    .then(dispatchInsertMeeting)
    .catch(console.log)
