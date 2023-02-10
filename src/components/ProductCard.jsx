const ProductCard = ({ name = '', price = 0, count = 0, outletUp, outletDown }) => {
  console.log('Render', name) // siempre que hay un cambio de estado el componente se renderiza

  return (
    <article className='card'>
      <img
        className='card-img-top'
        src='https://i.blogs.es/3a3421/xiaomi-redmi-note-10-0/1366_2000.jpeg'
        alt={name}
      />
      <div className='card-body'>
        {outletUp}
        <h2 className='card-title'>{name}</h2>
        <p className='card-text'>Price: {price} MX</p>
        <p className='card-text'>Count: {count}</p>
        {outletDown}
        <button disabled={count === 0} className='btn btn-success'>Comprar</button>
      </div>
    </article>
  )
}

export default ProductCard
