import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export default function Ideas () {
  return (
    <>
      <div>
        <h1>A2</h1>
        <h2>This the page where the admin enters all the ideas</h2>
      </div>
      <div>
        <Button variant="outlined">Reload</Button>
      </div>
      <div className="name-container"></div>
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
            label="Name of Idea"
            variant="outlined"
          />
          <TextField
            sx={{ display: 'flex' }}
            multiline
            rows={4}
            id="outlined-basic"
            label="Idea description"
            variant="outlined"
          />
          <Button component={Link} to="/admin/ideas" variant="outlined">
            Next Idea 
          </Button>
        </Box>
      </div>
    </>
  )
}
