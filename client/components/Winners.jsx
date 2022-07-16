import React from 'react'
import ResultsTile from './ResultTile'

export default function Winners () {
  const results = [
    {
      id: 1,
      title: '7 Minute Abs',
      description: "7's the key number here. Think about it.",
      votes: 20
    },
    {
      id: 2,
      title: '6 Minute Abs',
      description: 'But what if someone comes up with 6 minute abs.',
      votes: 30
    },
    { id: 3, title: 'Minute Abs', description: 'Abs in a Minute', votes: 40 }
  ]
  return (
    <>
      <h1>U6</h1>
      <h2>This is the user - winners page</h2>

      <div className="tile-container">
        {results.map((result) => {
          return <ResultsTile key={result.id} result={result} />
        })}
      </div>

    </>
  )
}
