const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({message: 'votes routes not yet implemented'})
})

module.exports = router