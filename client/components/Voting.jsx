import React, { useEffect } from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectVoteCount,
  selectVoteArr,
  postVotes,
} from '../features/ideas/ideasSlice'
import TileHolder from './TileHolder'

export default function Voting() {
  const dispatch = useDispatch()

  // The number of votes should be calculated by a formula when the ideas are submitted and the result saved to the session database record.
  // Hard coded in the slice for now
  const numVotes = 5
  const voteCount = useSelector(selectVoteCount)
  const voteArr = useSelector(selectVoteArr)

  return (
    <>
      <div id="topRightFixed">{numVotes - voteCount}</div>

      <div className="voting-center-div-col">
        <div className="voting-votes-submit-box">
          {/* <h3>Votes total: {numVotes} </h3> */}
          <h1>{numVotes - voteCount}</h1>
          <h3>Votes remaining</h3>
          
        </div>
        <Button
          // backgroundcolor="#21b6ae"
          onClick={() => {
            dispatch(postVotes(voteArr))
          }}
          component={Link}
          to="/user/after_vote"
          variant="contained"
          disabled={!(numVotes - voteCount <= 0)}
        >
          Submit
        </Button>
        
      </div>
      <TileHolder number={numVotes - voteCount} />
    </>
  )
}
