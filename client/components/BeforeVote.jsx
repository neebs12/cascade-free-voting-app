import React, { useEffect } from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllIdeas, fetchIdeas, selectVoteReady } from '../features/ideas/ideasSlice'
import { fetchSession } from '../features/session/sessionSlice'

export default function BeforeVote () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchIdeas())
    dispatch(fetchSession())
  }, [])

  const voteReady = useSelector(selectVoteReady)


  return (
    <>
      {/* <h1>U2</h1> */}
      <h2>Hi User, we are waiting for voting to Start</h2>
      {!voteReady && <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>}
      <Button variant="contained">Reload</Button>
      <Button variant="contained" disabled={!voteReady}>
        Proceed to Voting
      </Button>
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
