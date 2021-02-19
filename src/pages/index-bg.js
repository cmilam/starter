// src/pages/index.js
import React from "react"
import { Box, Text, Button, Heading, Flex, Square } from "@chakra-ui/react"
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import "../css/background-image.css"
import Layout from "../components/layout"

const indexBg = ( props ) => (
  <Layout>
  <BackgroundImage
    Tag="section"
    className="masthead"
    fluid={props.data.indexImage.childImageSharp.fluid}
    backgroundColor={`#040e18`}
  >
  <Box className="black-overlay">
  <Heading as="h1" padding="4" color="gray.50" maxW="100%" bg="gray.900">Modern online and offline payments for Africa</Heading>
    <Box maxW="64rem">
    <Text color="gray.50">
        Paystack helps businesses in Africa get paid by anyone, anywhere in the
        world
      </Text>
    <Button size="lg" colorScheme="blackAlpha" mt="24px">
        Create a free account
    </Button>
    </Box>
    <Text fontSize="xl" color="gray.50">Audiocore Homepage</Text>
    </Box>
  </BackgroundImage>
  <Flex>
    <Box width="50%" bg="gray.50" className="left-angle"></Box>
    <Box width="50%" bg="gray.50" className="right-angle"></Box>
  </Flex>
  <Square width="100px" height="100px" bg="gray.50" margin="0 auto">asdf</Square>
  </Layout>
  )

export default indexBg;

export const query = graphql`
query {
  indexImage: file(relativePath: { eq: "headphones-bg.jpg" }) {
    childImageSharp {
      fluid(quality: 100, maxWidth: 1920) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;
