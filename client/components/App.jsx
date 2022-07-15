import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Login from './Login'

import { fetchFruits } from '../actions'
import IdeaTile from './IdeaTile'
import IdeaTile2 from './IdeaTile2'

function App () {
  const ideas = [
    {
      id: 1,
      title: '7 Minute Abs',
      description: "7's the key number here. Think about it."
    },
    {
      id: 2,
      title: '6 Minute Abs',
      description: 'But what if someone comes up with 6 minute abs.'
    },
    { id: 3, title: 'Minute Abs', description: 'Abs in Minutes' }
  ]
  return (
    <>
      <Login />
      <div className="login_center_div_col">
        <p>IdeaTile1</p>
        <IdeaTile />
      </div>

      <p>IdeaTile2</p>
      <div className="tile-container">
        {ideas.map((idea) => {
          return <IdeaTile2 key={idea.id} idea={idea} />
        })}
      </div>
    </>
  )
}

export default App
