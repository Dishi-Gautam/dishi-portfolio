// src/main.jsx
// Entry point: mounts App with MUI ThemeProvider, CssBaseline, and global styles
import React from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import App from './App'
import './styles/global.css'

const rootEl = document.getElementById('root')
const root = createRoot(rootEl)

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
