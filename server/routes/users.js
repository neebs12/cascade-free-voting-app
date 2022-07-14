const express = require('express')

const db = require('../db/dbfunctions/db')

const router = express.Router()

router.get('/', async (req, res) => {
  /* Expected information
  [
    {
     id,
     name,
    },
    {...}, 
    {...}, ....
  ]
  */
  // 
  const result = await db.getByTableName('users')
  // results look like: [{id: '...', name: '...', voted: '...'}, {...}, ...]
  // simply deletes the `voted` property from the `r` object
  result.forEach(r => { delete r.voted })
  res.status(200).json(result)
})

module.exports = router