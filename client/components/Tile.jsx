import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardHeader } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import IconButton from '@material-ui/core/IconButton'

import { useSelector, useDispatch } from 'react-redux'
import { addVote, subtractVote } from '../features/ideas/ideasSlice'
import {
  selectIsUserPath,
  selectResultsReady
} from '../features/users/usersSlice'
// Here are a few unused imports that may be helpful if I import some stuff
// import Box from '@mui/material/Box'
// import Button from '@mui/material/Button'
// import { ThemeProvider, createTheme } from '@mui/material/styles'

// TODO: Move to idea slice
const getMyVotesById = (state, id) => {
  const ideas = state.ideas
  const idea = ideas.find((idea) => idea.id === id)
  const votes = idea.myvotes
  return votes
}

export default function Tile({ idea, votesLeft, fromResults }) {
  const isUserPath = useSelector(selectIsUserPath)
  // TODO need a better proxy than this selector for assessing if we
  // are at a results page (will cause problems on reload)
  const isResultsPage = useSelector(selectResultsReady)
  console.log('isUserPath', isUserPath)
  console.log('isResultsPage', isResultsPage)

  const id = idea.id
  const myvotes = useSelector((state) => getMyVotesById(state, id))
  const dispatch = useDispatch()
  const { title, description, votes } = idea
  const atVoteMin = votesLeft <= 0
  const atVoteMax = votesLeft >= 5

  const lightGrey = '#cccccc'
  const darkGrey = '#8c8c8c'

  const onClickDecrease = () => {
    if (fromResults) return false
    if (atVoteMax) {
      return
    }
    dispatch(subtractVote(id))
  }

  const onClickIncrease = () => {
    if (fromResults) return false
    if (atVoteMin) {
      console.log('no votes left')
      return
    }
    dispatch(addVote(id))
  }

  return (
    <>
      <Card sx={{ maxWidth: 300, margin: 2, borderRadius: 5 }}>
        <CardHeader title={title}></CardHeader>
        <CardContent>
          <Typography variant="body2">{description}</Typography>
          <div className="vote-results-div">
            {isUserPath && !isResultsPage && (
              <IconButton
                disabled={atVoteMax || myvotes === 0}
                onClick={onClickDecrease}
              >
                <RemoveCircleIcon
                  sx={{
                    fontSize: 48,
                    color: atVoteMax || myvotes === 0 ? lightGrey : darkGrey,
                  }}
                />
              </IconButton>
            )}
            {isUserPath && (
              <Typography variant="h2" component="div">
                {myvotes}
              </Typography>
            )}
            <Typography variant="h2" component="div">
              {fromResults && votes}
            </Typography>
            {isUserPath && !isResultsPage && (
              <IconButton
                disabled={atVoteMin || myvotes === 5}
                onClick={onClickIncrease}
              >
                <AddCircleIcon
                  sx={{ fontSize: 48, color: atVoteMin ? lightGrey : darkGrey }}
                />
              </IconButton>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  )
}
