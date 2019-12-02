const initialState = [
  // {
  //   id: '111',
  //   title: 'جلسه ۱',
  //   userId: '111222333',
  //   room: 803,
  //   startDate: new Date(),
  //   endDate: new Date()
  // }
]

const reducers = {
  SET_MEETINGS: (_, meetings) => meetings,

  INSERT_MEETING: (state, meeting) => [...state, meeting]
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
