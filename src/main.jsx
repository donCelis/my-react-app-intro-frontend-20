import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* los estilos de las dependencias van primero que mis estilos */
import 'bootstrap/dist/css/bootstrap.min.css'
/* mis estilos */
import './styles/index.scss'

import App from './components/App'

const root = document.getElementById('root')

createRoot(root).render(
  /* El StricMode se borra cuando voy desplegar mi aplicación */
  <StrictMode>
    <App />
  </StrictMode>
)
