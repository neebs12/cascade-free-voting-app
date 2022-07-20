import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllIdeas } from '../features/ideas/ideasSlice'
import Tile from './Tile'

export default function TileHolder() {
  // The number of votes should be calculated by a formula when the ideas are submitted and the result saved to the session database record.
  // Hard coded in the slice for now
  // const numVotes = useSelector(selectNumVotes)
  // const voteCount = useSelector(selectVoteCount)
  const ideas = useSelector(selectAllIdeas)
  // const voteArr = useSelector(selectVoteArr)

  return (
    <>
      <div className="tile-container">
        {ideas.map((idea) => {
          return <Tile key={idea.id} idea={idea} />
        })}
      </div>
    </>
  )
}
