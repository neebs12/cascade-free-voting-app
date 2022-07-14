import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Login from './Login'

import { fetchFruits } from '../actions'
import IdeaTile from './IdeaTile'
import IdeaTile2 from './IdeaTile2'

function App () {
  return (
    <>
      <Login />
      <div className='login_center_div_col'>
        <p>IdeaTile1</p>
        <IdeaTile />
        <p>IdeaTile2</p>
        <IdeaTile2 />
      </div>
    </>
  )
}

export default App
