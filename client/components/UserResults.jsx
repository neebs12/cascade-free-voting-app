import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import {
  fetchIdeasMyVotes,

} from '../features/ideas/ideasSlice'
import { fetchSession } from '../features/session/sessionSlice'
import TileHolder from './TileHolder'

export default function UserResults () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchIdeasMyVotes())
    dispatch(fetchSession())
  }, [])

  return (
    <>
      <h1>U5</h1>
      <h2>This is the user results page</h2>
      <TileHolder />
    </>
  )
}
