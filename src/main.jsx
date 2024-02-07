import React from 'react'
import ReactDOM from 'react-dom/client'
import {theme} from './styles/theme.js'
import { ChakraProvider } from '@chakra-ui/react'
import { router } from './routes/index.jsx'
import { RouterProvider } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} >
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
