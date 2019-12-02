// modules
import { connect } from 'react-redux'
// components
import Poll from './poll'
// actions
import {
  dispatchSetSelectedOption,
  dispatchSetSelectedRoom
} from '../pollList/pollList.action'
import { dispatchSetSnackbarMessage } from '../snackbar/snackbar.actions'
// views
import { getPollById } from '../../../logic/polls/polls.reducer'
// requests
import { updatePoll } from '../../../logic/polls/polls.request'
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
    dispatchSetSnackbarMessage({
      type: 'success',
      message: 'hey you !!'
    })
    const { startDate, endDate } = getState().view.pollList.selectedOption
    updatePoll(
      {
        id,
        reservingRoom: getState().view.pollList.selectedRoom.number
      },
      startDate,
      endDate
    )
    dispatchSetSelectedOption(null)
    dispatchSetSelectedRoom({})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Poll)
