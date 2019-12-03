import { post } from '../../setup/request'

export const sendMeetingEmail = title =>
  post('/notification/api/reserveComplete', {
    message: `جلسه "${title}" با موفقیت ساخته شد`
  })
