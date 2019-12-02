const initialState = {
  selectedOption: null,
  selectedRoom: {
    number: null,
    pollId: null
  }
}

const reducers = {
  SET_SELECTED_OPTION: (state, selectedOption) => ({
    ...state,
    selectedOption
  }),

  SET_SELECTED_ROOM: (state, selectedRoom) => ({ ...state, selectedRoom })
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
