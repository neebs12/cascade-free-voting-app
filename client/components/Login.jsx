import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { postUser } from '../features/users/usersSlice'
import { useDispatch } from 'react-redux'
import { newSession } from '../features/session/sessionSlice'

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
      <div className="login_center_div">
        <div className="form_container">
          <h2>Enter your name to sign up </h2>
          <Box
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' }
            }}
            noValidate
            autoComplete="off"
          >
            <form onSubmit={handleSubmit}>
              <TextField
                sx={{ display: 'flex' }}
                id="outlined-basic"
                label="Name"
                variant="outlined"
                name="name"
                onChange={handleChange}
              />
              {/* <TextField
              sx={{ display: 'flex' }}
              multiline
              rows={4}
              maxRows={4}
              id="outlined-basic"
              label="Idea"
              variant="outlined"
            /> */}
              <Button
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
