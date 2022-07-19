import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import { selectAllUsers, fetchUsers } from '../features/users/usersSlice'
import { populateIdeas } from '../features/ideas/ideasSlice'

import { mockPostUsers } from '../apis/mock/add-new-users' 

export default function Ideas () {
  const [askingInterval, setAskingInterval] = useState(null)
  const [nameOfIdea, setNameOfIdea] = useState('')
  const [descrOfIdea, setDescrOfIdea] = useState('')
  const [chosenUserId, setChosenUserId] = useState(0)
  const [chosenUserName, setChosenUserName] = useState('')

  const myIdeas = useRef([])
  // becomes {current: []} at the start

  const users = useSelector(selectAllUsers)
  
  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(() => {
    dispatch(fetchUsers())
    // set the asking interval here
    
    const intervalId = setInterval(() => {
      // console.log('getting new users!')
      dispatch(fetchUsers())
    }, 1000) // updates every 1 sec

    setAskingInterval(intervalId)
  }, [])

  // is PFA
  const handleChosenUserClicked = (id, name) => {
    return () => {
      // this is where we set the values accordingly
      console.log(`Clicked on name: ${name} of id: ${id}`)
      setChosenUserId(Number(id))
      setChosenUserName(name)
    }
  }

  const handleOnClickNextIdea = () => {
    // what is the shape fitting?
    /*
    -- this is the required shape of the idea 
    ideas = [
      <-- see associations
      {
        userId: int, <-- chosenUserId
        userName: 'string', <-- chosenUserName
        title: 'string', <-- nameOfIdea
        description: 'string' <-- descrOfIdea
      }, {...}, ... 
    ]
    */
   // if any are empty, unable to move on
    if ( !(chosenUserName && nameOfIdea && descrOfIdea) ) {
      alert('Please chose a user, name of idea and an idea description')
      return false
    }

    // therefore ...
    const payloadIdea = {
      userId: chosenUserId, 
      userName: chosenUserName,
      title: nameOfIdea,
      description: descrOfIdea,
    }

    // then we push this to .current of the ref's object `myIdeas`
    myIdeas.current.push(payloadIdea)

    // then clear all the relevant states
    setNameOfIdea('')
    setDescrOfIdea('')
    setChosenUserId(0)
    setChosenUserName('')
  }


  const handleOnClickLink = () => {
    // clears the interval (no longer asking for new updates)
    // here, we (1)POST to database and (2)DELTA the redux state of the Ideas state
    // . Here, we use the ref object `myIdeas.current` that is an array, that will become the data for the POST of the async thunk

    // console.log('going to the database!')
    const theIdeasToBeSent = myIdeas.current

    if (theIdeasToBeSent.length === 0) {
      alert("There are NO ideas recorded!, Please enter atleast ONE idea")
      return false
    }

    // this is to include the current ideas page
    if ( (!chosenUserName || !nameOfIdea || !descrOfIdea)) {
      if (!confirm('Currently, we are missing either a user, name of idea and/or an idea description, do you want the current entries to be discarded and send information to the server?')) {
        return false
      }
    } else {
      // include current entries (as they are valid)
      theIdeasToBeSent.push({
        userId: chosenUserId, 
        userName: chosenUserName,
        title: nameOfIdea,
        description: descrOfIdea,        
      })
    }

    dispatch(populateIdeas(theIdeasToBeSent))
    clearInterval(askingInterval)
    setAskingInterval(null)
    navigate("/admin/waiting") // <--- for navigating to next page
  }


  const [isMocked, setIsMocked] = useState(false)
  const handleMock = () => {
    if (isMocked) {
      return console.log('already mocked, cannot execute again')
    }
    console.log('is mocking')
    mockPostUsers()
    setIsMocked(true)
  }

  return (
    <>
      <div>
        <h1>A2</h1>
        <h2>This the page where the admin enters all the ideas</h2>
      </div>
      <h3>Here are a list of names</h3>
      <div className="name-container">
        {(users.length || null) && users.map(user => {
          return <Button 
            key={user.id} 
            variant="outlined"
            onClick={handleChosenUserClicked(user.id, user.name)}
          >
            {user.name}
          </Button>
        })
        }
      </div> <br />
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
            disabled={chosenUserName === ''}
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
            disabled={chosenUserName === ''}
          />
          <Button 
            onClick={handleOnClickNextIdea} 
            variant="outlined"
          >
            Next idea
          </Button>
          <Button onClick={handleOnClickLink} variant="outlined">
            All ideas submitted - ready to vote
          </Button>
          <Button onClick={handleMock} to="/admin/waiting" variant="outlined">
            Mock
          </Button>          
        </Box>
      </div>
    </>
  )
}