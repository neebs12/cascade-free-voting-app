import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllIdeas, fetchIdeasMyVotes } from '../features/ideas/ideasSlice'
import { fetchSession } from '../features/session/sessionSlice'

import TileHolder from './TileHolder'

export default function UserResults () {  
  // const results = useSelector(selectAllIdeas)
  const dispatch = useDispatch()

  const fromResults = true

  useEffect(() => {
    dispatch(fetchSession())
  }, [])

  return (
    <>
      <h1>U5</h1>
      <h2>This is the user results page</h2>
      <TileHolder fromResults={fromResults}/>
    </>
  )
}
