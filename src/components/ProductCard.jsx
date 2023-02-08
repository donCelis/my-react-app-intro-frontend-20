import { useState } from 'react'

const ProductCard = ({ name = '', price = 0, count = 0 }) => {
  console.log('Render', name) // siempre que hay un cambio de estado el componente se renderiza
  const [value, setValue] = useState(0)

  return (
    <article className='card'>
      <img
        className='card-img-top'
        src='https://i.blogs.es/3a3421/xiaomi-redmi-note-10-0/1366_2000.jpeg'
        alt={name}
      />
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p className='card-text'>Price: {price} MX</p>
        <p className='card-text'>Count: {count}</p>
        <div className='d-flex align-items-center gap-3'>
          <button className='btn btn-primary'>-</button>
          <p className='m-0'>{value}</p>
          <button className='btn btn-primary' onClick={() => setValue(value + 1)}>
            +
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
