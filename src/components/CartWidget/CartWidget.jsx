import { Link } from 'react-router-dom'
import './CartWidget.css'
import { useCart } from '../../context/CartContext'

const CartWidget = () => {
  const { getTotalItems } = useCart()
  const total = getTotalItems()

  return (
    <div className="cart-widget">
      <Link to="/cart" className="cart-btn">
        <span className="cart-icon">🛒</span>
        {total > 0 && (
          <span className="cart-count">{total}</span>
        )}
      </Link>
    </div>
  )
}

export default CartWidget