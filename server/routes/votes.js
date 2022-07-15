const express = require('express')

const db = require('../db/dbfunctions/db')
const dbIdeas = require('../db/dbfunctions/ideas')


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

module.exports = router