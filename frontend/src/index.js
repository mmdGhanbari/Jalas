import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/app'
import './index.css'
import './setup/fonts/fonts.scss'
// requests
import { getPolls } from './logic/polls/polls.request'
import { getMeetings } from './logic/meetings/meetings.request'

ReactDOM.render(<App />, document.getElementById('root'))

getPolls()
getMeetings()
