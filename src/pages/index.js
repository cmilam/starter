import React from "react"
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import {
  Box,
  Container
} from "@chakra-ui/react"

const Home = ({ data }) => {
  return(
    <Box>
      <Container>
        <h1>AudioCORE homepage</h1>
      </Container>
      <Container>
        <Img 
        fluid={data.allContentfulImage.edges.node.image.fluid} 
        alt={data.allContentfulImage.edges.node.image.title} 
        />
      </Container>
    </Box>
  )
}

export default Home

export const query = graphql `
query MyQuery {
    allContentfulImage {
      edges {
        node {
          image {
            fluid(maxWidth: 1280, maxHeight: 1280) {
                ...GatsbyContentfulFluid
            }
            title
          }
        }
      }
    }
  }
`