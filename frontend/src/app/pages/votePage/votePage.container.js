// modules
import * as R from 'ramda'
import { connect } from 'react-redux'
// components
import VotePage from './votePage'
// actions
import { dispatchSetPoll } from './votePage.action'
// requests
import { getPollById } from '../../../logic/polls/polls.request'

const mapStateToProps = state => state.view.votePage

const mapDispatchToProps = (_, { pollId }) => ({
  onMount: () => console.log()
  // getPollById(pollId)
  //   .then(dispatchSetPoll)
  //   .catch(() => dispatchSetPoll({}))
})

export default connect(mapStateToProps, mapDispatchToProps)(VotePage)
