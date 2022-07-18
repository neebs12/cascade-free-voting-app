import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { ButtonUnstyled, buttonUnstyledClasses } from '@mui/base';

export default function Landing () {
  return (
    <>
      {/* <h1>AU1</h1>
      <h2>This is the Landing page</h2> */}
      <div className="login-center-div-row">
        <Button component={Link} to="/admin/new"
          variant="outlined"
          sx={{ width: 300, height: 100, fontSize: 36, margin: 5 }}
        >
          ADMIN
        </Button>
        <Button component={Link} to="/user/login"
          variant="contained"
          sx={{ width: 300, height: 100, fontSize: 36, margin: 5 }}
        >
          USER
        </Button>
      </div>
    </>
  )
}
