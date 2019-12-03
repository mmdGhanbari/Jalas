// modules
import { connect } from 'react-redux'
// components
import Poll from './poll'
// actions
import {
  dispatchSetSelectedOption,
  dispatchSetSelectedRoom
} from '../pollList/pollList.action'
// views
import { getPollById } from '../../../logic/polls/polls.reducer'
// requests
import { updatePoll } from '../../../logic/polls/polls.request'
import { reserveRoom } from '../../../logic/rooms/rooms.request'
// redux
import { getState } from '../../../setup/redux'

const mapStateToProps = (state, { id, status }) => {
  const { reservingRoom } = getPollById(id)
  const { pollId } = state.view.pollList.selectedRoom

  return {
    reservingRoom,
    disabledOptions: status !== 'done' || !!reservingRoom,
    action: pollId === id ? 'create' : reservingRoom ? 'cancel' : ''
  }
}

const mapDispatchToProps = (_, { id }) => ({
  onCreate: () => {
    const { startDate, endDate } = getState().view.pollList.selectedOption
    const reservingRoom = getState().view.pollList.selectedRoom.number

    updatePoll({
      _id: id,
      reservingRoom
    })
      .then(() => {
        dispatchSetSelectedRoom({})
        dispatchSetSelectedOption(null)
      })
      .then(() =>
        reserveRoom({
          endDate,
          startDate,
          pollId: id,
          room: reservingRoom
        })
      )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Poll)
