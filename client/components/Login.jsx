import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { postUser } from '../features/users/usersSlice'
import { useDispatch } from 'react-redux'
import { newSession } from '../features/session/sessionSlice'
import { textAlign } from '@mui/system'

export default function Login () {
  const navigate = useNavigate()
  const [userName, setUserName] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(newSession())
  }, [])

  const handleChange = (e) => {
    const name = e.target.value
    setUserName(name)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(userName)
    dispatch(postUser(userName))
    navigate('/user/before_vote', { replace: true })
  }
  return (
    <>
      <div className="login-center-div">
        <div className="form-container">
          <h2 style={{ textAlign: 'center', marginLeft: 0 }}>Enter name to sign in</h2>
          <Box
            sx={{
              '& > :not(style)': { width: '25ch' }
            }}
            noValidate
            autoComplete="off"
          >
            <form onSubmit={handleSubmit}>
              <TextField
                sx={{ display: 'flex', my: 2 }}
                id="outlined-basic"
                label="Name"
                variant="outlined"
                name="name"
                onChange={handleChange}
              />
              <Button
                sx={{ width: 292.8 }}
                onClick={handleSubmit}
                type="submit"
                // component={Link}
                // to="/user/before_vote"
                variant="outlined"
              >
                Submit
              </Button>
            </form>
          </Box>
        </div>
      </div>
    </>
  )
}
