const connection = require('../connection')

const dbGenericFns = require('./db')
const {mapToCamelCase, mapToSnakeCase} = require('./dbHelper') 

async function getVotes(db = connection) {
  // get all ideas
  // a join between `users` and `votes`
  const result = await db('votes').select()
  return mapToCamelCase(result)
}

module.exports = {
  getVotes,
}