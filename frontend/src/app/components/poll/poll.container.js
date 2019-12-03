// modules
import { connect } from 'react-redux'
// components
import Poll from './poll'
// actions
import {
  dispatchSetSelectedOption,
  dispatchSetSelectedRoom
} from '../pollList/pollList.action'
// requests
import { updatePoll } from '../../../logic/polls/polls.request'
import { reserveRoom, cancelReserve } from '../../../logic/rooms/rooms.request'
// redux
import { getState } from '../../../setup/redux'

const mapStateToProps = (state, { id, status, reservingRoom }) => {
  const { pollId } = state.view.pollList.selectedRoom

  return {
    disabledOptions: status !== 'done' || !!reservingRoom,
    action: pollId === id ? 'create' : reservingRoom ? 'cancel' : ''
  }
}

const mapDispatchToProps = (_, { id, reservingRoom }) => ({
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
  },
  onCancel: () => cancelReserve(id, reservingRoom)
})

export default connect(mapStateToProps, mapDispatchToProps)(Poll)
