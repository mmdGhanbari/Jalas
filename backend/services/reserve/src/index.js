const express = require('express')
const axios = require('axios')
const Promise = require('bluebird')
const retry = require('bluebird-retry')

const app = express()

app.use(express.json())

app.get('/api/getAvailableRooms/:start/:end', (req, res) => {
  const { start, end } = req.params
  const reqUrl = `http://213.233.176.40/available_rooms?start=${start}&end=${end}`

  const requestWithRetry = () =>
    new Promise((resolve, reject) =>
      axios
        .get(reqUrl)
        .then(resolve)
        .catch(reject)
    ).timeout(5000)

  retry(requestWithRetry)
    .then(response => res.status(response.status).send(response.data))
    .catch(error =>
      res.status(error.response.status).send(error.response.status)
    )
})

app.post('/api/reserveRoom', (req, res) => {
  const { roomNumber, start, end, userId } = req.body
  const reqUrl = `http://213.233.176.40/rooms/${roomNumber}/reserve`

  const requestWithRetry = () =>
    new Promise((resolve, reject) =>
      axios
        .post(reqUrl, {
          username: userId,
          start,
          end
        })
        .then(resolve)
        .catch(reject)
    ).timeout(5000)

  retry(requestWithRetry)
    .then(response => res.status(response.status).send(response.data))
    .catch(error =>
      res.status(error.response.status).send(error.response.status)
    )
})

app.listen(3004, () => console.log(`Reserve listening on port ${3004}!`))
