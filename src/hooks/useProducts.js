import { useEffect, useState } from 'react'
import { getProducts } from '../services'

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsloading] = useState(true)
  const [errors, setErrors] = useState(null)

  const fetchProducts = async () => {
    try {
      const LIMIT = 9
      const SELECT_PROPS = 'id,title,stock,price,thumbnail'
      const { products } = await getProducts({ limit: LIMIT, select: SELECT_PROPS })
      setProducts(products)
    } catch (error) {
      setErrors(error)
    } finally {
      setIsloading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return { products, isLoading, errors }
}
