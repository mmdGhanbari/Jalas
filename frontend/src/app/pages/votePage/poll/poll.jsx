// modules
import React from 'react'
// components
import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import Option from './components/option/option.container'
// helpers
import { toPersianNumber } from '../../../../helper/date'
// style
import './poll.css'

const MyButton = withStyles({
  root: {
    width: '100%',
    height: '100%'
  },
  label: {
    maxHeight: '35px'
  }
})(Button)

export default ({
  id,
  name,
  status,
  options,
  action,
  reservingRoom,
  disabledOptions,
  onCreate,
  onCancel
}) => {
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
        {options.map(option => (
          <Option
            key={option.id}
            pollId={id}
            disabled={disabledOptions}
            {...option}
          />
        ))}
      </div>

      <div className='poll-actions' style={{ height: `${action ? 35 : 0}px` }}>
        {action === 'create' ? (
          <MyButton style={{ background: '#4ecca3' }} onClick={onCreate}>
            <p className='poll-actions-text iranyekan'>ایجاد جلسه</p>
          </MyButton>
        ) : action === 'cancel' ? (
          <div
            className='poll-actions-content'
            style={{ background: '#f6da63' }}
          >
            <MyButton
              style={{
                background: '#d65555',
                width: 60,
                height: 30,
                marginRight: 10
              }}
              onClick={onCancel}
            >
              <p className='iranyekan poll-actions-cancel'>لغو</p>
            </MyButton>
            <p className='poll-actions-text iranyekan'>{`در حال رزرو اتاق ${toPersianNumber(
              reservingRoom
            )}`}</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}
