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
  return request.get('api/v1/ideas').then((res) => {
    console.log('apiClient fetchAllIdeas response', res)
    return ideas
  })
}
