// modules
import React, { useEffect } from 'react'
// components
import Poll from './poll/poll'
import CircularProgress from '@material-ui/core/CircularProgress'
// style
import '../pages.css'

export default ({ onMount, ...poll }) => {
  useEffect(() => {
    onMount()
  }, [])
  return (
    <div className='page-container'>
      {poll._id ? (
        <Poll {...poll} />
      ) : (
        <CircularProgress style={{ color: '#eeeeee' }} />
      )}
    </div>
  )
}
