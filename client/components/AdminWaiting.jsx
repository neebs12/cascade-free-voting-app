import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import {
  fetchUsersStatus,
  fetchUsers,
  selectVoted,
  selectNotVoted
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

  const userStatus = useSelector((globalState) => {
    return globalState.users?.userStatus
  })

  const voted = useSelector(selectVoted)
  const notVoted = useSelector(selectNotVoted)


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
    }, 3000) // 3 sec update

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
      return alert(
        'Voting is not finished. Please ensure that either:\nAtleast one user has logged in\nOR\nAll users have voted'
      )
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
    mockVotes(10) // n second duration for mocking votes
    setItMocked(true)
  }
  return (
    <>
      {/* <h1>A3</h1> */}
      <h2>Voting status as below:</h2>
      <div className="admin-waiting-vote-table">
        <div className="admin-waiting-vote-col">
          <h3>Still waiting to submit vote</h3>
          {(userStatus || { notVoted: [] }).notVoted.map((name) => {
            return (
              <Button
                sx={{ display: 'flex', my: 1 }}
                key={name.id}
                variant="outlined"
              >
                {name.name}
              </Button>
            )
          })}
        </div>
        <div className="admin-waiting-vote-col">
          <h3>Voting completed</h3>
          {(userStatus || { voted: [] }).voted.map((name) => {
            return (
              <Button
                sx={{ display: 'flex', my: 1 }}
                key={name.id}
                variant="contained"
              >
                {name.name}
              </Button>
            )
          })}
        </div>
      </div>
      {userStatus &&
      <Button variant="contained" disabled={!(notVoted.length === 0 && voted.length > 0)} onClick={handleClickNextPage}>
        Show Results
      </Button>}
<p></p>
      {mockbool && (
        <>
          <Button variant="contained" onClick={handleMockVotes}>
            Mock - Place async votes
          </Button>
        </>
      )}
    </>
  )
}
