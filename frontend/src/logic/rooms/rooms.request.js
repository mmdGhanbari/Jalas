import { get, post } from '../../setup/request'
import { sendAnalytics } from '../analytics/analytics'
// actions
import { dispatchSetRooms } from './rooms.action'
import { dispatchRemovePoll } from '../polls/polls.action'
import { dispatchSetSnackbarMessage } from '../../app/components/snackbar/snackbar.actions'
import {
  dispatchSetLoadingRooms,
  dispatchSetSelectedOption
} from '../../app/components/pollList/pollList.action'
// requests
import { updatePoll } from '../polls/polls.request'
import { createMeeting } from '../meetings/meetings.request'
// helpers
import { formatDate } from '../../helper/date'
import { getPollById } from '../polls/polls.reducer'

export const getAvailableRooms = (startDate, endDate) =>
  get(
    `/reserve/api/getAvailableRooms/${formatDate(startDate)}/${formatDate(
      endDate
    )}`
  )
    .then(res => {
      dispatchSetLoadingRooms(false)
      dispatchSetRooms(res.data.availableRooms)
    })
    .catch(() => {
      dispatchSetSelectedOption(null)
      dispatchSetLoadingRooms(false)
      dispatchSetSnackbarMessage({
        type: 'error',
        message: 'سامانه رزرواسیون در دسترس نیست'
      })
    })

export const reserveRoom = ({ room: roomNumber, pollId, startDate, endDate }) =>
  post(`/reserve/api/reserveRoom`, {
    roomNumber,
    start: formatDate(startDate),
    end: formatDate(endDate)
  })
    .then(() => {
      const { name } = getPollById(pollId)
      dispatchRemovePoll(pollId)
      updatePoll({
        _id: pollId,
        deleted: true
      }).then(() =>
        createMeeting({
          userId: 'piedPipers',
          title: name,
          room: roomNumber,
          startDate,
          endDate
        })
      )
      sendAnalytics('ًROOM_RESERVE', { roomNumber, startDate, endDate })
    })
    .catch(() => {
      updatePoll({
        _id: pollId,
        reservingRoom: null
      })
      dispatchSetSnackbarMessage({
        type: 'error',
        message: 'سامانه رزرواسیون در دسترس نیست'
      })
    })
