const connection = require('../connection')

const dbGenericFns = require('./db')
const {mapToCamelCase, mapToSnakeCase} = require('./dbHelper') 

async function getVotes(db = connection) {
  // get all ideas
  // a join between `users` and `votes`
  const result = await db('votes').select()
  return mapToCamelCase(result)
}

async function addVotes(data, db = connection) {
  // typical knex return is an array of ids of the records that have been added to the specific entity
  data = mapToSnakeCase(data)
  return await db('votes').insert(data)
} 

module.exports = {
  getVotes,
  addVotes
}