import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Add console log for debugging
console.log('Initializing React application...')

const rootElement = document.getElementById('root')
console.log('Root element:', rootElement)

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
