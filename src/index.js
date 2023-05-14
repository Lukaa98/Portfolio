import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from './App'
import ThemeProviderWrapper from './theme/ThemeProvider'

ReactDOM.render(
  <HashRouter>
    <ThemeProviderWrapper>
      <App />
    </ThemeProviderWrapper>
  </HashRouter>,
  document.getElementById('root')
)
