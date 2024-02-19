import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import styles from './App.module.css'
import { ThemeProvider } from './providers/ThemeProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </ThemeProvider>,
)
