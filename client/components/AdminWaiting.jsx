import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

export default function AdminWaiting() {
  const user_status = {
    voted: [
      { id: 1, name: 'John' },
      { id: 2, name: 'Paul' },
      { id: 3, name: 'Ringo' },
    ],
    notVoted: [
      { id: 1, name: 'Leo' },
      { id: 2, name: 'Raph' },
      { id: 3, name: 'Mikey' },
    ],
  }

  return (
    <>
      <h1>A3</h1>
      <h2>
        This is the page where the admin waits for the voting to finish and can
        see who still is left to vote
      </h2>
      <div>
        <Button variant="outlined">Reload</Button>
      </div>
      <div className="admin-waiting-vote-table">
        <div className="admin-waiting-vote-col">
          <h3>Still waiting to submit vote</h3>
          {user_status.voted.map((name) => {
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
          {user_status.notVoted.map((name) => {
            return (
              <div className="admin-waiting-vote-name" key={name.id}>
                {name.name}
              </div>
            )
            // return <IdeaTile key={idea.id} idea={idea} />
          })}
        </div>
      </div>
      <Button variant="contained" disabled>
        Show Results
      </Button>{' '}
      <Button component={Link} to="/admin/results" variant="outlined">
        Show Results
      </Button>
    </>
  )
}
