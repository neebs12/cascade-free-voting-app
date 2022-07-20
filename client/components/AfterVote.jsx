import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import {
  selectResultsReady,
  fetchUsersStatus,
} from '../features/users/usersSlice'

export default function AfterVote() {
  const [askingInterval, setAskingInterval] = useState(null)
  const resultsReady = useSelector(selectResultsReady)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsersStatus())

    const intervalId = setInterval(() => {
      dispatch(fetchUsersStatus())
    }, 1000) // 1 sec update

    setAskingInterval(intervalId)
  }, [])

  const handleOnClickProgress = () => {
    if (!resultsReady) {
      return alert('We are still waiting for other users to finish voting!')
    }

    clearInterval(askingInterval)
    setAskingInterval(null)
    navigate('/user/results')
  }

  return (
    <>
      <h1>U4</h1>
      <h2>
        This is the user waiting page after the vote - waiting for all users to
        finish voting
      </h2>
      {!resultsReady && (
        <Box sx={{ my: 5 }}>
          <CircularProgress />
        </Box>
      )}
      {/* tf is this? */}
      {/* <Button variant="contained" onClick={() => window.location.reload()}>Reload</Button> */}
      {/* Better fix the sneaky p tags here */}
      <p></p>
      {/* <Button component={Link} to="/user/results" variant="contained" disabled={resultsReady}>
        Proceed to Results
      </Button>{' '} */}
      <Button variant="contained" onClick={handleOnClickProgress}>
        Proceed to Results
      </Button>{' '}
    </>
  )
}
