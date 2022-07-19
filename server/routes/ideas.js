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

  const slicedIdeas = populatedIdeas.slice(0, winningIdeasNum) // <--- limiting slice
  res.status(200).json(slicedIdeas)
})

router.post('/', async (req, res) => {
  /*
  // Adding new ideas to the `ideas` entity 
  Expecting: 
  [{
    userId: int,
    userName: 'string', // ignored - YES
    title: 'string',
    description: 'string'
  }, {...}, ...]
  */
  const rawData = req.body
  const data = rawData.map(rd => {
    return {
      title: rd.title,
      description: rd.description,
      userId: rd.userId
    }
  })

  await dbIdeas.populateIdeas(data)
  
  // then query the database for the whole state
  const ideasState = await db.getByTableName('ideas')

  // then, after ideas have been populated, we delete clear the `votes` table (onDelete(''))
  // so side effect happens at application level - sigh
  await db.deleteByTableName('votes')
  res.status(200).json(ideasState)
})

module.exports = router