import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import { Layout } from '@components'

export const wrapRootElement = ({ element }) => <>{element}</>
export const wrapPageElement = ({ element }) => (
  <ChakraProvider resetCSS>
    <Layout>{element}</Layout>
  </ChakraProvider>
)
