import './ItemListContainer.css'
import ProductGrid from '../ProductGrid/ProductGrid'

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="greeting-title">{greeting}</h1>
          <p className="greeting-subtitle">Descubre nuestras categorías y encuentra el movimiento perfecto para ti</p>
        </div>
      </section>

      <section className="catalog-section">
        <h2 className="catalog-title">Productos</h2>
        <ProductGrid />
      </section>
    </div>
  )
}

export default ItemListContainer