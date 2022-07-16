import React, { useEffect } from 'react'
import { selectAllIdeas, fetchIdeas } from '../features/ideas/ideasSlice'
import { useSelector, useDispatch } from 'react-redux'
import { add } from '../features/ideas/ideasSlice'

export default function Ideas () {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('use effect')
    dispatch(fetchIdeas())
    dispatch(add())
  }, [])

  const ideas = useSelector(selectAllIdeas)

  return (
    <>
      <h1>A2</h1>

      {JSON.stringify(ideas)}
      <h2>This the page where the admin enters all the ideas</h2>
    </>
  )
}
