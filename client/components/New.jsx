import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { populateSession } from '../features/session/sessionSlice'

export default function New () {

  /*
  // There is no side effect for this component
  // What it needs however is a sole dispath - therefore a useDispatch is required
  // This will use the features/session/sessionsSlice.js
  // What we also want is to control the component that we have here
  // -- therefore there will be two controlled components
  // With the button, we would want to use `useNavigate` intead of linking directly
  // therefore there will be an onclick handler on the Button component
  // -- run this on dev:prod for empty database state
  */

  const [nameOfEvent, setNameOfEvent] = useState('')
  const [numFinalIdeas, setNumFinalIdeas] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onClickHandler = () => {
    // this is the one that is going to dispatch, with an executed async thunk in the argument of the dispatch
    /*
    new_session = {
        title: 'string',
        numWinners: int
    }
    */
    const payload = {
      title: nameOfEvent,
      numWinners: Number(numFinalIdeas[0])
    }
    
    // dispatch
    dispatch(populateSession(payload))

    // renavigate
    navigate("/admin/ideas")
  }


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
              value={nameOfEvent}
              onChange={e => setNameOfEvent(e.target.value)}
            />
            <TextField
              sx={{ display: 'flex' }}
              multiline
              rows={1}
              id="outlined-basic"
              label="Number of intended final ideas"
              variant="outlined"
              value={numFinalIdeas}
              onChange={e => setNumFinalIdeas(e.target.value)}              
            />
            {/* <Button component={Link} to="/admin/ideas" variant="outlined">Submit</Button> */}
            <Button onClick={onClickHandler} variant="outlined">Submit</Button>
          </Box>
        </div>
      </div>
    </>
  )
}
