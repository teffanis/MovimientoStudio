import { useState, useEffect } from 'react'
import ProductService from '../services/ProductService'

export const useProducts = (category) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    ProductService.getProducts(category)
      .then(setProducts)
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [category])

  return { products, loading, error }
}

export default useProducts
