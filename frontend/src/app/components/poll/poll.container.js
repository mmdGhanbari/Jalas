// modules
import { connect } from 'react-redux'
// components
import Poll from './poll'
// actions
import {
  dispatchSetSelectedOption,
  dispatchSetSelectedRoom
} from '../pollList/pollList.action'
import { dispatchUpdatePoll } from '../../../logic/polls/polls.action'
// views
import { getPollById } from '../../../logic/polls/polls.reducer'
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
    dispatchUpdatePoll({
      id,
      reservingRoom: getState().view.pollList.selectedRoom.number
    })
    dispatchSetSelectedOption(null)
    dispatchSetSelectedRoom({})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Poll)
