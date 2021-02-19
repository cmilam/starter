
import React from 'react'
import Nav from '../nav'
import styles from './style.css'
import {Box} from '@chakra-ui/react'

const Layout = ({ children }) => {
  return (
    <Box className={styles.container} bg="gray.50" height="100vh">
      <Nav />
      {children}
    </Box>
  )
}

export default Layout