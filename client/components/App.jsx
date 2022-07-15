import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import Landing from './Landing'
import Nav from './Nav'
import BeforeVote from './BeforeVote'
import Voting from './Voting'
import AfterVote from './AfterVote'
import UserResults from './UserResults'
import Winners from './Winners'
import New from './New'
import Ideas from './Ideas'
import AdminWaiting from './AdminWaiting'
import AdminResults from './AdminResults'

function App () {
  return (
    <>
      <Nav />
      <Routes>
        {/* Landing */}
        <Route path='/' element={<Landing />} />
        {/* Users Pages */}
        <Route path='/user/login' element={<Login />} />
        <Route path='/user/before_vote' element={<BeforeVote />} />
        <Route path='/user/voting' element={<Voting />} />
        <Route path='/user/after_vote' element={<AfterVote />} />
        <Route path='/user/results' element={<UserResults />} />
        <Route path='/user/winners' element={<Winners />} />
        {/* Admin Pages */}
        <Route path='/admin/new' element={<New />} />
        <Route path='/admin/ideas' element={<Ideas />} />
        <Route path='/admin/waiting' element={<AdminWaiting />} />
        <Route path='/admin/results' element={<AdminResults />} />

      </Routes>
    </>
  )
}

export default App
