import { extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
  colors: {
    background: '#fff',
    primary: '#639',
    secondary: '#ff6347',
    text: '#333',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    bold: 700,
    heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
})

export default customTheme
