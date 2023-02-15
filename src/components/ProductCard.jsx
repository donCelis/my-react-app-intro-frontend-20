import ButtonsCounter from './ButtonsCounter'

const ProductCard = ({ name = '', price = 0, count = 0, photo, images }) => {
  // console.log('Render', name) // siempre que hay un cambio de estado el componente se renderiza
  return (
    <article className='card'>
      <img className='card-img-top img-height' src={photo} alt={name} />
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p className='card-text'>Price: {price} MX</p>
        <p className='card-text'>Count: {count}</p>
        <ButtonsCounter count={count} />
      </div>
    </article>
  )
}

export default ProductCard
