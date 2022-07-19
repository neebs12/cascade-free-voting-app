import request from "superagent"
import { postOneUser } from "../users"
/* 
Async simulation of P2
- problem: add `n` amount of users within time `t`

shape of data POSTED:
{
  name: 'string'
}
*/

// users
// information that is posted
export function mockPostUsers(
  names = [
    'jason', 'lachlan', 
    'jared', 'ford', 
    'kotare-fellas', 'lad vibes'
  ], 
  seconds = 30
  ) {

  
  const TIME_OF_EACH_OPERATION = Math.floor(
    (seconds / names.length) * 1000
  )
  
  let intervalId = null
  
  intervalId = setInterval(
    myRequestsCb, TIME_OF_EACH_OPERATION
  )
  
  function myRequestsCb () { // note, use of function for hoisting
    // debugger
    const name = names.shift()
    if (!name) {
      clearInterval(intervalId)
    } else {
      // make a request to the server
      postOneUser(name)
    }
  }
}


