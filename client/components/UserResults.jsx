import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import ResultsTile from './ResultTile'

export default function UserResults () {
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
      <h1>U5</h1>
      <h2>This is the user results page</h2>
      <div>
        <p></p>
        <p></p>
        <Button component={Link} to="/user/winners" variant="outlined">
          View winners
        </Button>
      </div>

      <div className="tile-container">
        {results.map((result) => {
          return <ResultsTile key={result.id} result={result} />
        })}
      </div>
    </>
  )
}
