/*
This is going to be a bit challenging
-- decl and init three 'batches of votes'
-- we will need to fetch all the users
*/

// need to have G2 (all users) and G7 (all ideas)
import { fetchAllUsers } from "../../users" 
/* Attained Shape
 [
   {
    id, <-- id of the user itself (IMPORTANT)
    name, <--- ignored for our process
   },
   {...}, {...} ....
]
*/
import { fetchAllIdeas } from "../../ideas"
/* Attained Shape
[
  {
    id, <-- id of the idea itself (IMPORTANT)
    owner, <-- ignored for our process
    title, <-- ignored for our process
    description, <-- ignored for our process
    votes, <-- ignored for our process
  },
  {...}, {...} ....
]
*/

// need to be able to P3 (POST votes)
import { postVotesAPI } from "../../ideas"
/* Expected Shape
[
  {
    userId: int,
    ideaId: int,
    freq: int
  }, {....}, {....}
]
*/ 

const DISTRIBUTED_VOTES = [3, 2, 1]
const TIME = 10

export async function mockVotes(durationSeconds = TIME) {
  // this will interact with API (no redux interaction required)
  // between G2 and G7, we will construct artificial votes
  // map to match better mental model shape
  const users = (await fetchAllUsers()).map(u => Object.assign({userId: u.id}))
  // note the {..., freq: 0}!!
  const ideas = (await fetchAllIdeas).map(i => Object.assign({ideaId: i.id, freq: 0}))



  // construct information here,
  /*
  Premise: for each `users`. Distribute DISTRIBUTED_VOTES array
  
  Init a payload object to [] `payload` - we want this to contain 
  [
    [ // <-- this is each user
      {}, {}, {}...
    ],
    [
      {}, {}, {}...
    ]
  ]
  Iterate through `users` @ `u`
  -- decl `localPayload` to []
  -- decl `userId` to u.userId
  -- within iteration, decl and init `randomIndAry` containing `n` number of random indices based off of ideas
  -- -- getRandomInd <- ideas, DISTRIBUTED_VOTES.length
  -- based of `randomIndAry`, we iterate through this to @ `rndElm`, `ind`
  -- -- for each `rndElm`, we access the `ideas` array to get `currIdea`
  -- -- where `currIdea = ideas[rndElm]`
  -- -- then for `currIdea`, we access the `.freq` property containing `0`s
  -- -- then currIdea.freq += DISTRIBUTED_VOTES[ind]
  -- -- then this has constructed a new payload object
  -- -- therefore `localPayload.push(
                    {userId, ideaId: currIdeas.ideaId, freq: currIdeas.freq}
                  )`
  -- -- end iteration
  -- push `localPayload` to `payload` via `payload.push(localPayload)`
  -- end iteration
  
  
  */

  // period of each interval dependent on duration / number of users
  const INTERVAL_PERIOD = Math.floor(
    (durationSeconds / users.length) * 1000
  )

  let intervalId = null


}

function getRandomInds(collection, length) {
  const arry = []
  for (let i = 0; i < length; i += 1) {
    arry.push(Math.floor(Math.random() * collection.length))
  }
  return arry
}
