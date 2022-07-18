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
  console.log(nameObj)
  return request
    .post('../api/v1/users')
    .send(nameObj)
    .then(res => {
      console.log(res.body)
      return res.body
    }).catch(err => console.log(err))
}

// export function addPost (post) {
//   // convert the large paragraphs string into an array of paragraphs
//   post.paragraphs = post.paragraphs.split('\n')
//   return request
//     .post('/v1/posts')
//     .send(post)
//     .then((res) => {
//       validateNoSnakeCase(res.body)
//       validatePostResponse('POST', 'v1/posts', res.body)
//       return res.body
//     })
//     .catch(errorHandler('POST', '/v1/posts'))
// }
