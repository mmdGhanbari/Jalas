const mongoose = require('mongoose')
const { Meeting } = require('./model')

const connect = dbName => {
  mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })

  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', () => console.log(`Connected to ( ${dbName} ) database!`))
}

connect('jalas')

exports.saveMeeting = meeting => new Meeting(meeting).save()

exports.getAllMeetings = () => Meeting.find({})

exports.getUserMeetings = userId => Meeting.find({ userId })
