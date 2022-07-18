import React, { useEffect } from 'react'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { useDispatch, useSelector } from 'react-redux'

import { selectResultsReady } from '../features/users/usersSlice'
import { fetchAllUsersStatus } from '../apis/users'

export default function AfterVote () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllUsersStatus)
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
      <Button variant="contained" onClick={window.location.reload}>Reload</Button>
      {/* Better fix the sneaky p tags here */}
      <p></p>
      <Button variant="contained" disabled>
        Proceed to Results
      </Button>{' '}
    </>
  )
}
