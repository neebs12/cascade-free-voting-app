const express = require('express')
const path = require('path')

const apiHelper = require('./routes/apiHelper')

const usersRoutes = require('./routes/users')
const ideasRoutes = require('./routes/ideas')
const votesRoutes = require('./routes/votes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use(apiHelper.terminalLogger)

server.use('/api/v1/users', usersRoutes)
server.use('/api/v1/ideas', ideasRoutes)
server.use('/api/v1/votes', votesRoutes)

server.use(apiHelper.unknownEndpoint)
// <--- normal arg cb
server.use(apiHelper.errorHandler)
// <--- err arg cb, hence controlled

module.exports = server
