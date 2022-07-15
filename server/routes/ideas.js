const express = require('express')

const db = require('../db/dbfunctions/db')
const dbIdeas = require('../db/dbfunctions/ideas')

const router = express.Router()

router.get('/', async (req, res) => {
  const result = await dbIdeas.getIdeasWithOwnerAndVotes()
  // console.log(result)
   
  res.status(200).json(result)
})

router.get('/winners', async (req, res) => {
  // have a customized fn already, simply sort through

  // is an int
  const winningIdeasNum = (await db.getByTableName('sessions'))[0].winningIdeasNum

  // then get all the ideas with owners and votes
  const populatedIdeas = await dbIdeas.getIdeasWithOwnerAndVotes()

  // sort populated ideas at descending order (highest to lowest)
  populatedIdeas.sort((pa, pb) => {
    return pb.votes - pa.votes
  })

  const slicedIdeas = populatedIdeas.slice(0, winningIdeasNum)
  res.status(200).json(slicedIdeas)
})

module.exports = router