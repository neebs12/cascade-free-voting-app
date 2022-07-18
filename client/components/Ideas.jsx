import React, { useEffect } from 'react'
import { selectAllIdeas, fetchIdeas } from '../features/ideas/ideasSlice'
import { selectAllUsers, fetchUsers } from '../features/users/usersSlice'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export default function Ideas () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchIdeas())
    dispatch(fetchUsers())
  }, [])

  const ideas = useSelector(selectAllIdeas)
  const users = useSelector(selectAllUsers)
  console.log(users)
  return (
    <>
      <div>
        <h1>A2</h1>
        <h2>This the page where the admin enters all the ideas</h2>
      </div>
      <h3>Here are a list of names</h3>
      <div className="name-container">
        {/* {typeof users
        users.map((name) => {
          return <Button key={name.id}variant="outlined">{name.name}</Button>
          return <IdeaTile key={idea.id} idea={idea} />
        })
        } */}
      </div>
      <div>
        <Button variant="outlined">Reload</Button>
      </div>
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
          <Button variant="outlined">
            Next idea
          </Button>
          <Button component={Link} to="/admin/waiting" variant="outlined">
            All ideas submitted - ready to vote
          </Button>
        </Box>
      </div>
    </>
  )
}
