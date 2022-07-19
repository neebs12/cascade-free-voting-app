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
export function mockPostUsers() {
  const NAMES = ['jason', 'lachlan', 'jared', 'ford', 'kotare-fellas', 'lad vibes']
  // changing shape of information
  // const USERS = NAMES.map(n => Object.assign({name: n}))
  
  // TIME
  const TOTAL_TIME_SECONDS = 30
  
  const TIME_OF_EACH_OPERATION = Math.floor(
    (TOTAL_TIME_SECONDS / NAMES.length) * 1000
  )
  
  let intervalId = null
  debugger
  intervalId = setInterval(
    myRequestsCb, TIME_OF_EACH_OPERATION
  )
  
  function myRequestsCb () { // note, use of function for hoisting
    debugger
    const name = NAMES.shift()
    if (!name) {
      clearInterval(intervalId)
    } else {
      // make a request to the server
      postOneUser(name)
      // request.post('/api/v1/users')
      //   .send(data)
      //   .then(res => res.body)
      //   .catch(err => console.error(err))
    }
  }
}


