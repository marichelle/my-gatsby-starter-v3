import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import { Layout } from '@components'
import customTheme from '@styles/theme'

export const wrapRootElement = ({ element }) => <>{element}</>
export const wrapPageElement = ({ element }) => (
  <ChakraProvider resetCSS theme={customTheme}>
    <Layout>{element}</Layout>
  </ChakraProvider>
)
