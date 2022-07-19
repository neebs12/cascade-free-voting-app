import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardHeader } from '@mui/material'

// Here are a few unused imports that may be helpful if I import some stuff
// import Box from '@mui/material/Box'
// import Button from '@mui/material/Button'
// import { ThemeProvider, createTheme } from '@mui/material/styles'

export default function WinningResultsTile({ result }) {
  const { title, description, votes } = result
  return (
    <Card sx={{ maxWidth: 300, maxHeight: 200, margin: 2, borderRadius: 5 }}>
      <CardHeader title={title}></CardHeader>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom> */}
          {/* The Hitchhiker */}
        {/* </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography> */}
        <Typography variant="body2">{description}</Typography>
        <div className="vote-results-div">
          <Typography variant="h2" component="div">
            {votes}
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}
