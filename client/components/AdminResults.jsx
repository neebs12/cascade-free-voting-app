import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ResultsTile from './ResultTile'
import WinningResultsTile from './WinningResultsTile'

import { fetchWinningIdeas } from '../features/ideas/ideasSlice'

export default function AdminResults () {
  const ideas = [
    {
      id: 1,
      owner: 'Batman',
      title: 'The Dark Idea',
      description: 'Clean up Gotham',
      votes: 2
    },
    {
      id: 2,
      owner: 'Superman',
      title: 'The Super Idea',
      description: 'Clean up Metropolis',
      votes: 4
    },
    {
      id: 3,
      owner: 'Flash',
      title: 'The Fast Idea',
      description: 'Clean up Central City',
      votes: 6
    }
  ] // hard coded information

  /* 
  - when this component is hit, it needs to be able to load the top n ideas from the server
  - (1) This will need to hit the "GET: api/v1/ideas/winners" -- this will be for the apis -- apis/ideas.js 
  - then within this component, this needs a useEffect cb
  --- this cb will do a dispatch redux store useDispatch
  --- features/ideas/ideasSlice.js
  - This will also need a useSelector
  --- the cb for this needs to get from globalState => globalState.ideas
  */

  const winningIdeas = useSelector(globalState => globalState.ideas)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchWinningIdeas())
  }, [])

  return (
    <>
      <h1>A4</h1>
      <h2>This is the page showing the results for the admin to see</h2>
      <div className="tile-container">
        {/* {ideas.map((result) => {
          return <ResultsTile key={result.id} result={result} />
        })} */}
        {winningIdeas.map((result) => {
          return <ResultsTile key={result.id} result={result} />
        })}
      </div>
    </>
  )
}
