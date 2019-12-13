// modules
import React, { useEffect } from 'react'
// components
import Meeting from '../../components/meeting/meeting'
import CircularProgress from '@material-ui/core/CircularProgress'
// style
import '../pages.css'

export default ({ onMount, ...meeting }) => {
  useEffect(() => {
    onMount()
  }, [])
  return (
    <div className='page-container'>
      {meeting._id ? (
        <Meeting {...meeting} />
      ) : (
        <CircularProgress style={{ color: '#eeeeee' }} />
      )}
    </div>
  )
}
