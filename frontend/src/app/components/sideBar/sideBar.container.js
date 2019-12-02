// modules
import { connect } from 'react-redux'
// components
import SideBar from './sideBar'
// actions
import { dispatchSetPage } from '../../app.action'

const mapStateToProps = state => ({
  page: state.view.app.page
})

const mapDispatchToProps = () => ({
  setPage: dispatchSetPage
})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
