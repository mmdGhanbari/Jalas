// modules
import * as R from 'ramda'
import { connect } from 'react-redux'
// components
import MeetingPage from './meetingPage'
// actions
import { dispatchSetMeeting } from './meetingPage.action'
// requests
import { getMeetingById } from '../../../logic/meetings/meetings.request'

const mapStateToProps = state => state.view.meetingPage

const mapDispatchToProps = (_, { meetingId }) => ({
  onMount: () =>
    getMeetingById(meetingId)
      .then(dispatchSetMeeting)
      .catch(() => dispatchSetMeeting({}))
})

export default connect(mapStateToProps, mapDispatchToProps)(MeetingPage)
