import React from "react"
import {graphql} from 'gatsby'
import {Img} from 'gatsby-image'
import {
  Box,
  Container
} from "@chakra-ui/react"

const Home = ({ data }) => {
  const contentful = data.allContentfulImage.edges.node
  return(
    <Box>
      <Container>
        <h1>AudioCORE homepage</h1>
      </Container>
      <Container>
        <Img 
        fluid={contentful.image.fluid} 
        alt={contentful.image.title} 
        />
      </Container>
    </Box>
  )
}

export default Home

export const query = graphql `
query {
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