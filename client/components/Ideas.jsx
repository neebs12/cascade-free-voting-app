import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import { selectAllUsers, fetchUsers } from '../features/users/usersSlice'
import { populateIdeas } from '../features/ideas/ideasSlice'

// MOCKS
import { fetchAllUsers } from '../apis/users'
import { mockPostUsers } from '../apis/mock/mocking_users/add-new-users'
import mockbool from '../apis/mock/mockbool'

export default function Ideas() {
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
    }, 3000) // 3000 sec update

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
    if (!(chosenUserName && nameOfIdea && descrOfIdea)) {
      alert('To progress to next idea - please chose \nA user\nName of idea \nAND \nAn idea description')
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
    console.log(theIdeasToBeSent)

    if (theIdeasToBeSent.length === 0) {
      alert('There are NO ideas recorded!, Please enter atleast ONE idea')
      return false
    }

    // this is to include the current ideas page
    if (!chosenUserName || !nameOfIdea || !descrOfIdea) {
      if (
        !confirm(
          'Currently, we are missing either a user, name of idea and/or an idea description, \nDo you want the current entries to be discarded?'
        )
      ) {
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
    navigate('/admin/waiting') // <--- for navigating to next page
  }

  const [isMocked, setIsMocked] = useState(false)
  const handleMockNames = () => {
    if (isMocked) {
      return console.log('already mocked, cannot execute again')
    }
    console.log('is mocking')
    mockPostUsers(
      ['jason', 'graeme', 'jared', 'kotare', 'emily', 'kelly', 'joseph'],
      5
    )
    setIsMocked(true)
  }
  const handleMockIdeas = async () => {
    // YES when sending ideas, the userName IS ignored by backend
    if (
      !confirm(
        'WARNING: has the mock names completed? If so, press OK, if not press CANCEL and try again'
      )
    ) {
      return false
    }

    const users = await fetchAllUsers()
    const theIdeasToBeSent = users.map((u, ind) => {
      const userId = u.id
      const userName = u.name
      return {
        userId,
        userName,
        title: `title: ${userName}`,
        description: `description: name - ${userName}, id - ${userId}, index - ${ind}`,
      }
    })
    dispatch(populateIdeas(theIdeasToBeSent))
    clearInterval(askingInterval)
    setAskingInterval(null)

    alert('mock ideas successfully sent!')

    navigate('/admin/waiting') // <--- for navigating to next page
  }



  return (
    <>
      <div className="ideas-center-div-row">
        <div className="name-container">
          <h3>Who is proposing the  idea?</h3>

          {(users.length || null) &&
            users.map((user) => {
              const selectedButton = user.name === chosenUserName
              return (
                <React.Fragment key={user.id}>
                  <Button
                    // style={{ backgroundColor: 'transparent' }}
                    sx={{
                      '&:hover': {
                        color: 'white',
                        backgroundColor: '#ab47bc'},
                      display: 'flex',
                      my: 1,
                      borderColor: selectedButton ? 'white' : '#ab47bc',
                      backgroundColor: selectedButton ? '#ab47bc' : 'white',
                      color: selectedButton ? 'white' : '#ab47bc' 
                    }}
                    variant="outlined"
                    onClick={handleChosenUserClicked(user.id, user.name)}
                  >
                    {user.name}
                  </Button>

                </React.Fragment>
              )
            })}
        </div>

        <div className="ideas-vote-center-div-col">
          <Box
            component="form"
            sx={{
              '& > :not(style)': { width: '25ch' },
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
              onChange={(e) => setNameOfIdea(e.target.value)}
              disabled={chosenUserName === ''}
            />
            <TextField
              sx={{ display: 'flex', my: 2 }}
              multiline
              rows={4}
              id="outlined-basic"
              label="Idea description"
              variant="outlined"
              value={descrOfIdea}
              onChange={(e) => setDescrOfIdea(e.target.value)}
              disabled={chosenUserName === ''}
            />
          </Box>
          <Button
            sx={{ width: 292.8 }}
            onClick={handleOnClickNextIdea}
            variant="outlined"
          >
            Next idea
          </Button>
          <Button
            sx={{ width: 292.8, my: 2 }}
            onClick={handleOnClickLink}
            variant="outlined"
            disabled={Boolean(myIdeas.current.length === 0)}
          >
            Ready to vote
          </Button>
        </div>
      </div>
      {mockbool && (
        <>
          <Button onClick={handleMockNames} variant="outlined">
            Mock - user name addition
          </Button>
          <Button onClick={handleMockIdeas} variant="outlined">
            Mock - ideas addition
          </Button>
        </>
      )}
    </>
  )
}
