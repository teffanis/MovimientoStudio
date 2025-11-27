import './ProductGrid.css'
import { useEffect, useState } from 'react'
import { getProducts } from '../../services/firebase'
import ProductCard from '../ProductCard/ProductCard'

const ProductGrid = ({ category }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getProducts(category)
      .then(setProducts)
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [category])

  if (loading) return <p className="pg-loading">Cargando productos...</p>
  if (!products || products.length === 0) return <p className="pg-empty">No hay productos disponibles.</p>

  return (
    <div className="product-grid">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}

export default ProductGrid
