import request from 'superagent'

const ideas = [
  {
    id: 1,
    title: '7 Minute Abs',
    description: "7's the key number here. Think about it."
  },
  {
    id: 2,
    title: '6 Minute Abs',
    description: 'But what if someone comes up with 6 minute abs.'
  },
  { id: 3, title: 'Minute Abs', description: 'Abs in Minutes' }
]

export function fetchAllIdeas () {
  return request.get('api/v1/ideas').then((res) => {
    console.log('apiClient response', res)
    return ideas
  })
}
