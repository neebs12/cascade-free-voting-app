import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardHeader } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

// Here are a few unused imports that may be helpful if I import some stuff
// import Box from '@mui/material/Box'
// import Button from '@mui/material/Button'
// import { ThemeProvider, createTheme } from '@mui/material/styles'

export default function WinningResultsTile({ result }) {
  const { title, description, votes } = result
  return (
    <Card sx={{ maxWidth: 300, margin: 2, borderRadius: 5 }}>
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
            <RemoveCircleIcon sx={{fontSize:48, color:'#8c8c8c'}}/>
          </Typography>
          <Typography variant="h2" component="div">
            {votes} 
          </Typography>
          <Typography variant="h2" component="div">
            <AddCircleIcon sx={{fontSize:48, color:'white'}}/>
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}
