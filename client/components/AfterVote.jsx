import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

export default function AfterVote () {
  return (
    <>
      <h1>U4</h1>
      <h2>This is the user waiting page after the vote - waiting for all users to finish voting</h2>
      <Button variant="contained" disabled>
        Proceed to Results
      </Button>{' '}
      <Button component={Link} to="/user/results" variant="outlined">
      Proceed to Results
      </Button>
    </>
  )
}
