import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
/* los estilos de las dependencias van primero que mis estilos */
import 'bootstrap/dist/css/bootstrap.min.css'
/* mis estilos */
import './styles/index.scss'

import Paths from './pages'

const root = document.getElementById('root')

createRoot(root).render(
  /* El StricMode se borra cuando voy desplegar mi aplicación */
  <BrowserRouter>
    <Paths />
  </BrowserRouter>
)
