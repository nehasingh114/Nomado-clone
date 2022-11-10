import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import {ChakraProvider} from "@chakra-ui/react"
import { store } from './store'
import {Provider} from "react-redux"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <ChakraProvider>
      <App />
      </ChakraProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
