import request from 'superagent'

export function makeNewSession () {
  return request.post('../api/v1/users').then(res => {
    console.log('new Session body: ', res.body)
    return res.body
  })
}

export function fetchCurrentSession () {
  return request.get('../api/v1/sessions').then((res) => {
    // Code below is hard coding an extra key/value pair that can be handled on backend
    res.body[0].votesLeft = 0
    res.body[0].numVotes = 5
    return res.body
  })
}

export function postCurrentSession (data) {
  return request.post('/api/v1/sessions')
    .send(data)
    .then(_ => {}) // <--- the server does not send anything back
}
