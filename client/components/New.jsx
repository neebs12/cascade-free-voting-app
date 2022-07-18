import React from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

export default function New () {

  /*
  // There is no side effect for this component
  // What it needs however is a sole dispath - therefore a useDispatch is required
  // This will use the features/session/sessionsSlice.js
  // What we also want is to control the component that we have here
  */

  return (
    <>
      {/* <h1>A1</h1>
      <h2>This is the Admin - New page</h2> */}
      <div className="admin-new-center-div">
        <div className="form_container">
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' }
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              sx={{ display: 'flex' }}
              id="outlined-basic"
              label="Name of Event"
              variant="outlined"
            />
            <TextField
              sx={{ display: 'flex' }}
              multiline
              rows={1}
              id="outlined-basic"
              label="Number of intended final ideas"
              variant="outlined"
            />
            <Button component={Link} to="/admin/ideas" variant="outlined">Submit</Button>
          </Box>
        </div>
      </div>
    </>
  )
}
