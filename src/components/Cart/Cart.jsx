import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import './Cart.css'

const Cart = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart()

  if (cartItems.length === 0) return (
    <div className="cart-empty">
      <p>Tu carrito está vacío.</p>
      <Link to="/">Volver al catálogo</Link>
    </div>
  )

  return (
    <div className="cart">
      <h2>Carrito</h2>
      <div className="cart-list">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <p>Total: ${getTotalPrice()}</p>
        <Link to="/checkout" className="checkout-btn">Ir a pagar</Link>
        <button onClick={clearCart} className="clear-btn">Vaciar carrito</button>
      </div>
    </div>
  )
}

export default Cart
