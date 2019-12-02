// modules
import React from 'react'
// components
import Poll from '../poll/poll.container'

export default ({ polls }) => (
  <>
    {polls.map(poll => (
      <Poll key={poll.id} {...poll} />
    ))}
  </>
)
