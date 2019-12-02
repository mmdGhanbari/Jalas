import { get, post } from '../../setup/request'
import { sendAnalytics } from '../analytics/analytics'
// actions
import { dispatchSetRooms } from './rooms.action'

export const getAvailableRooms = (startDate, endDate) =>
  get(`/reserve/api/getAvailableRooms/${startDate}/${endDate}`)
    .then(res => dispatchSetRooms(res.data))
    .catch(console.log)

export const reserveRoom = (roomNumber, startDate, endDate) =>
  post(`/reserve/api/reserveRoom/${roomNumber}/${startDate}/${endDate}`)
    .then(console.log)
    .then(() =>
      sendAnalytics('ًROOM_RESERVE', { roomNumber, startDate, endDate })
    )
    .catch(console.log)
