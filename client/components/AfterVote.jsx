import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
  selectResultsReady,
  fetchUsersStatus
} from '../features/users/usersSlice'

export default function AfterVote () {
  const [askingInterval, setAskingInterval] = useState(null)
  const resultsReady = useSelector(selectResultsReady)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsersStatus())

    const intervalId = setInterval(() => {
      dispatch(fetchUsersStatus())
    }, 3000) // 3 sec update

    setAskingInterval(intervalId)
  }, [])

  const handleOnClickProgress = () => {
    if (!resultsReady) {
      return alert('Hang tight! Other users are still voting!')
    }

    clearInterval(askingInterval)
    setAskingInterval(null)
    navigate('/user/results')
  }

  return (
    <>
      {/* <h1>U4</h1> */}
      <div className='before-vote-center-div-col'>
        <h2>
           Currently waiting for all users to finish voting
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
        <Button variant="contained" disabled={!resultsReady} onClick={handleOnClickProgress}>
          Proceed to Results
        </Button>
      </div>
    </>
  )
}
