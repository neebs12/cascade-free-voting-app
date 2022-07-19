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
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [voteSubmit, setVoteSubmit] = useState()

  useEffect(() => {
    dispatch(fetchUsers())
    dispatch(fetchUsersStatus())
  }, [])

  // const voted = useSelector(nameofselector)

  const handleClick = () => navigate('/admin/results', { replace: true })

  const user_status = useSelector(selectUserStatus)

  useEffect(() => {
    if (user_status?.notVoted.length === 0 && user_status?.voted.length === 0) {
      setVoteSubmit(false)
    } else if (user_status?.notVoted.length === 0) {
      setVoteSubmit(true)
    } else {
      setVoteSubmit(false)
    }
  }, [user_status])

  return (
    <>
      {user_status && (
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
              {user_status.notVoted.map((name) => {
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
              {user_status.voted.map((name) => {
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
