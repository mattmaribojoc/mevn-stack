// import dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express() // create your express app

// make app use dependencies
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

app.get('/notes', (req, res) => {
  res.send([
    'Note 1',
    'Note 2'
  ])
})

app.listen(process.env.PORT || 8081) // client is already running on 8080
