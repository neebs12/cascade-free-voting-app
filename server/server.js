const express = require('express')
const path = require('path')

const apiHelper = require('./routes/apiHelper')

const sessionsRoutes = require('./routes/sessions')
const usersRoutes = require('./routes/users')
const ideasRoutes = require('./routes/ideas')
const votesRoutes = require('./routes/votes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use(apiHelper.terminalLogger)

server.use('/api/v1/sessions', sessionsRoutes)
server.use('/api/v1/users', usersRoutes)
server.use('/api/v1/ideas', ideasRoutes)
server.use('/api/v1/votes', votesRoutes)

server.get('*', (req, res) => {
  console.log('hit!!')
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
