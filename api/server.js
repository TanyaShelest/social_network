const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hi there!')
})

app.get('/:name', (req, res) => {
  const name = req.params.name[0].toUpperCase() + (req.params.name).slice(1).toLowerCase()
  res.send(`Hi, ${req.params.name}!`)
})

app.listen(port)
