import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../services/firebase'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    getProducts(categoryId)
      .then(all => {
        setProducts(all)
      })
      .catch(err => {
        console.error('Error cargando productos', err)
      })
      .finally(() => setLoading(false))
  }, [categoryId])

  return (
    <div className="item-list-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="greeting-title">{greeting}</h1>
          <p className="greeting-subtitle">Descubre nuestras categorías y encuentra el movimiento perfecto para ti</p>
        </div>
      </section>

      <section className="products-section">
        {loading && <p>Cargando productos...</p>}
        {!loading && products.length === 0 && <p>No hay productos en esta categoría.</p>}
        {!loading && products.length > 0 && <ItemList products={products} />}
      </section>
    </div>
  )
}

export default ItemListContainer