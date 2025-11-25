import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { createOrder } from '../../services/firebase'

const CheckoutForm = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [orderId, setOrderId] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const order = {
      buyer: { name, email, phone },
      items: cartItems,
      total: getTotalPrice(),
    }
    setLoading(true)
    try {
      const id = await createOrder(order)
      setOrderId(id)
      clearCart()
    } catch (err) {
      console.error('Error creando orden', err)
    } finally {
      setLoading(false)
    }
  }

  if (orderId) return (
    <div>
      <h3>Gracias por tu compra</h3>
      <p>Tu orden fue generada con id: <strong>{orderId}</strong></p>
    </div>
  )

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} required />
        <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input placeholder="Teléfono" value={phone} onChange={e => setPhone(e.target.value)} required />
        <button type="submit" disabled={loading}>Confirmar compra</button>
      </form>
    </div>
  )
}

export default CheckoutForm
