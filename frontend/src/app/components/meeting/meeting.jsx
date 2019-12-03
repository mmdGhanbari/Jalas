// modules
import React from 'react'
// helpers
import {
  toPersianNumber,
  convertToPersianTime,
  convertToPersianDate
} from '../../../helper/date'
// style
import './meeting.css'

export default ({ title, room, startDate, endDate }) => {
  return (
    <div className='meeting'>
      <div
        className='meeting-header'
        style={{ border: `1px solid #f6da63`, borderBottom: 'none' }}
      >
        <div
          className='meeting-status iranyekan'
          style={{ background: '#f6da63' }}
        >
          <p>برگزار نشده</p>
        </div>
        <p className='meeting-title iranyekan'>{title}</p>
      </div>
      <div className='meeting-info iranyekan'>
        <div className='info-box'>
          <p className='info-text'>{toPersianNumber(room)}</p>
          <div className='info-tag'>اتاق</div>
        </div>
        <div className='info-box'>
          <p className='info-text'>{convertToPersianTime(new Date(endDate))}</p>
          <div className='info-tag'>پایان</div>
        </div>
        <div className='info-box'>
          <p className='info-text'>
            {convertToPersianTime(new Date(startDate))}
          </p>
          <div className='info-tag'>شروع</div>
        </div>
        <div className='info-box'>
          <p className='info-text'>
            {convertToPersianDate(new Date(startDate))}
          </p>
          <div className='info-tag'>تاریخ</div>
        </div>
      </div>
    </div>
  )
}
