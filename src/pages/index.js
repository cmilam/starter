import React from "react"
import {graphql} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'
import {
  Heading,
  Box,
  Container
} from "@chakra-ui/react"

const Home = ({ data }) => {
  return(
    <Box>
      <Container maxW="64rem" padding="4">
        <Heading as="h1" size="4xl" orientation="horizontal" paddingTop="4" paddingBottom="8">AudioCORE homepage</Heading>
        <GatsbyImage 
        image={data.allContentfulImage.edges[0].node.image.gatsbyImageData} 
        alt={data.allContentfulImage.edges[0].node.image.title} 
        />
      </Container>
    </Box>
  )
}

export default Home

export const query = graphql`
{
  allContentfulImage {
    edges {
      node {
        image {
          title
          gatsbyImageData(quality: 100, formats: AUTO, layout: FULL_WIDTH, backgroundColor: "#000")
        }
      }
    }
  }
}
`