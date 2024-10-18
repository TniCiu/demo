import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './AppRouter'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>

  </StrictMode>,
)
