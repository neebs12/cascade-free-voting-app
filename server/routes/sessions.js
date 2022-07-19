const express = require('express')

const db = require('../db/dbfunctions/db')
const dbSessions = require('../db/dbfunctions/sessions')

const router = express.Router()

router.get('/', async (req, res) => {
  // res.status(200).json({message: 'G_NA: sessions GET routes not yet implemented'})
  const result = await db.getByTableName('sessions')
  res.status(200).json(result)
})

router.post('/', async (req, res) => {
  try {
    const rawData = req.body
    await dbSessions.populateSession({
      eventName: rawData.title,
      winningIdeasNum: rawData.numWinners
    })
    
    res.status(201).end() // 201 created
  } catch {
    res.status(500).json({message: 'unable to add session'})
  }
})

router.delete('/reset', async (req, res) => {
  await db.deleteByTableName('sessions')
  await db.deleteByTableName('users')
  await db.deleteByTableName('ideas')
  await db.deleteByTableName('votes')
  res.status(204).end() // 204 no content
})

module.exports = router