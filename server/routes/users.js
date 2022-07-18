const express = require('express')

const db = require('../db/dbfunctions/db')
const dbUsers = require('../db/dbfunctions/users')
const router = express.Router()

router.get('/', async (req, res) => {
  const result = await db.getByTableName('users')
  // results look like: [{id: '...', name: '...'}, {...}, ...]
  res.status(200).json(result)
})

router.get('/status', async (req, res) => {
  // update the data base based on who has voted
  await dbUsers.updateUsersVotedStatus()
  // after the update, get the
  /*
  {
    voted: [
      { id, name }, {...}, ....
    ],
    notVoted: [
      { id, name }, {...} , ....
    ]
   }
  */
  const voted = (await dbUsers.getUsersByVotedStatus(true)).map(u => {
    return { id: u.id, name: u.name }
  })
  const notVoted = (await dbUsers.getUsersByVotedStatus(false)).map(u => {
    return { id: u.id, name: u.name }
  })

  res.status(200).json({ voted, notVoted })
})

router.post('/', async (req, res) => {
  /* Expected:
  {
    "name": string
  }
  */
  const result = req.body
  await db.addByTableName('users', result)
  res.status(201).end()
})

module.exports = router
