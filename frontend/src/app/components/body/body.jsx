// modules
import React from 'react'
// components
import PollList from '../pollList/pollList.container'
import MeetingList from '../meetingList/meetingList'
// style
import './body.css'

export default ({ page }) => (
  <div className='body'>
    {page === 'polls' ? (
      <PollList />
    ) : page === 'meetings' ? (
      <MeetingList />
    ) : null}
  </div>
)
