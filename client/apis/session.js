import request from 'superagent'


//Pretty sure the fetchCurrentSession function below can be deleted
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
    // eslint-disable-next-line promise/always-return
    .then(_ => {}) // <--- the server does not send anything back
}

export function resetCurrentSession() {
  return request.delete('/api/v1/sessions/reset')
    .then(_ => {}) // <--- no useful return
}