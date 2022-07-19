import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import {
  fetchUsersStatus,
  fetchUsers,
  selectUserStatus
} from '../features/users/usersSlice'
import { useSelector, useDispatch } from 'react-redux'

// MOCKS
import { mockVotes } from '../apis/mock/mocking_users/add-new-votes'
import mockbool from '../apis/mock/mockbool'

export default function AdminWaiting () {
  const [askingInterval, setAskingInterval] = useState(null)
  const [voteSubmit, setVoteSubmit] = useState()

  const navigate = useNavigate() // OK
  const dispatch = useDispatch() // OK

  const userStatus = useSelector(globalState => {
    return globalState.users?.userStatus
  })

  useEffect(() => {
    // OK this sets the users in the redux store
    // populates state.users.users
    // needs to be fetched multiple times. New users may come in after the ideas have been added
    dispatch(fetchUsers()) 
    // OK this sets the user statuses in the redux store
    // populates state.users.users
    dispatch(fetchUsersStatus())

    const intervalId = setInterval(() => {
      dispatch(fetchUsers()) 
      dispatch(fetchUsersStatus())
    }, 1000) // 1s update

    setAskingInterval(intervalId)
  }, []) // only executes once

  useEffect(() => {
    if (userStatus) {
      // IE: this exists. Then .voted and .notVoted MUST exists, therefore no need to use `?`. Also no need to use useEffect
      const isNotVotedEmpty = userStatus.notVoted.length === 0
      const isVotedEmpty = userStatus.voted.length === 0
      // console.log(userStatus.notVoted, userStatus.voted)
      if (isNotVotedEmpty && isVotedEmpty) {
        // no users exists
        setVoteSubmit(false)
      } else if (!isNotVotedEmpty) {
        // there are still users that need to vote
        setVoteSubmit(false)
      } else {
        // here, users exists and the non-voted array is empty
        // therefore true
        // debugger
        setVoteSubmit(true)
        // set voted and un voted states here
      }
    }
  }, [userStatus])

  const handleClickNextPage = () => {
    // need GCL if can navigate to next page
    if (!voteSubmit) {
      return alert('Voting is not finished (either no users OR all users have yet to vote)')
    }
    // then, clear intervals & navigate accordingly
    clearInterval(askingInterval)
    setAskingInterval(null)    
    navigate('/admin/results')
  }

  const [isMocked, setItMocked] = useState(false)

  const handleMockVotes = () => {
    if (isMocked) {
      return console.log('already mocked, cannot mock again')
    }
    console.log('is mocking')
    mockVotes(20) // n second duration for mocking votes
    setItMocked(true)
  }

  return (
    <>
      <h1>A3</h1>
      <h2>
        This is the page where the admin waits for the voting to finish and
        can see who still is left to vote
      </h2>
      <div className="admin-waiting-vote-table">
        <div className="admin-waiting-vote-col">
          <h3>Still waiting to submit vote</h3>
            {(userStatus || {notVoted: []}).notVoted.map((name) => {
              return (
                <div className="admin-waiting-vote-name" key={name.id}>
                  {name.name}
                </div>
              )
            })}
          </div>
          <div className="admin-waiting-vote-col">
            <h3>Voting completed</h3>
            {(userStatus || {voted: []}).voted.map((name) => {
              return (
                <div className="admin-waiting-vote-name" key={name.id}>
                  {name.name}
                </div>
              )
            })}
        </div>
      </div>
      <Button 
        variant="contained"  
        onClick={handleClickNextPage}
      >
        Show Results
      </Button>      
      {mockbool && 
        <>
          <Button 
            variant="contained"  
            onClick={handleMockVotes}
          >
            Mock - Place async votes
          </Button>
        </>
      }
    </>
  )
}
