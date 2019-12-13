// modules
import React from 'react'
// components
import { withStyles, useStyles } from '@material-ui/core/styles'
import { Button, Typography } from '@material-ui/core'
// helper
import { formatTimeRange, toPersianNumber } from '../../../../../../helper/date'
// style
import './option.css'

const MyButton = withStyles({
  root: {
    width: 'calc(100% - 30px)',
    marginBottom: '15px !important',
    background: '#7f8691',
    borderRadius: '10px !important',
    overflow: 'hidden',
    padding: 0,
    height: '100%',
    cursor: 'pointer',
    textTransform: 'none',
    '&:hover': {
      background: '#767c86'
    }
  },
  label: {
    maxHeight: '40px'
  }
})(Button)

export default ({ pollId, startDate, endDate, positive, negative }) => (
  <MyButton>
    <div className='option'>
      <div className='option-votes'>
        <div className='option-positive option-vote iranyekan'>
          <p>+{toPersianNumber(positive)}</p>
        </div>
        <div className='option-negative option-vote iranyekan'>
          <p>-{toPersianNumber(negative)}</p>
        </div>
      </div>
      <Typography
        className='iranyekan'
        style={{
          marginRight: '10px',
          fontSize: 18,
          fontWeight: 'bold',
          lineHeight: '21px',
          letterSpacing: '-0.08px',
          color: '#232931'
        }}
      >
        {formatTimeRange(new Date(startDate), new Date(endDate))}
      </Typography>
    </div>
  </MyButton>
)
