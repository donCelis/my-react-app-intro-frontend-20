import { Routes, Route } from 'react-router-dom'
/* components */
import Navbar from '../components/Navbar'
/* pages */
import App from './App'
import Details from './Details'

function Paths () {
  const year = new Date().getFullYear()
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/product/:id' element={<Details />} />
      </Routes>
      <footer>
        <p className='text-center'>Intro frontend - Gen 20 {year}</p>
      </footer>
    </>
  )
}

export default Paths
