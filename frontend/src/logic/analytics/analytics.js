import { post } from '../../setup/request'

export const sendAnalytics = (type, data) =>
  post('/analytics/api/insertEvent', {
    type,
    data,
    time: new Date()
  })
