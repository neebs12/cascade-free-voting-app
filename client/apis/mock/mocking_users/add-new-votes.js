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

const FIRST_VOTE = 3
const SECOND_VOTE = 2
const THIRD_VOTE = 1

export async function mockVotes() {
  // this will interact with API (no redux interaction required)
  // between G2 and G7, we will construct artificial votes
  // map to match better mental model shape
  const users = (await fetchAllUsers()).map(u => Object.assign({userId: u.id}))
  const ideas = (await fetchAllIdeas).map(i => Object.assign({ideaId: i.id}))

  // construct information here,
  /*
  
  */

}

