const express = require('express')

const db = require('../db/dbfunctions/db')

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({message: 'users routes not yet implemented'})
})

module.exports = router