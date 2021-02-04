// src/pages/index.js
import React from "react"
import { Box, Text } from "@chakra-ui/react"

function IndexPage() {
  return (
    <Box 
    p={8}
    bgImage="url('/src/images/headphones-bg.jpg')"
    bgPosition="center"
    bgRepeat="no-repeat">
      <Text fontSize="xl">Audiocore Homepage</Text>
    </Box>
  )
}

export default IndexPage