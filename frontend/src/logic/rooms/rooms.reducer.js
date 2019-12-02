// actions

const initialState = [801, 802, 302, 305, 102]

const reducers = {}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
