// src/pages/index.js
import React from "react"
import { Box, Text, Button, Heading } from "@chakra-ui/react"
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "headphones-bg.jpg" }) {
          childImageSharp {
            fluid(quality: 99, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

// Set ImageData.
const imageData = data.desktop.childImageSharp.fluid


  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
      <Box maxW="64rem">
        <Heading mb={4}>Modern online and offline payments for Africa</Heading>
      <Text>
          Paystack helps businesses in Africa get paid by anyone, anywhere in the
          world
        </Text>
      <Button size="lg" colorScheme="whiteAlpha" mt="24px">
          Create a free account
      </Button>
      </Box>
        <Text fontSize="xl">Audiocore Homepage</Text>
      </BackgroundImage>
  )
}
const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`



export default {StyledBackgroundSection}
