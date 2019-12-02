// modules
import React from 'react'
import { Provider } from 'react-redux'
// components
import AppBar from './components/appBar/appBar'
import SideBar from './components/sideBar/sideBar.container'
import Body from './components/body/body.container'
// style
import './app.css'
// setup
import store from '../setup/redux'

const App = () => (
  <Provider store={store}>
    <div className='app'>
      <AppBar />
      <div className='body-container'>
        <Body />
        <SideBar />
      </div>
    </div>
  </Provider>
)

export default App