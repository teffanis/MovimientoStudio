import { useState } from 'react'
import './CartWidget.css'

const CartWidget = () => {
  const [cartCount, setCartCount] = useState(0)

  // Agregar al carrito
  const addToCart = () => {
    setCartCount(prev => prev + 1)
  }

  return (
    <div className="cart-widget">
      <button className="cart-btn" onClick={addToCart}>
        <span className="cart-icon">🛒</span>
        {cartCount > 0 && (
          <span className="cart-count">{cartCount}</span>
        )}
      </button>
    </div>
  )
}

export default CartWidget