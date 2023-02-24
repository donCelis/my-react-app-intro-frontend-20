import { useProducts } from '../hooks/useProducts'
import ProductCard from '../components/ProductCard'
import { SearchForm } from '../components/SearchForm'

function App () {
  const LIMIT = 9
  const SELECT_PROPS = 'id,title,stock,price,thumbnail'
  const {
    products,
    isLoading,
    errors,
    searchProducts,
    resetProducts,
    isSearch
  } = useProducts(LIMIT, SELECT_PROPS)

  const mappingProducts =
    !errors &&
    products.map((product) => ({
      ...product,
      name: product.title,
      photo: product.thumbnail,
      isFav: false
    }))

  return (
    <section className='container py-5'>
      <h2 className='text-center mb-5'>Lista de productos</h2>
      <SearchForm handleSubmit={searchProducts} />
      <div className='text-end my-3'>
        {isSearch && (
          <button className='btn btn-danger' onClick={resetProducts}>
            Reset
          </button>
        )}
      </div>
      {isLoading && <p className='text-center'>...Loading</p>}
      {!isLoading && (
        <section className='row gy-4'>
          {mappingProducts.length === 0 && (
            <div className='alert alert-danger text-center' role='alert'>
              No hubo resultados para esta busqueda
            </div>
          )}
          {mappingProducts !== 0 &&
              mappingProducts.map((product) => (
                <aside key={product.id} className='col-12 col-md-6 col-lg-4'>
                  <ProductCard {...product} />
                </aside>
              ))}
        </section>
      )}
    </section>
  )
}

export default App
