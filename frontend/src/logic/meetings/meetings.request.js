import { get, post } from '../../setup/request'
import { sendAnalytics } from '../analytics/analytics'
// actions
import { dispatchInsertMeeting, dispatchSetMeetings } from './meetings.action'
import { dispatchSetSnackbarMessage } from '../../app/components/snackbar/snackbar.actions'
// requests
import { sendMeetingEmail } from '../notification/notification'

export const getMeetings = () =>
  get('/meeting/api/getAllMeetings')
    .then(res => dispatchSetMeetings(res.data))
    .catch(console.log)

export const createMeeting = meeting =>
  post('/meeting/api/createMeeting', meeting)
    .then(res => {
      dispatchInsertMeeting(res.data)
      dispatchSetSnackbarMessage({
        type: 'success',
        message: 'جلسه با موفقیت ساخته شد'
      })
      sendMeetingEmail(meeting.title)
    })
    .then(() => sendAnalytics('CREATE_MEETING', meeting))
    .catch(console.log)
