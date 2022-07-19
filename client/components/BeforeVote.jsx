import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import { Link, useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { useSelector, useDispatch } from 'react-redux'
import { fetchIdeas, selectVoteReady } from '../features/ideas/ideasSlice'
import { fetchSession } from '../features/session/sessionSlice'

export default function BeforeVote () {
  const [askingInterval, setAskingInterval] = useState(null)
  const voteReady = useSelector(selectVoteReady)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchIdeas())
    dispatch(fetchSession())

    const intervalId = setInterval(() => {
      dispatch(fetchIdeas())
      dispatch(fetchSession())
    }, 1000) // updates every 1 second

    setAskingInterval(intervalId)    
  }, [])

  useEffect(() => {
    // terminate the intervaled request here
    // assuming is initially false, therefore will be switched to true and this useEffect is first executed
    if (askingInterval) {
      // only executes if this is true
      clearInterval(askingInterval)
      setAskingInterval(null)
    }
  }, [voteReady]) // <--- is boolean therefore safe

  const handleClick = () => {
    navigate('/user/voting', { replace: true })
  }

  

  return (
    <>
      <div className='before-vote-center-div-col'>
        {/* <h1>U2</h1> */}
        <h2 style={{ margin: 30 }}>Hi User, we are waiting for voting to Start</h2>
        {!voteReady && (
          <Box sx={{ my: 5 }}>
            <CircularProgress />
          </Box>
        )}
        {/* <Button variant="contained">Reload</Button> */}
        {/* Better fix the sneaky p tags here */}
        <p></p>
        <Button variant="contained" disabled={!voteReady} onClick={handleClick}>
          Proceed to Voting
        </Button>
      </div>
    </>
  )
}

// export default function CircularIndeterminate() {
//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CircularProgress />
//     </Box>
//   );
// }
