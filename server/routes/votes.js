const express = require('express')

const db = require('../db/dbfunctions/db')
const dbIdeas = require('../db/dbfunctions/ideas')
const dbVotes = require('../db/dbfunctions/votes')


const router = express.Router()

router.get('/', async (req, res) => {
  /*
  [
    { id, owner, title, description, votes },
    {...}, {...} ....
  ]
  */
  const result = await dbIdeas.getIdeasWithOwnerAndVotes()
  // console.log(result)
   
  res.status(200).json(result)
})

router.get('/is_ready', async (req, res) => {
  // need to see if all users have existing ideas
  // need all users, get respective ids
  const allUserIds = (await db.getByTableName('users')).map(u => u.id)

  // need all ideas, get respective user_ids (no need to be unique)
  const userIdsInIdeas = (await db.getByTableName('ideas')).map(idea => idea.userId)

  // filter `allUserIds` - `filteredUserId`
  // -- iterate through `allUserIds`
  // -- if an id exists within `userIdsInIdeas`, return false, else true
  // `booln` = filteredUserId.length === 0, return true, else false {votingReady: bool} 
  const filteredUserId = allUserIds.filter(aId => {
    return !userIdsInIdeas.includes(aId)
  })

  res.status(200).json({ 
    votingReady: filteredUserId.length === 0 
  })
})

router.get('/is_finished', async (req, res) => {
  // need to cross check the existence of userId in `votes` (`voteUserIds`) with all the userIds in `users` (`allUserIds`).
  // iterate over `allUserIds`, then return false if includes in `voteUserIds`
  const allUserIds = (await db.getByTableName('users')).map(u => u.id)

  const voteUserIds = (await db.getByTableName('votes')).map(v => v.userId)

  const filteredUserId = allUserIds.filter(aId => {
    return !voteUserIds.includes(aId)
  })

  console.log(filteredUserId)

  res.status(200).json({
    votingFinished: filteredUserId.length === 0
  })
})

router.post('/', async (req, res) => {
  /* Expected: 
  votes = [
    {
    userId: int,
    ideaId: int,
    freq: int
    }, {....}, {....}
  ] */
  // This will populate the `votes` entity with new voteRecords! This will added 'dynamically' as each user adds their own vote (presses submit at U3)
  // The frontend will provide the userId and the associated ideaId that has been voted on
  // intention with the return is to return the whole state of the database to the front-end. And it will do what it needs to do with it. 
  // assume that it wants to use the getIdeasWithOwnerAndVotes function
  
  const data = req.body
  // here the `votes` entity is being changed
  await dbVotes.addVotes(data)
  // then we get the flexible return `getIdeasWithOwnerAndVotes`
  // -- perhaps this is so that we can get a live update of the information from the backend, even if it isn't being used at all!
  const result = await dbIdeas.getIdeasWithOwnerAndVotes()

  res.status(200).json(result)
})

module.exports = router