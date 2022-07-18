import React, { useEffect } from 'react'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { useDispatch, useSelector } from 'react-redux'

import { selectResultsReady, fetchUsersStatus } from '../features/users/usersSlice'

export default function AfterVote () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsersStatus())
  }, [])

  const resultsReady = useSelector(selectResultsReady)
  return (
    <>
      <h1>U4</h1>
      <h2>
        This is the user waiting page after the vote - waiting for all users to
        finish voting
      </h2>
      {!resultsReady && (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      )}
      <Button variant="contained">Reload</Button>
      {/* Better fix the sneaky p tags here */}
      <p></p>
      <Button variant="contained" disabled>
        Proceed to Results
      </Button>{' '}
    </>
  )
}
