const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()

const portMap = {
  meeting: 3001,
  poll: 3002,
  notification: 3003,
  reserve: 3004,
  analytics: 3005
}

app.use(express.json())
app.use(cors())

app.get('/:service/*', (req, res) => {
  const service = req.params.service
  const port = portMap[service]
  if (!port || !service) res.status(404).send()

  const url = req.url.substring(service.length + 1)

  axios
    .get(`http://localhost:${port}${url}`)
    .then(response => res.status(response.status).send(response.data))
    .catch(error =>
      res.status(error.response.status).send(error.response.status)
    )
})

app.post('/:service/*', (req, res) => {
  const service = req.params.service
  const port = portMap[service]
  if (!port || !service) res.status(404).send()

  const url = req.url.substring(service.length + 1)
  axios
    .post(`http://localhost:${port}${url}`, req.body)
    .then(response => res.status(response.status).send(response.data))
    .catch(error =>
      res.status(error.response.status).send(error.response.status)
    )
})

app.listen(3000, () => console.log(`Gateway listening on port ${3000}!`))
