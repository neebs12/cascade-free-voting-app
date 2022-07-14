import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import Landing from './Landing'
import Nav from './Nav'
import BeforeVote from './BeforeVote'
import Voting from './Voting'

function App () {
  return (
    <>
      <Nav />

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/user/login' element={<Login />} />
        <Route path='/user/before_vote' element={<BeforeVote />} />
        <Route path='/user/voting' element={<Voting />} />
        {/* <Route path='/user/after_vote' element={<AfterVote />} />
        <Route path='/user/results' element={<Results />} />
        <Route path='/user/results' element={<Winners />} /> */}

      </Routes>
    </>
  )
}

export default App
