import React, { useEffect } from 'react'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  selectResultsReady,
  fetchUsersStatus
} from '../features/users/usersSlice'

export default function AfterVote () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsersStatus())
  }, [])

  const resultsReady = useSelector(selectResultsReady)
  return (
    <>
      <div className="before-vote-center-div-col">
        {/* <h1>U4</h1> */}
        <h2>
         Please wait for all users to finish voting
        </h2>
        {resultsReady && (
          <Box sx={{ my: 5 }}>
            <CircularProgress />
          </Box>
        )}
        <Button variant="contained" onClick={() => window.location.reload()}>
          Reload
        </Button>
        {/* Better fix the sneaky p tags here */}
        <p></p>
        <Button
          component={Link}
          to="/user/results"
          variant="contained"
          disabled={resultsReady}
        >
          Proceed to Results
        </Button>{' '}
      </div>
    </>
  )
}
