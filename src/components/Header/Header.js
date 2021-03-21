import * as React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Heading, Link } from '@chakra-ui/react'

const Header = ({ siteTitle }) => (
  <Box as="header" background="primary" marginBottom="1.45rem">
    <Box as="div" m="0 auto" maxW="960px" p="1.45rem 1.0875rem">
      <Heading margin="0">
        <Link
          as={GatsbyLink}
          to="/"
          color="white"
          _hover={{ textDecor: `none` }}
        >
          {siteTitle}
        </Link>
      </Heading>
    </Box>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export { Header }
