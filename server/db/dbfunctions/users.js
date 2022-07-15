const connection = require('../connection')

const dbGenericFns = require('./db')
const {mapToCamelCase, mapToSnakeCase} = require('./dbHelper') 

// CUSTOM
async function getUsersByVotedStatus(voteStatus, db = connection) {
  return await db('users')
    .select()
    .where('voted', voteStatus)
    .then(result => mapToCamelCase(result))
}

async function updateUserVoteStatusById(id, voteStatus, db = connection) {
  return dbGenericFns.updateByTableNameAndId('users', id, {voted: voteStatus})
}

async function updateUsersVotedStatus(db = connection) {
  // gets all the records from `votes` entity
  // gets an array of user ids from the `votes` entity (sets to unique)
  // gets all users with voted false -> then their id automatically
  // filters all false voted users, with existing voters
  // flips all users that are currently false but have voted to true! <-- via mapP

  // get all the information from `votes` entity
  const result = await dbGenericFns.getByTableName('votes')
  // [{id(int), freq(int), userId(int), ideaId(int)}, ...]
  // get an array of userIds, then set it to Set
  const votedUserIds = Array.from(new Set(result.map(r => r.userId)))
  // based on unique user ids, set the `voted` status to true based on the uniqueUserIds
  // since this is an update of multiple, need to use Promise.allResolved

  // get all false `voted` users first
  const falseUsersIds = (await getUsersByVotedStatus(false)).map(f => f.id)

  const userIdsToBeUpdatedToTrue = falseUsersIds.filter(fId => 
    votedUserIds.includes(fId)
  )

  const mapP = userIdsToBeUpdatedToTrue.map(uId => {
    return updateUserVoteStatusById(uId, true)
  })

  await Promise.allSettled(mapP)
}

module.exports = {
  updateUsersVotedStatus,
  getUsersByVotedStatus,
}