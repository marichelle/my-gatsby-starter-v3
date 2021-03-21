import React from 'react'
import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box as="footer" marginTop="2em">
      © {new Date().getFullYear()}, Built with
      {` `}
      <Link
        href="https://www.gatsbyjs.com"
        textDecor="underline"
        color="purple.500"
        isExternal
      >
        Gatsby
      </Link>
    </Box>
  )
}

export { Footer }
