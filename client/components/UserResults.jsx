import React from 'react'
import ResultTile from './ResultTile'
import { useSelector } from 'react-redux'
import { selectAllIdeas } from '../features/ideas/ideasSlice'

export default function UserResults () {
  const results = useSelector(selectAllIdeas)
  return (
    <>
      <h1>U5</h1>
      <h2>This is the user results page</h2>
      <div>
        <p></p>
        <p></p>

      </div>

      <div className="tile-container">
        {results.map((result) => {
          return <ResultTile key={result.id} result={result} />
        })}
      </div>
    </>
  )
}
