import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import ThemeProviderWrapper from './theme/ThemeProvider'

ReactDOM.render(
  <BrowserRouter>
    <ThemeProviderWrapper>
      <App />
    </ThemeProviderWrapper>
  </BrowserRouter>,
  document.getElementById('root')
)
