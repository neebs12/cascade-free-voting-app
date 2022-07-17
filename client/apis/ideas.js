import request from 'superagent'

const ideas = [
  {
    id: 1,
    owner: 'Hitch',
    title: '7 Minute Abs',
    description: "7's the key number here. Think about it.",
    votes: 0

  },
  {
    id: 2,
    owner: 'Ben',
    title: '6 Minute Abs',
    description: 'But what if someone comes up with 6 minute abs.',
    votes: 3
  },
  {
    id: 3,
    owner: 'Graeme',
    title: 'Minute Abs',
    description: 'Abs in a Minute',
    votes: 0
  }
]

export function fetchAllIdeas () {
  //the '../' is required because for some reason I don't understand, the  word 'user' is being prepended to the request url
  return request.get('../api/v1/ideas').then((res) => {
  return res.body
  })
}
