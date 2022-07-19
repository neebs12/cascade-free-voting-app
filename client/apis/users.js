import request from 'superagent'

export function fetchAllUsersStatus () {
  // GET HELP WITH THE ERROR BELOW
  return request.get('../api/v1/users/status').then((res) => {
    return res.body
  })
}

export function fetchAllUsers () {
  // GET HELP WITH THE ERROR BELOW
  return request.get('../api/v1/users').then((res) => {
    return res.body
  })
}

export function postOneUser (userName) {
  const nameObj = { name: userName }
  return request
    .post('../api/v1/users')
    .send(nameObj)
    .then(res => {
      return res.body
    }).catch(err => console.log(err))
}