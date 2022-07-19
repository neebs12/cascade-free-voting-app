import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { populateSession } from '../features/session/sessionSlice'

export default function New () {

  const [nameOfEvent, setNameOfEvent] = useState('')
  const [numFinalIdeas, setNumFinalIdeas] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onClickHandler = (
    nameOfEvent = nameOfEvent,
    numFinalIdeas = numFinalIdeas
  ) => {
    const myNumWinners = (typeof numFinalIdeas === 'number') 
      ? numFinalIdeas
      : Number(numFinalIdeas[0])

    const payload = {
      title: nameOfEvent,
      numWinners: myNumWinners
    }
    
    // dispatch
    dispatch(populateSession(payload))

    // renavigate
    navigate("/admin/ideas")
  }

  const onClickMock = () => {
    alert('mock: \nname of event: summer jared\nnumber of ideas: 5')
    // setNameOfEvent('summer jared')
    // setNumFinalIdeas(5) // ignoring local state
    onClickHandler('summer jared', 5)
    // setTimeout(onClickHandler, 1000) // 1 sec delay (dangerous code)
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
            <Button onClick={onClickMock} variant="outlined">
              Mock - new idea addition
            </Button>
          </Box>
        </div>
      </div>
    </>
  )
}
