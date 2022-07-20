import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWinningIdeas } from '../features/ideas/ideasSlice'
import TileHolder from './TileHolder'

export default function AdminResults () {
  


  const winningIdeas = useSelector(globalState => globalState.ideas)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchWinningIdeas())
    console.log('adminResults.jsx')
  }, [])

  return (
    <>
    <h1>A4</h1>
      <h2>This is the admin results page</h2>
    <TileHolder />
    </>
  )
}
