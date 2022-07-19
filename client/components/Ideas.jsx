import React, { useState, useEffect } from 'react'
import { selectAllUsers, fetchUsers } from '../features/users/usersSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

export default function Ideas () {
  const [askingInterval, setAskingInterval] = useState(null)
  const [nameOfIdea, setNameOfIdea] = useState('')
  const [descrOfIdea, setDescrOfIdea] = useState('')
  const myIdeas = useRef([])
  // becomes {current: []} at the start

  const users = useSelector(selectAllUsers)
  
  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(() => {
    dispatch(fetchUsers())
    // set the asking interval here
    
    const intervalId = setInterval(() => {
      console.log('getting new users!')
      dispatch(fetchUsers())
    }, 1000) // updates every 1 sec

    setAskingInterval(intervalId)
  }, [])

  const handleOnClickNextIdea = () => {
    // this is where the ideas are stored (in the ref) `myIdeas`
    // this is where we reset the states of `nameOfIdea` and `descrOfIdea`
    // -- this will be done via setNameOfIdea('') && setDescrOfIdea('')
    // therefore, we can do this one easily!
    // what is the shape fitting?

    
  }


  const handleOnClickLink = () => {
    // clears the interval (no longer asking for new updates)
    // here, we (1)POST to database and (2)DELTA the redux state of the Ideas state
    // . Here, we use the ref object `myIdeas.current` that is an array, that will become the data for the POST of the async thunk

    clearInterval(askingInterval)
    setAskingInterval(null)
    // navigate("/admin/waiting") // <--- for navigating to next page
  }

  return (
    <>
      <div>
        <h1>A2</h1>
        <h2>This the page where the admin enters all the ideas</h2>
      </div>
      <h3>Here are a list of names</h3>
      <div className="name-container">
        {users.length && users.map((name) => {
          return <Button key={name.id} variant="outlined">{name.name}</Button>
        })
        }
      </div>
      {/* <div>
        <Button onClick={handleOnClickUsers} variant="outlined">Reload</Button>
      </div> */}
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
            value={nameOfIdea}
            onChange={e => setNameOfIdea(e.target.value)}
          />
          <TextField
            sx={{ display: 'flex' }}
            multiline
            rows={4}
            id="outlined-basic"
            label="Idea description"
            variant="outlined"
            value={descrOfIdea}
            onChange={e => setDescrOfIdea(e.target.value)}
          />
          <Button onClick={handleOnClickNextIdea} variant="outlined">
            Next idea
          </Button>
          {/* <Button component={Link} to="/admin/waiting" variant="outlined">
            All ideas submitted - ready to vote
          </Button> */}
          <Button onClick={handleOnClickLink} to="/admin/waiting" variant="outlined">
            All ideas submitted - ready to vote
          </Button>
        </Box>
      </div>
    </>
  )
}
