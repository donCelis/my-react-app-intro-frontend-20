import { useEffect, useState } from 'react'
import { getProducts } from '../services'
import { instance } from '../services/instance'

export const useProducts = (limit, select) => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsloading] = useState(true)
  const [errors, setErrors] = useState(null)
  const [isSearch, setIsSearch] = useState(false)

  const fetchProducts = async () => {
    try {
      const { products } = await getProducts({ limit, select })
      setProducts(products)
    } catch (error) {
      setErrors(error)
    } finally {
      setIsloading(false)
    }
  }

  const resetProducts = async () => {
    setIsloading(true)
    try {
      const { data } = await instance.get(
        `/products?select=${select}&limit=${limit}`
      )
      setProducts(data.products)
    } catch (error) {
      setErrors(error)
    } finally {
      setIsloading(false)
    }
    setIsSearch(false)
  }

  const searchProducts = async (event) => {
    event.preventDefault()
    const searchInput = event.target['search-input'].value

    // if (searchInput === '') return
    setIsloading(true)

    try {
      const { data } = await instance.get(
        `/products/search?q=${searchInput}&select=${select}`
      )
      setProducts(data.products)
      event.target.reset()
    } catch (error) {
      setErrors(error)
    } finally {
      setIsloading(false)
    }

    setIsSearch(true)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return { products, isLoading, errors, resetProducts, searchProducts, isSearch }
}
