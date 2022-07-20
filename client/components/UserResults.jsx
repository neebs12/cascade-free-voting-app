import React, { useEffect } from 'react'
import ResultTile from './ResultTile'
import { useSelector, useDispatch } from 'react-redux'

import {
  fetchIdeasMyVotes,
  selectAllIdeas,
  selectVoteCount,
  selectVoteArr,
  postVotes
} from '../features/ideas/ideasSlice'
import { fetchSession, selectNumVotes } from '../features/session/sessionSlice'
import Tile from './Tile'

export default function UserResults () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchIdeasMyVotes())
    dispatch(fetchSession())
  }, [])

  const numVotes = useSelector(selectNumVotes)
  const voteCount = useSelector(selectVoteCount)
  const ideas = useSelector(selectAllIdeas)
  const voteArr = useSelector(selectVoteArr)
  return (
    <>
      <h1>U5</h1>
      <h2>This is the user results page</h2>
      <div>
        <p></p>
        <p></p>

      </div>

      <div className="tile-container">
        {ideas.map((idea) => {
          return <Tile key={idea.id} idea={idea} />
        })}
      </div>
    </>
  )
}
