import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Here are a few unused imports that may be helpful if I import some stuff
// import Box from '@mui/material/Box'
// import Button from '@mui/material/Button'
// import { ThemeProvider, createTheme } from '@mui/material/styles'

export default function ResultsTile ({ idea }) {
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
        <Typography variant="body2">{description}</Typography>
        <div className="vote-results-div">
          <Typography variant="h1" component="div">
            N
          </Typography>
          <Typography variant="h1" component="div">
            TN
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}
