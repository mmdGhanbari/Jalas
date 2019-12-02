// module
const mongoose = require('mongoose')

const { Schema, model } = mongoose

const MeetingSchema = new Schema({
  userId: String,
  title: String,
  room: Number,
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, default: Date.now }
})

exports.Meeting = model('meeting', MeetingSchema)
