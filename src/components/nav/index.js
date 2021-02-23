import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styles from './style.css'
import {Flex,
        Box,
        Button,
        Spacer,
        Heading} from "@chakra-ui/react"
import {GatsbyImage} from 'gatsby-plugin-image'





  export default function Nav() {
    const data = useStaticQuery(graphql`
      query {
        file(relativePath: { eq: "nodeconfremote-2021-logo-nav.png" }) {
          childImageSharp {
            gatsbyImageData(quality: 100, formats: AUTO)
            }
          }
        }
    `)
    return <Box bg="gray.900" paddingX="10%">
    <Flex maxW="100%">
        <Box p="2">
            <GatsbyImage 
                image={data.file.childImageSharp.gatsbyImageData}
                alt="logo"
                layout="constrained"
                width="161"
                height="63"
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
  }
  