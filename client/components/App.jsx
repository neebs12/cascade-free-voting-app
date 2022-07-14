import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Login from './Login'

import { fetchFruits } from '../actions'

function App () {

  return (
    <>
      <Login />
    </>
  )
}

export default App
