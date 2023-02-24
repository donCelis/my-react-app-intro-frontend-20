import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          Products Page
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link active' aria-current='page' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/product/1'>
                Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
