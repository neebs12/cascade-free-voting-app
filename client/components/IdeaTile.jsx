import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Here are a few unused imports that may be helpful if I import some stuff
// import Box from '@mui/material/Box'
// import Button from '@mui/material/Button'
// import { ThemeProvider, createTheme } from '@mui/material/styles'

export default function IdeaTile ({ idea }) {
  const { title, description } = idea

  const [count, setCount] = useState(0)

  const handleAdd = () => {
    console.log('click')
    setCount(count + 1)
    // count = count + 1
  }

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
            <button onClick={() => setCount(count - 1)}
              type="button"
              className="button hollow circle"
              data-quantity="minus"
              data-field="quantity"
            >-</button>
          </div>
          <span className="vote-counter">{count}</span>
          <div className="input-group-button">
            <button onClick={handleAdd}
              type="button"
              className="button hollow circle"
              data-quantity="plus"
              data-field="quantity"
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
