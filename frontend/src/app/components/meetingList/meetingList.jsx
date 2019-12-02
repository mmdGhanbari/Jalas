// modules
import React from 'react'
// components
import Meeting from '../meeting/meeting'

export default ({ meetings }) =>
  meetings.length ? (
    <>
      {meetings.map(meeting => (
        <Meeting key={meeting.id} {...meeting} />
      ))}
    </>
  ) : (
    <div className='no-meetings iranyekan'>
      <p>جلسه ای وجود ندارد</p>
    </div>
  )
