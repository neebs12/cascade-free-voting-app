import React, { useEffect } from 'react'
import ResultsTile from './ResultTile'
import WinningResultsTile from './WinningResultsTile'

export default function AdminResults () {
  const ideas = [
    {
      id: 1,
      owner: 'Batman',
      title: 'The Dark Idea',
      description: 'Clean up Gotham',
      votes: 2
    },
    {
      id: 2,
      owner: 'Superman',
      title: 'The Super Idea',
      description: 'Clean up Metropolis',
      votes: 4
    },
    {
      id: 3,
      owner: 'Flash',
      title: 'The Fast Idea',
      description: 'Clean up Central City',
      votes: 6
    }
  ] 

  return (
    <>
      <h1>A4</h1>
      <h2>This is the page showing the results for the admin to see</h2>
      <div className="tile-container">
        {ideas.map((result) => {
          return <WinningResultsTile key={result.id} result={result} />
        })}
      </div>
    </>
  )
}
