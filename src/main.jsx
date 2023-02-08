import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/App'
import './styles/index.css'

const root = document.getElementById('root')

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
)
