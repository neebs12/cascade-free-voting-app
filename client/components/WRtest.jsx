import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardHeader from '@material-ui/core/CardHeader'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}))
const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
]

// Here are a few unused imports that may be helpful if I import some stuff
// import Box from '@mui/material/Box'
// import Button from '@mui/material/Button'
// import { ThemeProvider, createTheme } from '@mui/material/styles'

export default function WRtest({ result }) {
  const classes = useStyles()

  const { title, description, votes } = result
  return (
    <Card>
      <CardHeader
        title={tier.title}
        subheader={tier.subheader}
        titleTypographyProps={{ align: 'center' }}
        subheaderTypographyProps={{ align: 'center' }}
        action={tier.title === 'Pro' ? <StarIcon /> : null}
        className={classes.cardHeader}
      />
      <CardContent>
        <div className={classes.cardPricing}>
          <Typography component="h2" variant="h3" color="textPrimary">
            ${tier.price}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            /mo
          </Typography>
        </div>
        <ul>
          {tier.description.map((line) => (
            <Typography
              component="li"
              variant="subtitle1"
              align="center"
              key={line}
            >
              {line}
            </Typography>
          ))}
        </ul>
      </CardContent>
      <CardActions>
        <Button fullWidth variant={tier.buttonVariant} color="primary">
          {tier.buttonText}
        </Button>
      </CardActions>
    </Card>
    // <Card sx={{ maxWidth: 300, maxHeight: 200, margin: 2, borderRadius: 5 }}>
    //   <CardContent>
    //     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    //       {/* The Hitchhiker */}
    //     </Typography>
    //     <Typography variant="h5" component="div">
    //       {title}
    //     </Typography>
    //     <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
    //     <Typography variant="body2">{description}</Typography>
    //     <div className="vote-results-div">
    //       <Typography variant="h2" component="div">
    //         {votes}
    //       </Typography>
    //     </div>
    //   </CardContent>
    // </Card>
  )
}
