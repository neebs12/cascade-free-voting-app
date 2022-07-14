const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({message: 'G_NA: sessions GET routes not yet implemented'})
})

router.post('/', (req, res) => {
  res.status(200).json({message: 'P1: sessions routes not yet implemented'})
})

module.exports = router