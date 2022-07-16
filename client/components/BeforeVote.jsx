import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

export default function BeforeVote () {
  return (
    <>
      {/* <h1>U2</h1> */}
      <h2>Hi User, we are waiting for voting to Start</h2>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
      <Button variant="contained" disabled>
        Proceed to Voting
      </Button>

      <Button component={Link} to="/user/voting" variant="outlined">
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
