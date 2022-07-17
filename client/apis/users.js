import request from 'superagent'

const users = [1, 2, 3]
// {
//   title: 'Voting Session Title',
//   num_winners: 5,
//   num_votes: 5
// }

export function fetchCurrentUsers () {
  return request.get('api/v1/users').then((res) => {
    return users
  })
}
