import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useSelector, useDispatch } from 'react-redux'
import { addVote, subtractVote, selectVoteCount } from '../features/ideas/ideasSlice'
import { selectNumVotes, selectVotesLeft } from '../features/session/sessionSlice'
// import { getVoteById } from '../features/ideas/ideasSlice'

// Here are a few unused imports that may be helpful if I import some stuff
// import Box from '@mui/material/Box'
// import Button from '@mui/material/Button'
// import { ThemeProvider, createTheme } from '@mui/material/styles'

const getVoteById = (state, id) => {
  const ideas = state.ideas
  const idea = ideas.find((idea) => idea.id === id)
  const votes = idea.votes
  return votes
}

export default function IdeaTile ({ idea }) {
  const voteCount = useSelector(selectVoteCount)
  const numVotes = useSelector(selectNumVotes)

  const id = idea.id
  const votes = useSelector(state => getVoteById(state, id))
  const dispatch = useDispatch()
  const { title, description } = idea

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {/* The Hitchhiker */}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <ThemeProvider theme={theme}> */}
        {/* <Button size="small" color="primary">
            subtract
          </Button>
          <Button size="small" color="primary">
            add
          </Button> */}
        {/* <!-- Change the `data-field` of buttons and `name` of input field's for multiple plus minus buttons--> */}
        <div className="input-group plus-minus-input">
          <div className="input-group-button">
            <button onClick={() => dispatch(subtractVote(id))}
              type="button"
              className="button hollow circle"
              data-quantity="minus"
              data-field="quantity"
              disabled={voteCount <= 0}
            >
              -            </button>
          </div>
          <span className="vote-counter">{votes}</span>
          <div className="input-group-button">
            <button onClick={() => dispatch(addVote(id))}
              type="button"
              className="button hollow circle"
              data-quantity="plus"
              data-field="quantity"
              disabled={voteCount >= numVotes}
            >
              +<i className="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        {/* </ThemeProvider> */}
      </CardActions>
    </Card>
  )
}
