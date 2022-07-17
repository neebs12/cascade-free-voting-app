import React, { useEffect } from 'react'
import IdeaTile from './IdeaTile'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIdeas, selectAllIdeas } from '../features/ideas/ideasSlice'
import { fetchSession, selectSession } from '../features/session/sessionSlice'

export default function Voting () {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('use effect')
    console.log('fetchSession', fetchSession())
    console.log('fetchIdeas', fetchIdeas())
    dispatch(fetchIdeas())
    dispatch(fetchSession())
  }, [])

  const ideas = useSelector(selectAllIdeas)

  const session = useSelector(selectSession)

  return (
    <>
      {/* <h1>U3</h1>
      <h2>This is the Voting page with the whiteboard</h2> */}
      <div>
        <h3>Votes remaining</h3>
        <h1>4</h1>
        <Button variant="outlined" disabled>
          Submit
        </Button>
        <Button component={Link} to="/user/after_vote" variant="outlined">
          Submit
        </Button>
      </div>
      <div className="tile-container">
        {ideas.map((idea) => {
          return <IdeaTile key={idea.id} idea={idea} />
        })}
      </div>
    </>
  )
}
