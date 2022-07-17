import request from 'superagent'

export function fetchUsersStatus () {
  // GET HELP WITH THE ERROR BELOW
  return request.get('../api/v1/users/status').then((res) => {
    return res.body
  })
}
