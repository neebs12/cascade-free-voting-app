import request from 'superagent'

const session = [1, 2, 3]
// {
//   title: 'Voting Session Title',
//   num_winners: 5,
//   num_votes: 5
// }

export function fetchCurrentSession () {
  return request.get('api/v1/sessions').then((res) => {
    console.log('session apiClient response', res)
    return session
  })
}
