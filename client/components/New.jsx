import React from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

export default function New () {

  

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
