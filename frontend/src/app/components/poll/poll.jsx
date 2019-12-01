// modules
import React from 'react'
// components
import Option from './components/option/option'
// style
import './poll.css'

export default ({ name, status, options }) => {
  const statusColor = status === 'done' ? '#4ecca3' : '#f6da63'
  return (
    <div className='poll'>
      <div
        className='poll-header'
        style={{ border: `1px solid ${statusColor}`, borderBottom: 'none' }}
      >
        <div
          className='poll-status iranyekan'
          style={{ background: statusColor }}
        >
          <p>{status === 'done' ? 'نهایی شده' : 'در جریان'}</p>
        </div>
        <p className='poll-name iranyekan'>{name}</p>
      </div>
      <div className='poll-options'>
        <Option
          id={'111'}
          start={new Date()}
          end={new Date()}
          positive={10}
          negative={4}
          onClick={Function.prototype}
        />
        <Option
          id={'222'}
          start={new Date()}
          end={new Date()}
          positive={10}
          negative={4}
          onClick={Function.prototype}
        />
        <Option
          id={'333'}
          start={new Date()}
          end={new Date()}
          positive={10}
          negative={4}
          onClick={Function.prototype}
        />
      </div>
      {/* <div className='poll-actions'>
        <p className='iranyekan'>ایجاد جلسه</p>
      </div> */}
    </div>
  )
}
