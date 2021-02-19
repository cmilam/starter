import React from 'react'
import { Link } from 'gatsby'
import styles from './style.css'
import {Flex,
        Box,
        Button,
        Spacer,
        Heading} from "@chakra-ui/react"

const Nav = () => {
  return (
    <Box bg="gray.900" paddingX="10%">
    <Flex maxW="100%">
        <Box p="2">
            <Heading as="h1" color="gray.50"><Link to="/">Audiocore</Link></Heading>
        </Box>
        <Spacer />
        <Box>
            <Button mr="4" marginY="10px">
                <Link to="/locations">Locations</Link>
            </Button>
            <Button>
                <Link to="/contact">Contact</Link>
            </Button>
        </Box>
    </Flex>
    </Box>
  )
}

export default Nav
