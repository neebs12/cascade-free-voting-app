import request from 'superagent'

export function fetchAllIdeas () {
  // the '../' is required because for some reason I don't understand, the  word 'user' is being prepended to the request url
  return request.get('../api/v1/ideas').then((res) => {
    return res.body
  })
}

// a4-37 fetching winning ideas
// note, appended API due to naming consistencies with redux
export function fetchWinningIdeasAPI () {
  return request.get('/api/v1/ideas/winners').then((res) => {
    return res.body
  })
}

export function postVotesAPI (data) {
  console.log('postVoteAPI data', data)
  
  return request
    .post('/api/v1/votes')
    .send(data)
    // eslint-disable-next-line promise/always-return
    .then((_) => {}) // <--- the server does not send anything back
}
