import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { instance } from '../services/instance'

function Details () {
  const { id } = useParams()

  const [product, setProduct] = useState({})

  useEffect(() => {
    /* const getProduct = async () => {
      const { data } = await instance.get(
        `https://dummyjson.com/products/${id}`
      )
      setProduct(data)
    }

    getProduct() */
    instance
      .get(`https://dummyjson.com/products/${id}`)
      .then(({ data }) => setProduct(data))
  }, [])

  const validateProduct = Object.keys(product)

  return (
    <section className='container py-4'>
      <Link className='btn btn-primary' to='/'>Atras</Link>
      <h2 className='text-center'>Detalles de un producto</h2>
      {validateProduct.length !== 0 && (
        <article>
          <h3>{product.title}</h3>
          <img src={product.thumbnail} alt={product.title} />
          <p>{product.description}</p>
        </article>
      )}
    </section>
  )
}

export default Details
