import React, { useEffect } from 'react'
import IdeaTile from './IdeaTile'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchIdeasMyVotes,
  selectAllIdeas,
  selectVoteCount,
  selectVoteArr,
  postVotes
} from '../features/ideas/ideasSlice'
import { fetchSession, selectNumVotes } from '../features/session/sessionSlice'
import Tile from './Tile'

export default function Voting () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchIdeasMyVotes())
    dispatch(fetchSession())
  }, [])

  // The number of votes should be calculated by a formula when the ideas are submitted and the result saved to the session database record.
  // Hard coded in the slice for now
  const numVotes = useSelector(selectNumVotes)
  const voteCount = useSelector(selectVoteCount)
  const ideas = useSelector(selectAllIdeas)
  const voteArr = useSelector(selectVoteArr)

  return (
    <>
      <div>
        <h3>Votes total: {numVotes} </h3>
        <h3>Votes remaining</h3>
        <h1>{numVotes - voteCount}</h1>
        <Button
          onClick={() => {
            dispatch(postVotes(voteArr))
          }}
          component={Link}
          to="/user/after_vote"
          variant="outlined"
          disabled={!(numVotes - voteCount <= 0)}
        >
          Submit
        </Button>
      </div>
      <div className="tile-container">
        {ideas.map((idea) => {
          return <Tile key={idea.id} idea={idea} />
        })}
      </div>
    </>
  )
}
