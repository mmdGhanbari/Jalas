// modules
import React from 'react'
// components
import Poll from '../poll/poll'
// style
import './body.css'

export default () => (
  <div className='body'>
    <Poll name='نظرسنجی ۱' status='done' options={[]} />
    <Poll name='نظرسنجی ۲' status='pending' options={[]} />
    <Poll name='نظرسنجی ۳' status='done' options={[]} />
  </div>
)
