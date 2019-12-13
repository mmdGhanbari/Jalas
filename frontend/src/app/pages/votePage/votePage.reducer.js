const initialState = {
  _id: '5de54664501d4011cc8ab430',
  id: '5de54664501d4011cc8ab430',
  name: 'نظرسنجی ۱',
  status: 'done',
  userId: '1123132',
  options: [
    {
      id: 'lsndaflnasf',
      startDate: '2019-12-07T20:00:00',
      endDate: '2019-12-07T23:55:00',
      positive: 12,
      negative: 9
    },
    {
      id: 'flksnadf928hoqnwfe',
      startDate: '2019-12-08T16:00:00',
      endDate: '2019-12-08T18:55:00',
      positive: 11,
      negative: 20
    },
    {
      id: 'flasndflsdfn30qfnlans',
      startDate: '2019-12-07T20:00:00',
      endDate: '2019-12-07T23:55:00',
      positive: 12,
      negative: 9
    }
  ]
}

const reducers = {
  SET_POLL: (_, poll) => poll
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
