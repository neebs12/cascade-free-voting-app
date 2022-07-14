import React from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

export default function Login () {
  return (
    <>
      <div className="login_center_div">
        <div className="form_container">
          <h2>User</h2>
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
              label="Name"
              variant="outlined"
            />
            <TextField
              sx={{ display: 'flex', height: '200px' }}
              multiline
              rows={4}
              maxRows={4}
              id="outlined-basic"
              label="Idea"
              variant="outlined"
            />
          </Box>
        </div>
      </div>
      <div>
        <h2>User v2</h2>
      </div>
    </>
  )
}
