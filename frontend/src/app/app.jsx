// modules
import React from 'react'
import { Provider } from 'react-redux'
import { Router } from '@reach/router'
// pageComponents
import AppPage from './pages/appPage/appPage'
import MeetingPage from './pages/meetingPage/meetingPage.container'
import VotePage from './pages/votePage/votePage.container'
// components
import AppBar from './components/appBar/appBar'
import SnackBar from './components/snackbar/snackbar.container'
// style
import './app.css'
// setup
import store from '../setup/redux'

const App = () => (
  <Provider store={store}>
    <div className='app'>
      <SnackBar />
      <AppBar />
      <div className='body-container'>
        <Router style={{ display: 'contents' }}>
          <AppPage path='/' />
          <MeetingPage path='/meeting/:meetingId' />
          <VotePage path='/vote/:pollId' />
        </Router>
      </div>
    </div>
  </Provider>
)

export default App
