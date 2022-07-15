import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

export default function BeforeVote () {
  return (
    <>
      {/* <h1>U2</h1> */}
      <h2>Hi User, we are waiting for voting to Start</h2>
      <Button variant="contained" disabled>
        Proceed to Voting
      </Button>{' '}
      <Button component={Link} to="/user/voting" variant="outlined">
      Proceed to Voting
      </Button>
    </>
  )
}
