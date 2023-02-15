import ProductCard from './ProductCard'
import { products } from '../../db.json'

function App () {
  const mappingProducts = products.map(
    ({ title, stock, price, thumbnail, images }, index) => ({
      /* no deberían usar el index de un array como id */
      id: index,
      price,
      name: title,
      count: stock,
      photo: thumbnail,
      images
    })
  )

  return (
    <section className='container py-5'>
      <h2 className='text-center mb-5'>Lista de productos</h2>
      <section className='row'>
        {mappingProducts.map((product) => (
          <aside key={product.id} className='col-4'>
            <ProductCard {...product} />
          </aside>
        ))}
      </section>
    </section>
  )
}

export default App
