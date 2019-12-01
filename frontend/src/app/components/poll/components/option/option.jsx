// modules
import React from 'react'
// components
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { Button, Typography } from '@material-ui/core'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Room from '../room/room'
// helper
import { formatTimeRange, toPersianNumber } from '../../../../../helper/date'
// style
import './option.css'

const MyButton = withStyles({
  label: {
    maxHeight: '40px'
  }
})(Button)

const useStyles = makeStyles(() => ({
  innerPaper: {
    width: 'calc(100% - 30px)',
    marginBottom: '15px !important',
    background: '#7f8691',
    borderRadius: '10px !important',
    overflow: 'hidden',
    padding: 0
  },
  expanded: {
    marginTop: '0 !important'
  },
  details: {
    padding: 0
  }
}))

export default ({ start, end, positive, negative, onClick }) => {
  const classes = useStyles()
  return (
    <ExpansionPanel
      classes={{ root: classes.innerPaper, expanded: classes.expanded }}
    >
      <ExpansionPanelSummary
        aria-controls='panel1a-content'
        id='panel1a-header'
        style={{
          padding: 0,
          height: '40px',
          minHeight: '40px',
          borderRadius: 0
        }}
      >
        <MyButton
          style={{
            height: '100%',
            width: '100%',
            background: '#7f8691',
            cursor: 'pointer',
            textTransform: 'none',
            padding: '0',
            borderRadius: 0
          }}
          onClick={onClick}
        >
          <div className='option'>
            <div className='option-votes'>
              <div className='option-positive option-vote iranyekan'>
                <p>{toPersianNumber(positive)}</p>
              </div>
              <div className='option-negative option-vote iranyekan'>
                <p>{toPersianNumber(negative)}</p>
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
              {formatTimeRange(start, end)}
            </Typography>
          </div>
        </MyButton>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails classes={{ root: classes.details }}>
        <div className='option-rooms'>
          <Room roomNumber={801} />
          <Room roomNumber={802} selected />
          <Room roomNumber={803} />
          <Room roomNumber={301} />
          <Room roomNumber={401} />
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}
