import { get, post } from '../../setup/request'
import { sendAnalytics } from '../analytics/analytics'
// actions
import { dispatchInsertMeeting, dispatchSetMeetings } from './meetings.action'

export const getMeetings = () =>
  get('/meeting/api/getAllMeetings')
    .then(res => console.log(res.data) || dispatchSetMeetings(res.data))
    .catch(console.log)

export const createMeeting = meeting =>
  post('/meeting/api/createMeeting', meeting)
    .then(res => dispatchInsertMeeting(res.data))
    .then(() => sendAnalytics('CREATE_MEETING', meeting))
    .catch(console.log)
