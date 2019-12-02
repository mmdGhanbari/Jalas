import { get, post } from '../../setup/request'
// actions
import { dispatchSetRooms } from './rooms.action'

export const getAvailableRooms = (startDate, endDate) =>
  get(`/reserve/api/getAvailableRooms/${startDate}/${endDate}`)
    .then(dispatchSetRooms)
    .catch(console.log)

export const reserveRoom = (roomNumber, startDate, endDate) =>
  post(`/reserve/api/reserveRoom/${roomNumber}/${startDate}/${endDate}`)
    .then(console.log)
    .catch(console.log)
