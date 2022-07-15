const connection = require('../connection')

const dbGenericFns = require('./db')
const dbVotes = require('./votes')
const {mapToCamelCase, mapToSnakeCase} = require('./dbHelper') 

async function getIdeasWithOwners(db = connection) {
  // here, we will get all ideas with the owners
  const result = await db('users')
    .join('ideas', 'users.id', '=', 'ideas.user_id')
    .select(
      'ideas.id as id', // id comes from ideas table
      'ideas.title as title', 
      'ideas.description as description',
      'users.name as owner' // owner is the joined table
    )

  return mapToCamelCase(result)
}

async function getIdeasWithOwnerAndVotes(db = connection) {
  // we get the `ideas` with owners
  // `ideas` = [{id, title, description, owner}, {...}, ...]
  // -- iterate over `ideas` via forEach
  // -- with each `ideaRecord`, create a "votes" property starting w 0(int) 
  // then we get the records from the `votes` entity
  // `votes` = [{id, freq, user_id, idea_id}, {...}, ...]
  // we iterate through `votes` via forEach (- voteRecord)
  // -- for each `voteRecord`
  // -- -- assign the `freq` property to const `freq`
  // -- -- assign the `idea_id` property to const `ideaId`
  // -- based on the `ideaId`, .find with `ideas` to find relevant `ideaRecord`
  // -- then for the found `ideaRecord`, simply ideaRecord.votes += freq
  /* then we finally have:
  {
    id, 
    title, description, owner,
    votes,
  }
  */
  
  const ideas = await getIdeasWithOwners()
  ideas.forEach(ideaRecord => ideaRecord.votes = 0)
  console.log(ideas)

  const votes = await dbVotes.getVotes()
  votes.forEach(voteRecord => {
    const freq = voteRecord.freq
    const ideaId = voteRecord.ideaId
    const relevantIdea = ideas.find(ideaRecord => {
      console.log(ideaRecord.id, ideaId)
      return ideaRecord.id === ideaId
    })
    relevantIdea.votes += freq
  })

  return ideas

}

module.exports = {
  getIdeasWithOwners,
  getIdeasWithOwnerAndVotes,
}
