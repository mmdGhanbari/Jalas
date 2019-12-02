// modules
import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
// style
import './sideBar.css'

const MyButton = withStyles({
  root: {
    width: '100%',
    marginTop: '8px',
    marginLeft: '15px',
    height: '50px',
    background: '#232931',
    transition: 'margin-left 0.3s',
    '&:hover': {
      backgroundColor: '#393e46'
    }
  }
})(Button)

export default ({ page, setPage }) => (
  <div className='side-bar'>
    <MyButton
      style={{ marginLeft: `${page === 'create' ? -15 : 15}px` }}
      onClick={Function.prototype}
    >
      <p className='iranyekan side-bar-text'>ایجاد جلسه</p>
    </MyButton>
    <MyButton
      style={{ marginLeft: `${page === 'polls' ? -15 : 15}px` }}
      onClick={() => setPage('polls')}
    >
      <p className='iranyekan side-bar-text'>در حال نظرسنجی</p>
    </MyButton>
    <MyButton
      style={{ marginLeft: `${page === 'meetings' ? -15 : 15}px` }}
      onClick={() => setPage('meetings')}
    >
      <p className='iranyekan side-bar-text'>نهایی شده</p>
    </MyButton>
  </div>
)
