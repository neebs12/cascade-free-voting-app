import React from 'react'
import IdeaTile from './IdeaTile'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

export default function Voting () {
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
    { id: 3, title: 'Minute Abs', description: 'Abs in a Minute' }
  ]
  return (
    <>
      {/* <h1>U3</h1>
      <h2>This is the Voting page with the whiteboard</h2> */}
      <div>
        <h3>Votes remaining</h3>
        <h1>4</h1>
        <Button variant="outlined" disabled>
          Submit
        </Button>
        <Button component={Link} to="/user/after_vote" variant="outlined">
          Submit
        </Button>
      </div>
      <div className="tile-container">
        {ideas.map((idea) => {
          return <IdeaTile key={idea.id} idea={idea} />
        })}
      </div>
    </>
  )
}
