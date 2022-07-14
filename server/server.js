const express = require('express')
const path = require('path')

const apiHelper = require('./routes/apiHelper')

const v1Routes = require('./routes/v1') // <--- will possibly change

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use(apiHelper.terminalLogger)

// server.use('/api/v1/fruits', fruitRoutes)
server.use('/api/v1', v1Routes)

server.use(apiHelper.unknownEndpoint) 
// <--- normal arg cb
server.use(apiHelper.errorHandler)    
// <--- err arg cb, hence controlled

module.exports = server
