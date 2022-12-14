import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { populateSession } from '../features/session/sessionSlice'
import { resetCurrentSession } from '../apis/session'

import mockbool from '../apis/mock/mockbool'

export default function New () {
  const [nameOfEvent, setNameOfEvent] = useState('')
  const [numFinalIdeas, setNumFinalIdeas] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onClickHandler = (nameOfEventParam, numFinalIdeasParam) => {
    // NOTE: remember the event object!
    if (
      // form validation
      !mockbool &&
      !(nameOfEvent && numFinalIdeas) &&
      (Number(numFinalIdeas) === 0 || Number.isNaN(Number(numFinalIdeas)))
    ) {
      // if we are not mocking, form needs to be validated accordingly
      return alert(
        'Please enter a valid: name of event AND number of final ideas'
      )
    }

    nameOfEventParam =
      typeof nameOfEventParam === 'object' ? undefined : nameOfEventParam

    const payload = {
      title: nameOfEventParam || nameOfEvent,
      numWinners: numFinalIdeasParam || numFinalIdeas
    }

    // dispatch
    dispatch(populateSession(payload))

    // renavigate
    navigate('/admin/ideas')
  }

  const onClickHandlerReset = async () => {
    await resetCurrentSession()
    alert('The current session has been reset! You can now start adding users')
  }

  // MOCK CODE
  const onClickMock = () => {
    const name = 'summer jared'
    const number = 5
    alert(`mock: \nname of event: ${name}\nnumber of ideas: ${number}`)

    onClickHandler(name, number)
  }

  return (
    <>
      {/* <h1>A1</h1>
      <h2>This is the Admin - New page</h2> */}
      <div className="admin-new-center-div">
        <div className="form-container">
          <TextField
            sx={{ display: 'flex' }}
            id="outlined-basic"
            label="Name of Event"
            variant="outlined"
            value={nameOfEvent}
            onChange={(e) => setNameOfEvent(e.target.value)}
          />
          <TextField
            sx={{ display: 'flex', my: 2 }}
            multiline
            rows={1}
            id="outlined-basic"
            label="Number of intended final ideas"
            variant="outlined"
            value={numFinalIdeas}
            onChange={(e) => setNumFinalIdeas(Number(e.target.value[0]) || '')}
          />
          {/* <Button component={Link} to="/admin/ideas" variant="outlined">Submit</Button> */}
          <Button
            sx={{ width: 292.8 }}
            onClick={onClickHandler}
            variant="outlined"
          >
            Submit
          </Button>
          <Button
            sx={{ width: 292.8, my: 2 }}
            onClick={onClickHandlerReset}
            variant="outlined"
          >
            Reset Database
          </Button>
          {mockbool && (
            <Button onClick={onClickMock} variant="outlined">
              Mock - new idea addition
            </Button>
          )}
        </div>
      </div>
    </>
  )
}
