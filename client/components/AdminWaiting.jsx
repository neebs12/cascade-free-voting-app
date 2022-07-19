import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import {
  fetchUsersStatus,
  fetchUsers,
  selectUserStatus
} from '../features/users/usersSlice'
import { useSelector, useDispatch } from 'react-redux'

export default function AdminWaiting () {
  /*
  At the start of this page, we are fetching all the user statuses

  */
  const navigate = useNavigate() // OK
  const dispatch = useDispatch() // OK
  const [voteSubmit, setVoteSubmit] = useState()

  const userStatus = useSelector(selectUserStatus)


  useEffect(() => {
    // OK this sets the users in the redux store
    // populates state.users.users
    // this only needs to be fetched once
    dispatch(fetchUsers()) 
    // OK this sets the user statuses in the redux store
    // populates state.users.users
    dispatch(fetchUsersStatus())
  }, [])

  // const voted = useSelector(nameofselector)

  const handleClick = () => {
    // navigate('/admin/results')
  }


  useEffect(() => {
    if (userStatus?.notVoted.length === 0 && userStatus?.voted.length === 0) {
      setVoteSubmit(false)
    } else if (userStatus?.notVoted.length === 0) {
      setVoteSubmit(true)
    } else {
      setVoteSubmit(false)
    }
  }, [userStatus])

  return (
    <>
      {userStatus && (
        <>
          <h1>A3</h1>
          <h2>
            This is the page where the admin waits for the voting to finish and
            can see who still is left to vote
          </h2>
          <div>
            <Button variant="outlined">Reload</Button>
          </div>
          <div className="admin-waiting-vote-table">
            <div className="admin-waiting-vote-col">
              <h3>Still waiting to submit vote</h3>
              {userStatus.notVoted.map((name) => {
                return (
                  <div className="admin-waiting-vote-name" key={name.id}>
                    {name.name}
                  </div>
                )
                // return <IdeaTile key={idea.id} idea={idea} />
              })}
            </div>
            <div className="admin-waiting-vote-col">
              <h3>Voting completed</h3>
              {userStatus.voted.map((name) => {
                return (
                  <div className="admin-waiting-vote-name" key={name.id}>
                    {name.name}
                  </div>
                )
                // return <IdeaTile key={idea.id} idea={idea} />
              })}
            </div>
          </div>
          <Button variant="contained" disabled={!voteSubmit} onClick={handleClick}>
            Show Results
          </Button>
        </>
      )}
    </>
  )
}
