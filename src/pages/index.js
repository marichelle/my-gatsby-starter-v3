import * as React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Box, Heading, Link, Text } from '@chakra-ui/react'

import { SEO } from '@components'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Heading>Hi people</Heading>
    <Text fontSize="xl" my={5}>
      Welcome to your new Gatsby site.
    </Text>
    <Text fontSize="xl" my={5}>
      Hover on me to make me go to the moon!
    </Text>
    <Box as="div" className="astronaut" maxWidth="300px" marginBottom="1.45rem">
      <StaticImage
        src="../images/gatsby-astronaut.png"
        alt="A Gatsby astronaut"
        width={300}
        quality={95}
        formats={['AUTO', 'WEBP', 'AVIF']}
        style={{ marginBottom: `1.45rem` }}
      />
    </Box>
    <Link
      as={GatsbyLink}
      textDecor="underline"
      color="purple.500"
      fontSize="xl"
      to="/page-2/"
    >
      Go to page 2
    </Link>
  </>
)

export default IndexPage
