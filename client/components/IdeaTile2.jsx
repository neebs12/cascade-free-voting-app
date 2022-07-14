import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
)

export default function IdeaTile2 () {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          The Hitchhiker
        </Typography>
        <Typography variant="h5" component="div">
          7 Minute Abs
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        </Typography>
        <Typography variant="body2">
        7's the key number here. Think about it. <br />
        7-Elevens. 7 dwarves. 7, man, that's the number. <br />
        7 chipmunks twirlin' on a branch, <br />
        eatin' lots of sunflowers on my uncle's ranch. <br />
        </Typography>
      </CardContent>
    </Card>
  )
}
