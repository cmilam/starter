// 1. Import `extendTheme`
import React from "react"
import { Box, extendTheme } from "@chakra-ui/react"

// 2. Extend the theme with new layer styles
const theme = extendTheme({
  layerStyles: {
    base: {
      bg: "gray.50",
      border: "2px solid",
      borderColor: "gray.500",
    },
    selected: {
      bg: "teal.500",
      color: "teal.700",
      borderColor: "orange.500",
    },
  },
})

export default function extendThemeTest(){
// 3. Consume the text styles in your components
  return <Box layerStyle="selected">This is a box</Box>

// 4. You can also switch layer styles
function Example2({ isSelected }) {
  const layerStyle = isSelected ? "selected" : "base"
  return <Box layerStyle={layerStyle}>This is a box</Box>
}}