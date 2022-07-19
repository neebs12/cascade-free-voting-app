import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { ButtonUnstyled, buttonUnstyledClasses } from '@mui/base'
import { motion } from 'framer-motion'

const buttonVariants = {
  hidden: { y: -550, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 1,
      type: 'spring',
      stiffness: 75,
    }
  }
}

export default function Landing() {
  return (
    <>
      <div className="login-center-div-row">
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <Button
            component={Link}
            to="/admin/new"
            variant="outlined"
            sx={{ width: 300, height: 100, fontSize: 36, margin: 10 }}
          >
            Admin
          </Button>
        </motion.div>
        <motion.div
          initial={{ y: -550, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 1,
            type: 'spring',
            stiffness: 75,
          }}
        >
          <Button
            component={Link}
            to="/user/login"
            variant="contained"
            sx={{ width: 300, height: 100, fontSize: 36, margin: 10 }}
          >
            User
          </Button>
        </motion.div>
      </div>
    </>
  )
}
