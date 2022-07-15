import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import ResultsTile from './ResultTile'

export default function UserResults () {
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
  return (
    <>
      <h1>U5</h1>
      <h2>This is the user results page</h2>
      
      <div className="tile-container">
        {ideas.map((idea) => {
          return <ResultsTile key={idea.id} idea={idea} />
        })}
      </div>
    </>
  )
}
