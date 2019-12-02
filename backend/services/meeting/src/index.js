const express = require('express')
const { getUserMeetings, getAllMeetings, saveMeeting } = require('./db')

const app = express()

app.use(express.json())

app.get('/api/getAllMeetings', (req, res) => {
  getAllMeetings().then(meetings => res.send(meetings))
})

app.get('/api/getUserMeetings/:userId', (req, res) => {
  getUserMeetings(req.params.userId).then(meetings => res.send(meetings))
})

app.post('/api/createMeeting', (req, res) => {
  saveMeeting(req.body).then(meeting => res.status(200).send(meeting))
})

app.listen(3001, () => console.log(`Meeting listening on port ${3001}!`))
