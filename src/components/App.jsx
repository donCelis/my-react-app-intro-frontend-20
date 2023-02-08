import ProductCard from './ProductCard'

function App () {
  return (
    <section className='container py-5'>
      <h2 className='text-center mb-5'>Lista de productos</h2>
      <section className='row'>
        <aside className='col-4'>
          <ProductCard
            name='Redmi Note 1000'
            count={10}
            price={100}
          />
        </aside>
        <aside className='col-4'>
          <ProductCard
            name='Iphone 20'
            count={30}
            price={200}
          />
        </aside>
      </section>
    </section>
  )
}

export default App
