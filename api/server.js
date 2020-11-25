const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hi there!')
})

app.get('/:name', (req, res) => {
  res.send(`Hi, ${req.params.name}!`)
})

app.listen(port)
