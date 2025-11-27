import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import './Cart.css'

const Cart = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart()
  const [user, setUser] = useState({ nombre: '', apellido: '', email: '', direccion: '' })
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="cart-checkout-page">
        <h2>¡Compra finalizada!</h2>
        <p><strong>Nombre:</strong> {user.nombre} {user.apellido}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Dirección:</strong> {user.direccion}</p>
        <p>Gracias por tu compra. Pronto recibirás un correo de confirmación.</p>
      </div>
    )
  }

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <p>Tu carrito está vacío.</p>
        <a href="/">Volver al catálogo</a>
      </div>
    )
  }

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
        <button onClick={clearCart} className="clear-btn">Vaciar carrito</button>
      </div>
      <div className="cart-userform">
        <h3>Datos del comprador</h3>
        <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }}>
          <input placeholder="Nombre" value={user.nombre} onChange={e => setUser(u => ({ ...u, nombre: e.target.value }))} required />
          <input placeholder="Apellido" value={user.apellido} onChange={e => setUser(u => ({ ...u, apellido: e.target.value }))} required />
          <input placeholder="Email" type="email" value={user.email} onChange={e => setUser(u => ({ ...u, email: e.target.value }))} required />
          <input placeholder="Dirección" value={user.direccion} onChange={e => setUser(u => ({ ...u, direccion: e.target.value }))} required />
          <button className="checkout-btn" type="submit">Finalizar compra</button>
        </form>
      </div>
    </div>
  )
}

export default Cart
