import * as React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Link, Heading, Text } from '@chakra-ui/react'

import { SEO } from '@components'

const SecondPage = () => (
  <>
    <SEO title="Page two" />
    <Heading>Hi from the second page</Heading>
    <Text fontSize="xl" my={5}>
      Welcome to page 2
    </Text>
    <Link
      as={GatsbyLink}
      to="/"
      color="purple.500"
      fontSize="xl"
      textDecor="underline"
    >
      Go back to the homepage
    </Link>
  </>
)

export default SecondPage
