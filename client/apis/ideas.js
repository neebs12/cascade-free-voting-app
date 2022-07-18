import request from 'superagent'

export function fetchAllIdeas () {
  // the '../' is required because for some reason I don't understand, the  word 'user' is being prepended to the request url
  return request.get('../api/v1/ideas').then((res) => {
    return res.body
  })
}
