import React from 'react'
import { graphql, Link } from 'gatsby'
import styles from './style.css'
import {Flex,
        Box,
        Button,
        Spacer,
        Heading} from "@chakra-ui/react"
import {GatsbyImage} from 'gatsby-plugin-image'

const Nav = ( props ) => (
    <Box bg="gray.900" paddingX="10%">
    <Flex maxW="100%">
        <Box p="2">
            <GatsbyImage 
                image={props.data.indexImage.childImageSharp.fluid} 
            />
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

export default Nav;

export const query = graphql`
query {
  indexImage: file(relativePath: { eq: "nodeconfremote-2021-logo.png" }) {
    childImageSharp {
      fluid(quality: 100, maxWidth: 373) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;
