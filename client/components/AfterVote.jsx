import React, { useEffect } from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectAllIdeas,
  fetchIdeas,
  selectVoteReady,
} from '../features/ideas/ideasSlice'
import { fetchSession } from '../features/session/sessionSlice'
import { fetchUsersStatusThunk } from '../features/users/usersSlice'

export default function AfterVote() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsersStatusThunk())
  }, [])

  return (
    <>
      <h1>U4</h1>
      <h2>
        This is the user waiting page after the vote - waiting for all users to
        finish voting
      </h2>
      <Button variant="contained" disabled>
        Proceed to Results
      </Button>{' '}
    </>
  )
}
