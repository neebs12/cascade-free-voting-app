import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllIdeas, fetchIdeasMyVotes } from '../features/ideas/ideasSlice'
import Tile from './Tile'

export default function TileHolder({ number, fromResults }) {
  // The number of votes should be calculated by a formula when the ideas are submitted and the result saved to the session database record.
  // Hard coded in the slice for now
  // const numVotes = useSelector(selectNumVotes)
  // const voteCount = useSelector(selectVoteCount)
  const dispatch = useDispatch()
  const ideas = useSelector(selectAllIdeas)
  // const voteArr = useSelector(selectVoteArr)
  // let finalIdeas;
  useEffect(() => {
    dispatch(fetchIdeasMyVotes())
  }, [])
  // let finalIdeas = fromResult ? ideas

  return (
    <>
      <div className="tile-container">
        {ideas.map((idea) => {
          return <Tile fromResults={fromResults} number={number} key={idea.id} idea={idea} />
        })}
      </div>
    </>
  )
}
