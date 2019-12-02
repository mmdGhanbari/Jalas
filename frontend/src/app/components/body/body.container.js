// modules
import { connect } from 'react-redux'
// components
import Body from './body'

const mapStateToProps = state => ({
  polls: state.main.polls
})

export default connect(mapStateToProps)(Body)
