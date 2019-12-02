// modules
import * as R from 'ramda'
import { connect } from 'react-redux'
// components
import Option from './option'
// actions
import {
  dispatchSetSelectedOption,
  dispatchSetSelectedRoom
} from '../../../pollList/pollList.action'

const mapStateToProps = (state, { id }) => ({
  expanded: R.path(['view', 'pollList', 'selectedOption', 'id'], state) === id,
  rooms: state.main.rooms
})

const mapDispatchToProps = (_, { id, startDate, endDate }) => ({
  onChange: (e, expanded) => {
    dispatchSetSelectedOption(expanded ? { id, startDate, endDate } : null)
    dispatchSetSelectedRoom({})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Option)
