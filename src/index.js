import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { AppProvider } from './GlobalState/Context'
import { StateProvider } from './GlobalState/StateProvider'

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
