import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardHeader } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import IconButton from '@material-ui/core/IconButton'

import { useSelector, useDispatch } from 'react-redux'
import { addVote, subtractVote, selectVoteCount } from '../features/ideas/ideasSlice'
import { selectNumVotes } from '../features/session/sessionSlice'


// Here are a few unused imports that may be helpful if I import some stuff
// import Box from '@mui/material/Box'
// import Button from '@mui/material/Button'
// import { ThemeProvider, createTheme } from '@mui/material/styles'

//TODO: Move to idea slice
const getMyVotesById = (state, id) => {
  const ideas = state.ideas
  const idea = ideas.find((idea) => idea.id === id)
  const votes = idea.myvotes
  return votes
}

export default function Tile ({ idea }) {
  //hard coded booleans below need to be replaced with selectors
  const resultsTile = true
  const userTile = false

  const voteCount = useSelector(selectVoteCount)
  const numVotes = useSelector(selectNumVotes)

  const id = idea.id
  const myvotes = useSelector(state => getMyVotesById(state, id))
  const dispatch = useDispatch()
  const { title, description, votes} = idea

  
  return (
    <Card sx={{ maxWidth: 300, margin: 2, borderRadius: 5 }}>
      <CardHeader title={title}></CardHeader>
      <CardContent>
        <Typography variant="body2">{description}</Typography>
        <div className="vote-results-div">
          <IconButton onClick={() => dispatch(subtractVote(id))}>
            <RemoveCircleIcon sx={{ fontSize: 48, color: '#8c8c8c' }} />
          </IconButton>
          <Typography variant="h2" component="div">
            {myvotes}
          </Typography>
          <Typography variant="h2" component="div">
            {votes}
          </Typography>
          <IconButton onClick={() => dispatch(addVote(id))}>
            <AddCircleIcon sx={{ fontSize: 48, color: '#8c8c8c' }} />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  )
}
