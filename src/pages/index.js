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
        <Img 
        fluid={data.allContentfulImage.edges[0].node.image.fluid} 
        alt={data.allContentfulImage.edges[0].node.image.title} 
        />
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
            fluid {
              ...GatsbyContentfulFluid
            }
            title
          }
        }
      }
    }
  }
`