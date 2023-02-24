import { ButtonIsFav } from './ButtonIsFav'
import ButtonsCounter from './ButtonsCounter'
import { Link } from 'react-router-dom'

const ProductCard = ({ id, name = '', price = 0, stock = 0, photo, isFav }) => {
  // console.log('Render', name) // siempre que hay un cambio de estado el componente se renderiza
  return (
    <article className='card'>
      <img className='card-img-top img-height' src={photo} alt={name} />
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p className='card-text'>Price: {price} MX</p>
        <p className='card-text'>Stock: {stock}</p>
        <div className='d-flex align-items-center gap-3'>
          <ButtonsCounter count={stock} />
          <ButtonIsFav isFavProp={isFav} />
        </div>
        <Link className='btn btn-outline-primary' to={`/product/${id}`}>Ir al producto</Link>
      </div>
    </article>
  )
}

export default ProductCard
